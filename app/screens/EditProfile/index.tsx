import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import { log } from "../../utils/logger";

type IState = {
  userReducer: IUserState;
};

const EditProfile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  log(loggedInUser);
  let user = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    validName: true,
    validEmail: true,
    validPhone: true,
    validPassword: true,
  });
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const onPressUpdateUser = () => {
    let validInput: boolean =
      data.validEmail &&
      data.validPhone &&
      (data.email != "" || data.phone != "") &&
      data.validName &&
      data.name != "" &&
      data.validPassword &&
      data.password != "";
    if (validInput) {
      user = {
        ...user,
        name: data.name,
        password: data.password,
        phone: data.phone,
        email: data.email,
      };
      dispatch(userActions.onUpdateUserRequest(user));
    } else {
      ToastAndroid.show("اطلاعات وارد شده کافی نمی‌باشد.", ToastAndroid.SHORT);
    }
  };

  const onChangeName = (text: string) => {
    setData({
      ...data,
      name: text,
      validName: RegexValidator.validateName(text) == InputType.Name,
    });
  };

  const onChangeEmail = (text: string) => {
    setData({
      ...data,
      email: text,
      validEmail: RegexValidator.validateEmailOrPhone(text) == InputType.Email || text == "",
    });
  };
  const onChangePhone = (text: string) => {
    setData({
      ...data,
      phone: text,
      validPhone: RegexValidator.validateEmailOrPhone(text) == InputType.Phone || text == "",
    });
  };
  const onChangePassword = (text: string) => {
    setData({
      ...data,
      password: text,
      validPassword: RegexValidator.validatePassword(text) == InputType.Password,
    });
  };

  const togglePassword = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };

  const cancel = () => NavigationService.goBack();

  return (
    <>
      {user.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>ویرایش اطلاعات</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>نام و نام خانوادگی</Text>
                <View style={data.validName ? styles.inputContainer : styles.inputContainerError}>
                  <TextInput
                    defaultValue={data.name}
                    placeholder="نام و نام خانوادگی"
                    style={styles.textInput}
                    onChangeText={onChangeName}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>ایمیل</Text>
                <View style={data.validEmail ? styles.inputContainer : styles.inputContainerError}>
                  <TextInput
                    defaultValue={data.email}
                    placeholder="ایمیل"
                    style={styles.textInput}
                    onChangeText={onChangeEmail}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>شماره تلفن</Text>
                <View style={data.validPhone ? styles.inputContainer : styles.inputContainerError}>
                  <TextInput
                    defaultValue={data.phone}
                    placeholder="شماره تلفن"
                    style={styles.textInput}
                    onChangeText={onChangePhone}
                  />
                </View>
              </View>
              <View style={styles.customInputContainer}>
                <Text style={styles.label}>رمز عبور</Text>
                <View
                  style={data.validPassword ? styles.inputContainer : styles.inputContainerError}>
                  <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
                    {secureTextEntry ? (
                      <FontAwesomeIcon icon="eye-slash" size={20} style={{ color: "red" }} />
                    ) : (
                      <FontAwesomeIcon icon="eye" size={20} style={{ color: "#1AD927" }} />
                    )}
                  </TouchableOpacity>
                  <TextInput
                    defaultValue={data.password}
                    placeholder="رمز عبور"
                    secureTextEntry={secureTextEntry}
                    style={styles.textInput}
                    onChangeText={onChangePassword}
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.filledButton} onPress={onPressUpdateUser}>
                  <Text style={styles.filledButtonText}>تایید</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outlinedButton} onPress={cancel}>
                  <Text style={styles.outlinedButtonText}>انصراف</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default EditProfile;
