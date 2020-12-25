import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  FlatList,
  RefreshControl,
  Modal,
  Button,
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
import { log } from "../../utils/logger";
import { text } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

type Item = {
  id: string;
  type: string;
  name: string;
  share: number;
  selected?: boolean;
};

type IState = {
  userReducer: IUserState;
};

const AddExpense: React.FC = (): JSX.Element => {
  const loggedInUserId: string = useStore().getState()["authReducer"].id;
  const [data, setData] = useState({
    activityName: "",
    expenseAmount: "",
    isValidExpenseAmount: true,
    categories: [{id:"0", selected:false,  name: "مواد غذایی", icon: "utensils"}, 
                    {id:"1", selected:false,  name: "پوشاک", icon: "tshirt"}, 
                    {id:"2", selected:false,  name: "هدیه", icon: "gift"},
                    {id:"3", selected:false,  name: "سلامت", icon: "heartbeat"},
                    {id:"4", selected:false,  name: "لوازم تحریر", icon: "pencil-ruler"},
                    {id:"5", selected:false,  name: "ورزش", icon: "dumbbell"},
                    {id:"6", selected:false,  name: "سفر", icon: "suitcase-rolling"},
                    {id:"7", selected:false,  name: "کالای دیجیتال", icon: "laptop"}]
  });
  const [fetchedItems, setFetchedItems] = useState<Array<Item>>([]);
  const [items, setItems] = useState<Array<Item>>([]);
  const selectedItems = useRef<Array<Item>>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [renderFlatList, setRenderFlatList] = useState(false);
  const [modalVisible, setModalVisibility] = useState(false);
  const [shareEqual, setDivideEqual] = useState(false);

  const dispatch = useDispatch();
  const { loading, id, name, friends, groups } = useSelector((state: IState) => state.userReducer);
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
    dispatch(userActions.onGetUserFriendsRequest(loggedInUserId));
    dispatch(userActions.onGetUserGroupsRequest(loggedInUserId));
    if (friends != null && friends != undefined && groups != undefined && groups != null) {
      if (friends.length + groups.length != fetchedItems.length) {
        let items: Array<Item> = fetchedItems;
        friends.forEach((friend) => {
          if (items.find((element) => element.id == friend.friendId) == undefined) {
            let item: Item = {
              id: friend.friendId,
              type: "friend",
              name: friend.friendName,
              selected: false,
              share: 0,
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
              share: 0,
            };
            items.push(item);
          }
        });
        setFetchedItems(items);
        setItems(items);
      }
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
    if (selectedItems.current.find((element) => element.id == id) == undefined) {
      selectedItems.current.push({ id: id, name: name, share: 0, type: "myself" });
    }
    setRenderFlatList(!renderFlatList);
  };

  const renderSelectableItem: any = ({ item }) => (
    <SelectableItem
      id={item.id}
      Name={item.name}
      selected={item.selected}
      onPressItem={() => onSelectItem(item)}
    />
  );

  const renderCategory: any = ({ item }) => (
    <>
    <SelectableItem
      id={item.id}
      Name={item.name}
      selected={item.selected}
      onPressItem={() => {data.categories[item.id].selected = !data.categories[item.id].selected;
        setRenderFlatList(!renderFlatList);
      }
    }
    />
      <FontAwesomeIcon icon={item.icon} size={20} style={{position: "relative", top:20}}/>
    </>
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

  const showModal = () => {
    onSelectItem({ id: id, name: name, share: 0, type: "myself" });
    setModalVisibility(true);
  };

  const divideEqual = (expense: string, selectedItems: Array<Item>) => {
    if (!shareEqual) {
      const money = Number(expense);
      const length = selectedItems.length;
      const equalShare = Number((money / length).toFixed(3));
      selectedItems.forEach((item) => {
        item.share = equalShare;
      });
      setDivideEqual(!shareEqual);
      setRenderFlatList(!renderFlatList);
    } else {
      setDivideEqual(false);
    }
  };

  const renderModalFlatList: any = ({ item }) => (
    <View style={styles.modalItemContainer}>
      <Text style={styles.modalNameText}>{item.name}</Text>
      {shareEqual ? (
        <Text style={styles.modalShareText}>{item.share.toString()}</Text>
      ) : (
        <TextInput
          placeholder="مبلغ(تومان)"
          style={{ textAlign: "center", borderTopWidth: 1, borderTopColor: "#cccccc" }}
          onChangeText={(text) => (item.share = Number(text))}
          defaultValue={item.share.toString()}
          keyboardType="numeric"
        />
      )}
    </View>
  );

  const closeModal = () => {
    let sum: number = 0;
    selectedItems.current.forEach((element) => {
      sum += element.share;
    });
    if (Math.abs(sum - Number(data.expenseAmount)) <= 0.01) {
      setModalVisibility(false);
    } else {
      ToastAndroid.show("مقادیر وارد شده با مبلغ کل برابر نیست", ToastAndroid.SHORT);
    }
  };
  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Modal visible={modalVisible} transparent animationType="slide">
            <View style={styles.modalOutmostContainer}>
              <View style={styles.modalContentContainer}>
                <FlatList
                  ListHeaderComponent={
                    <>
                      <Text style={styles.modalNameText}>
                        مبلغ کل: {data.expenseAmount == "" ? "0" : data.expenseAmount}
                      </Text>
                      <SelectableItem
                        Name="مساوی تقسیم کن"
                        selected={shareEqual}
                        onPressItem={() => divideEqual(data.expenseAmount, selectedItems.current)}>
                        <Text>مساوی تقسیم کن</Text>
                      </SelectableItem>
                    </>
                  }
                  data={selectedItems.current}
                  renderItem={renderModalFlatList}
                  extraData={renderFlatList}
                  scrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={
                    <TouchableOpacity onPress={closeModal} style={styles.showModalButton}>
                      <Text style={styles.modalButtonText}>تایید</Text>
                    </TouchableOpacity>
                  }
                />
              </View>
            </View>
          </Modal>
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
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="نام فعالیت"
                placeholderTextColor="#A4A4A4"
                value={data.activityName}
                style={styles.textInput}
                onChangeText={setActivityName}
              />
              <TextInput
                placeholder="مبلغ (تومان)"
                value={data.expenseAmount}
                placeholderTextColor="#A4A4A4"
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={setExpenseAmount}
              />
              <FlatList
                horizontal={true}
                data={data.categories}
                renderItem={renderCategory}
                extraData={renderFlatList}
                scrollEnabled={true}
                keyExtractor={item => item.id}
              />
              <TouchableOpacity onPress={showModal} style={styles.showModalButton}>
                <Text style={styles.modalButtonText}>چطوری تقسیم کنم؟</Text>
              </TouchableOpacity>
            </View>
            <FlatList
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
