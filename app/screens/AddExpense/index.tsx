import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  FlatList,
  RefreshControl,
} from "react-native";
import { SearchBar } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { RegexValidator } from "../../utils/regexValidator";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { useDispatch, useSelector, useStore } from "react-redux";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { Searchbar } from "react-native-paper";
import SelectableItem from "../../components/SelectableItem";

type Item = {
  id: string;
  type: string;
  name: string;
  selected?: boolean;
};

type IState = {
  userReducer: IUserState;
};

const AddExpense: React.FC = (): JSX.Element => {
  const [data, setData] = useState({
    activityName: "",
    expenseAmount: "",
    isValidExpenseAmount: true,
  });
  const [fetchedItems, setFetchedItems] = useState<Array<Item>>([]);
  const [items, setItems] = useState<Array<Item>>([]);
  const selectedItems = useRef<Array<Item>>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [renderFlatList, setRenderFlatList] = useState(false);

  const dispatch = useDispatch();
  const { loading, id, friends, groups } = useSelector((state: IState) => state.userReducer);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchItems();
  }, [dispatch]);

  const confirm = () => {
    if (data.activityName == "") {
      ToastAndroid.show("لطفا نام فعالیت را وارد کنید.", ToastAndroid.SHORT);
    } else if (data.expenseAmount == "") {
      ToastAndroid.show("لطفا مبلغ را وارد کنید.", ToastAndroid.SHORT);
    } else if (data.isValidExpenseAmount) {
      dispatch(
        userActions.onAddExpenseRequest(id, data.activityName, "description", "fruit", "10000")
      );
    }
  };

  const fetchItems = () => {
    if (friends.length + groups.length != fetchedItems.length) {
      let items: Array<Item> = fetchedItems;
      friends.forEach((friend) => {
        if (items.find((element) => element.id == friend.friendId) == undefined) {
          let item: Item = {
            id: friend.friendId,
            type: "friend",
            name: friend.friendName,
            selected: false,
          };
          items.push(item);
        }
      });
      groups.forEach((group) => {
        if (items.find((element) => element.id == group.id) == undefined) {
          let item: Item = {
            id: group.id,
            type: "group",
            name: group.name,
            selected: false,
          };
          items.push(item);
        }
      });
      setFetchedItems(items);
      setItems(items);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchItems();
    setRefreshing(false);
  }, [dispatch]);

  const onChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
    if (text != "") {
      setItems(items.filter((item) => item.name.includes(text)));
      setRenderFlatList(!renderFlatList);
    } else {
      setItems(fetchedItems);
    }
  };

  const setActivityName = (text: string) => {
    setData({
      ...data,
      activityName: text,
    });
  };

  const setExpenseAmount = (text: string) => {
    setData({
      ...data,
      expenseAmount: text,
      isValidExpenseAmount: text == "" || RegexValidator.validateExpenseAmount(text) == true,
    });
  };

  const cancel = () => NavigationService.goBack();

  const onSelectItem: any = (item: Item) => {
    item.selected = !item.selected;
    if (selectedItems.current.find((element) => element.id == item.id) == undefined) {
      selectedItems.current.push(item);
    } else {
      const index = selectedItems.current.indexOf(item);
      if (index > -1) {
        selectedItems.current.splice(index, 1);
      }
    }
    setRenderFlatList(!renderFlatList);
  };

  const renderHeaderComponent = (): JSX.Element => {
    return (
      <>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="نام فعالیت"
            placeholderTextColor="#A4A4A4"
            style={styles.textInput}
            onChangeText={(text) => setActivityName(text)}
          />
          <TextInput
            placeholder="مبلغ (تومان)"
            placeholderTextColor="#A4A4A4"
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={(text) => setExpenseAmount(text)}
          />
        </View>
        {!data.isValidExpenseAmount ? (
          <Animatable.Text style={styles.validationText} animation="fadeIn" duration={500}>
            مبلغ باید به صورت یک عدد حداکثر ده رقمی باشد.
          </Animatable.Text>
        ) : null}
      </>
    );
  };

  const renderSelectableItem: any = ({ item }) => (
    <SelectableItem
      id={item.id}
      Name={item.name}
      selected={item.selected}
      onPressItem={() => onSelectItem(item)}
    />
  );

  const renderFooterComponent = (): JSX.Element => {
    return (
      <>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={confirm}>
            <Text style={styles.addButtonText}>ایجاد هزینه</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton} onPress={cancel}>
            <Text style={styles.removeButtonText}>انصراف</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <Searchbar
              placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onChangeText={onChangeSearchQuery}
              value={searchQuery}
              iconColor="#1AD927"
              onIconPress={() => onChangeSearchQuery(searchQuery)}
            />
            <FlatList
              ListHeaderComponent={renderHeaderComponent}
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              data={items}
              renderItem={renderSelectableItem}
              extraData={renderFlatList}
              scrollEnabled={true}
              ListFooterComponent={renderFooterComponent}
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default AddExpense;
