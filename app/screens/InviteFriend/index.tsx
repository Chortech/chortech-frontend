import React, { useState } from "react";
import { Text, ToastAndroid, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";
import { styles } from "./styles";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { InputType } from "../../utils/inputTypes";
import { RegexValidator } from "../../utils/regexValidator";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { User } from "../../models/other/graphql/User";
import SearchedUserItem from "../../components/SearchedUserItem";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";

type IState = {
  userReducer: IUserState;
};

const InviteFriend: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [validInput, setValidInput] = useState(true);
  // const [fetchedUsers, setFetchedUsers] = useState<Array<User>>([]);
  const dispatch = useDispatch();

  // const onChangeSearchQuery = (text: string) => {
  //   const type = RegexValidator.validateEmailOrPhone(text);
  //   setEmailOrPhone(text);
  //   setInputType(type);
  // };

  // const onPressSearchButton = (): void => {
  //   if (inputType == InputType.Email || inputType == InputType.Phone) {
  //     Api.getFilteredUser(emailOrPhone, inputType).then((data) => {
  //       if (data.success) {
  //         if (fetchedUsers.length > 0) {
  //           setFetchedUsers([]);
  //         }
  //         setFetchedUsers([data.user]);
  //       } else {
  //         ToastAndroid.show("کاربر با این مشخصات وجود ندارد", ToastAndroid.SHORT);
  //       }
  //     });
  //   } else {
  //     ToastAndroid.show("اطلاعات وارد شده نامعتبر است", ToastAndroid.SHORT);
  //   }
  // };

  const onPressAddFriend = (): void => {
    if (validInput) {
      if (inputType == InputType.Email) {
        dispatch(userActions.onAddFriendRequest(loggedInUser.token, emailOrPhone, "", inputType));
      } else if (inputType == InputType.Phone) {
        dispatch(userActions.onAddFriendRequest(loggedInUser.token, "", emailOrPhone, inputType));
      }
    } else {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
    }
  };

  const setInfo = (text: string) => {
    let type: InputType = RegexValidator.validateEmailOrPhone(text);
    setEmailOrPhone(text);
    setInputType(type);
    if (type == InputType.Email || type == InputType.Phone) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  };

  const renderSelectedItems: any = ({ item }) => (
    <SearchedUserItem id={item.id} name={item.name} onPress={onPressAddFriend} />
  );

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={500} style={styles.infoContainer}>
            <TextInput
              placeholder="ایمیل یا شماره موبایل دوست خود را وارد کنید"
              style={{
                ...styles.friendEmailOrPhoneInput,
                borderColor: validInput || emailOrPhone == "" ? "lightgreen" : "red",
              }}
              onChangeText={(text) => setInfo(text)}
            />
          </Animatable.View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onPressAddFriend}>
              <Text style={styles.buttonText}>افزودن به دوستان</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ارسال دعوت‌نامه</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default InviteFriend;
