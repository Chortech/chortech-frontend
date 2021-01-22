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
import * as friendActions from "../../store/actions/friendActions";
import * as authActions from "../../store/actions/authActions";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";
import { validateToken } from "../../utils/tokenValidator";
import NavigationService from "../../navigation/navigationService";

type IState = {
  userReducer: IUserState;
};

const InviteFriend: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading } = useSelector((state: IState) => state.userReducer);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [inputType, setInputType] = useState(InputType.None);
  const [validInput, setValidInput] = useState(true);
  const dispatch = useDispatch();

  const onPressAddFriend = (): void => {
    if (validateToken(loggedInUser.token)) {
      if (validInput) {
        if (inputType == InputType.Email) {
          dispatch(
            friendActions.onAddFriendRequest(loggedInUser.token, emailOrPhone, "", inputType)
          );
        } else if (inputType == InputType.Phone) {
          dispatch(
            friendActions.onAddFriendRequest(loggedInUser.token, "", emailOrPhone, inputType)
          );
        }
      } else {
        ToastAndroid.show("ایمیل یا شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
    }
  };

  const onPressInviteFriend = (): void => {
    if (validateToken(loggedInUser.token)) {
      if (validInput) {
        if (inputType == InputType.Email) {
          dispatch(
            friendActions.onInviteFriendRequest(loggedInUser.token, emailOrPhone, "", inputType)
          );
        } else if (inputType == InputType.Phone) {
          dispatch(
            friendActions.onInviteFriendRequest(loggedInUser.token, "", emailOrPhone, inputType)
          );
        }
      } else {
        ToastAndroid.show("ایمیل یا شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
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
            <TouchableOpacity style={styles.button} onPress={onPressInviteFriend}>
              <Text style={styles.buttonText}>ارسال دعوت‌نامه</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default InviteFriend;
