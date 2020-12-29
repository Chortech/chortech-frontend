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
import { Participant, PRole } from "../../models/other/axios/Participant";
import { faElementor } from "@fortawesome/free-brands-svg-icons";
import { lightGreenA700 } from "react-native-paper/lib/typescript/src/styles/colors";

type Item = {
  id: string;
  name: string;
  amount: number;
  selected?: boolean;
  role?: PRole;
};

type IState = {
  userReducer: IUserState;
};

const AddExpense: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const [data, setData] = useState({
    description: "",
    expenseAmount: "",
    isValidExpenseAmount: true,
  });
  const [fetchedItems, setFetchedItems] = useState<Array<Item>>([]);
  const [items, setItems] = useState<Array<Item>>([]);
  const selectedItems = useRef<Array<Item>>([]);
  const creditors = useRef<Array<Item>>([]);
  const debtors = useRef<Array<Item>>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [renderFlatList, setRenderFlatList] = useState(false);
  const [modalVisible, setModalVisibility] = useState(false);
  const [amountEqual, setDivideEqual] = useState(false);
  const [modalMode, setModalMode] = useState("Creditor");

  const dispatch = useDispatch();
  const { loading, id, name, friends, groups } = useSelector((state: IState) => state.userReducer);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchItems();
  }, [dispatch]);

  const confirm = () => {
    if (data.description == "") {
      ToastAndroid.show("لطفا توضیحات هزینه را وارد کنید", ToastAndroid.SHORT);
    } else if (data.expenseAmount == "") {
      ToastAndroid.show("لطفا مبلغ هزینه را وارد کنید", ToastAndroid.SHORT);
    } else if (data.isValidExpenseAmount) {
      let participants: Array<Participant> = [];
      let creditorsSum: number = 0;
      let debtorsSum: number = 0;
      let total: number = Number(data.expenseAmount);
      let date: number = Math.floor(Date.now() / 1000);

      creditors.current.forEach((element) => {
        if (element.selected) {
          creditorsSum += element.amount;
          participants.push({ id: element.id, amount: element.amount, role: PRole.Creditor });
        }
      });
      debtors.current.forEach((element) => {
        if (element.selected) {
          debtorsSum += element.amount;
          participants.push({ id: element.id, amount: element.amount, role: PRole.Debtor });
        }
      });
      if (creditorsSum != debtorsSum) {
        ToastAndroid.show("مبالغ تقسیم‌شده بین بدهکاران و طلبکاران برابر نیست", ToastAndroid.SHORT);
        return;
      }
      if (creditorsSum != total) {
        ToastAndroid.show("مبالغ تقسیم‌شده با مبلغ کل هزینه برابر نیست", ToastAndroid.SHORT);
        return;
      }

      dispatch(
        userActions.onAddExpenseRequest(
          loggedInUser.token,
          data.description,
          total,
          date,
          participants
        )
      );
    }
  };

  const fetchItems = () => {
    dispatch(userActions.onGetUserProfileRequest(loggedInUser.token));
    dispatch(userActions.onGetUserFriendsRequest(loggedInUser.token));
    // dispatch(userActions.onGetUserGroupsRequest(loggedInUserId));
    let items: Array<Item> = fetchedItems;
    friends.forEach((friend) => {
      if (items.find((element) => element.id == friend.id) == undefined) {
        let item: Item = {
          id: friend.id,
          name: friend.name,
          amount: 0,
        };
        items.push(item);
      }
    });
    setFetchedItems(items);
    setItems(items);
    setRenderFlatList(!renderFlatList);
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

  const setdescription = (text: string) => {
    setData({
      ...data,
      description: text,
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

  const renderSelectableItem: any = ({ item }) => (
    <SelectableItem
      id={item.id}
      Name={item.name}
      selected={item.selected}
      hasBottomBorder={true}
      onPressItem={() => onSelectItem(item)}
    />
  );

  const renderFooterComponent = (): JSX.Element => {
    return (
      <View style={styles.footerComponent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={confirm}>
            <Text style={styles.addButtonText}>ایجاد هزینه</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton} onPress={cancel}>
            <Text style={styles.removeButtonText}>انصراف</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const onSelectItem: any = (item: Item) => {
    item.selected = !item.selected;
    if (selectedItems.current.find((element) => element.id == item.id) == undefined) {
      selectedItems.current.push(item);
    } else {
      if (item.id == loggedInUser.id) return;

      const index = selectedItems.current.findIndex((element) => element.id == item.id);
      log(index);
      if (index > -1) {
        selectedItems.current.splice(index, 1);
      }
    }
    setRenderFlatList(!renderFlatList);
  };

  const onSelectCreditorItem: any = (item: Item) => {
    item.selected = !item.selected;
    if (creditors.current.find((element) => element.id == item.id) == undefined) {
      creditors.current.push(item);
      setDivideEqual(false);
    } else {
      item.amount = 0;
      setDivideEqual(false);
    }
    setRenderFlatList(!renderFlatList);
  };

  const onSelectDebtorItem: any = (item: Item) => {
    item.selected = !item.selected;
    if (debtors.current.find((element) => element.id == item.id) == undefined) {
      debtors.current.push(item);
      setDivideEqual(false);
    } else {
      item.amount = 0;
      setDivideEqual(false);
    }
    setRenderFlatList(!renderFlatList);
  };

  log("selected ones");
  log(selectedItems.current);

  log("creditors");
  log(creditors.current);

  log("debtors");
  log(debtors.current);

  const showCreditorModal = () => {
    if (Number(data.expenseAmount) > 0) {
      let item: Item = {
        id: loggedInUser.id,
        name: name,
        amount: Number(data.expenseAmount),
      };
      log("show creditor modal");
      setModalMode("Creditor");
      onSelectItem(item);
      selectedItems.current.forEach((element: Item) => {
        if (creditors.current.find((item) => item.id == element.id) == undefined) {
          let item: Item = { ...element };
          creditors.current.push(item);
        }
      });
      setModalVisibility(true);
      setRenderFlatList(!renderFlatList);
    } else {
      ToastAndroid.show("لطفا مبلغ را وارد کنید", ToastAndroid.SHORT);
    }
  };

  const showDebtorModal = () => {
    if (Number(data.expenseAmount) > 0) {
      let item: Item = {
        id: loggedInUser.id,
        name: name,
        amount: 0,
      };
      log("show debtor modal");
      setModalMode("Debtor");
      onSelectItem(item);
      selectedItems.current.forEach((element: Item) => {
        if (debtors.current.find((item) => item.id == element.id) == undefined) {
          let item: Item = { ...element, amount: 0 };
          debtors.current.push(item);
        }
      });
      setModalVisibility(true);
      setRenderFlatList(!renderFlatList);
    } else {
      ToastAndroid.show("لطفا مبلغ را وارد کنید", ToastAndroid.SHORT);
    }
  };

  const divideEqual = (expense: string, selectedItems: Array<Item>) => {
    if (!amountEqual) {
      const money = Number(expense);
      const length = selectedItems.filter((i) => i.selected == true).length;
      const equalAmount = Number((money / length).toFixed(2));
      log(`equal amount ${equalAmount.toString()}`);
      selectedItems.forEach((element) => {
        if (element.selected) {
          element.amount = equalAmount;
        }
      });
      setRenderFlatList(!renderFlatList);
      setDivideEqual(true);
    } else {
      setDivideEqual(false);
    }
  };

  const renderModalFlatList: any = ({ item }) => (
    <View style={styles.modalItemContainer}>
      <SelectableItem
        placeholder="0.00"
        onPressItem={() =>
          modalMode == "Creditor" ? onSelectCreditorItem(item) : onSelectDebtorItem(item)
        }
        Name={item.name}
        hasInput={true}
        selected={item.selected}
        defaultValue={item.amount > 0 ? item.amount.toString() : undefined}
        onChangeText={(text) => (item.amount = Number(text))}
      />
    </View>
  );

  const closeModal = () => {
    let sum: number = 0;
    modalMode == "Creditor"
      ? creditors.current.forEach((element) => {
          if (element.selected) {
            sum += element.amount;
          }
          if (element.amount == 0) {
            element.selected = false;
          }
        })
      : debtors.current.forEach((element) => {
          if (element.selected) {
            sum += element.amount;
          }
          if (element.amount == 0) {
            element.selected = false;
          }
        });
    if (Math.abs(sum - Number(data.expenseAmount)) <= 0.01) {
      setModalVisibility(false);
    } else {
      ToastAndroid.show("مقادیر وارد شده با مبلغ کل برابر نیست", ToastAndroid.SHORT);
    }
    setDivideEqual(false);
  };

  const discardModalChanges = () => {
    if (modalMode == "Creditor") {
      creditors.current = [];
      selectedItems.current.forEach((element: Item) => {
        let item: Item = { ...element, selected: !element.selected };
        onSelectCreditorItem(item);
      });
    } else {
      debtors.current = [];
      selectedItems.current.forEach((element: Item) => {
        let item: Item = { ...element, selected: !element.selected };
        onSelectDebtorItem(item);
      });
    }

    setDivideEqual(false);
    setModalVisibility(false);
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
                    <View style={styles.modalHeaderContainer}>
                      <Text style={styles.modalNameText}>
                        مبلغ کل: {data.expenseAmount == "" ? "0" : data.expenseAmount}
                      </Text>
                      <SelectableItem
                        Name="مساوی تقسیم کن"
                        selected={amountEqual}
                        onPressItem={() =>
                          divideEqual(
                            data.expenseAmount,
                            modalMode == "Creditor" ? creditors.current : debtors.current
                          )
                        }>
                        <Text>مساوی تقسیم کن</Text>
                      </SelectableItem>
                    </View>
                  }
                  data={modalMode == "Creditor" ? creditors.current : debtors.current}
                  renderItem={renderModalFlatList}
                  extraData={renderFlatList}
                  scrollEnabled={true}
                  showsVerticalScrollIndicator={false}
                  ListFooterComponent={
                    <View style={styles.splitOptionsContainer}>
                      <TouchableOpacity onPress={closeModal} style={styles.showModalButton}>
                        <Text style={styles.modalButtonText}>تایید</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={discardModalChanges}
                        style={styles.hideModalButton}>
                        <Text style={styles.hideModalButtonText}>انصراف</Text>
                      </TouchableOpacity>
                    </View>
                  }
                />
              </View>
            </View>
          </Modal>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.infoContainer}>
            <Searchbar
              placeholder="دوستان خود را جستجو کنید"
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onChangeText={onChangeSearchQuery}
              value={searchQuery}
              iconColor="#1AD927"
              onIconPress={() => onChangeSearchQuery(searchQuery)}
            />
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              ListHeaderComponent={
                <>
                  <View style={styles.inputContainer}>
                    <TextInput
                      placeholder="نام هزینه"
                      placeholderTextColor="#A4A4A4"
                      value={data.description}
                      style={styles.textInput}
                      onChangeText={setdescription}
                    />
                    <TextInput
                      placeholder="مبلغ کل هزینه (تومان)"
                      value={data.expenseAmount}
                      placeholderTextColor="#A4A4A4"
                      style={styles.textInput}
                      keyboardType="numeric"
                      onChangeText={setExpenseAmount}
                    />
                    <View style={styles.splitOptionsContainer}>
                      <TouchableOpacity onPress={showCreditorModal} style={styles.showModalButton}>
                        <Text style={styles.modalButtonText}>کیا مادرخرج بودن؟</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={showDebtorModal} style={styles.showModalButton}>
                        <Text style={styles.modalButtonText}>چطوری تقسیم کنم؟</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              }
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
