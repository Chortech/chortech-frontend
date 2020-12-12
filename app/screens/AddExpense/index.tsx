import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
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

type IState = {
  userReducer: IUserState;
};

const AddExpense: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const [data, setData] = useState({
    activityName: "",
    expenseAmount: "",
    isValidExpenseAmount: true,
  });
  const dispatch = useDispatch();
  const { loading, id } = useSelector((state: IState) => state.userReducer);
  const [searchQuery, setSearchQuery] = useState("");

  const confirm = () => {
    if (data.activityName == "") {
      ToastAndroid.show("لطفا نام فعالیت را وارد کنید.", ToastAndroid.SHORT);
    } else if (data.expenseAmount == "") {
      ToastAndroid.show("لطفا مبلغ را وارد کنید.", ToastAndroid.SHORT);
    } else if (data.isValidExpenseAmount) {
      dispatch(
        userActions.onAddExpenseRequest(
          loggedInUser.id,
          data.activityName,
          "description",
          "fruit",
          "10000"
        )
      );
    }
  };

  const onChangeSearchQuery = (text: string) => {
    setSearchQuery(text);
  };
  const onPressSearchButton = () => {};

  const cancel = () => NavigationService.goBack();

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
      isValidExpenseAmount:
        text == "" || RegexValidator.validateExpenseAmount(text) == true,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View
            animation="slideInUp"
            duration={1000}
            style={styles.infoContainer}>
            <Searchbar
              placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
              style={styles.searchBar}
              inputStyle={styles.searchInput}
              onChangeText={onChangeSearchQuery}
              value={searchQuery}
              iconColor="#1AD927"
              onIconPress={onPressSearchButton}
            />
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
              <Animatable.Text
                style={styles.validationText}
                animation="fadeIn"
                duration={500}>
                مبلغ باید به صورت یک عدد حداکثر ده رقمی باشد.
              </Animatable.Text>
            ) : null}
          </Animatable.View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={confirm}>
              <Text style={styles.addButtonText}>ایجاد هزینه</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeButton} onPress={cancel}>
              <Text style={styles.removeButtonText}>انصراف</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default AddExpense;
