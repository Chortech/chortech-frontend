import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as Animatable from "react-native-animatable";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import { IUserState } from "../../models/reducers/default";
import * as authActions from "../../store/actions/authActions";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import { log } from "../../utils/logger";
import CustomInput from "../../components/CustomInput";
import { validateToken } from "../../utils/tokenValidator";

type IState = {
  userReducer: IUserState;
};

const EditProfile: React.FC = (): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  let user: IUserState = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: user.name,
    email: loggedInUser.email,
    phone: loggedInUser.phone,
    currentPassword: "",
    newPassword: "",
    validName: true,
    validEmail: true,
    validPhone: true,
    validCurrentPassword: true,
    validNewPassword: true,
    secureTextEntry: false,
  });

  const onPressChangeName = () => {
    if (!data.validName) {
      ToastAndroid.show("نام واردشده معتبر نیست", ToastAndroid.SHORT);
      return;
    }
    if (data.name == user.name) {
      ToastAndroid.show("نام واردشده تکراری است", ToastAndroid.SHORT);
      return;
    }
    if (!validateToken(loggedInUser.token)) {
      ToastAndroid.show("لطفا دوباره تلاش کنید", ToastAndroid.SHORT);
      return;
    }
    dispatch(userActions.onEditUserProfileRequest(loggedInUser.token, data.name, user.picture));
  };

  const onPressChangeEmail = () => {
    if (validateToken(loggedInUser.token)) {
      if (data.validEmail) {
        if (data.email != loggedInUser.email) {
          NavigationService.navigate("CodeVerification", {
            parentScreen: "EditProfile",
            name: "",
            email: data.email,
            phone: "",
            password: loggedInUser.password,
            inputType: InputType.Email,
            token: loggedInUser.token,
          });
        } else {
          ToastAndroid.show("لطفا ایمیل جدید وارد کنید", ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show("ایمیل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
    }
  };

  const onPressChangePhone = () => {
    if (validateToken(loggedInUser.token)) {
      if (data.validPhone) {
        if (data.phone != loggedInUser.phone) {
          NavigationService.navigate("CodeVerification", {
            parentScreen: "EditProfile",
            name: "",
            email: "",
            phone: data.phone,
            password: loggedInUser.password,
            inputType: InputType.Phone,
            token: loggedInUser.token,
          });
        } else {
          ToastAndroid.show("لطفا شماره موبایل جدید وارد کنید", ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show("شماره موبایل واردشده معتبر نیست", ToastAndroid.SHORT);
      }
    }
  };

  const onPressChangePassword = () => {
    if (validateToken(loggedInUser.token)) {
      if (data.validCurrentPassword) {
        dispatch(
          authActions.onChangePasswordRequest(
            loggedInUser.token,
            loggedInUser.email,
            loggedInUser.phone,
            loggedInUser.authInputType,
            data.newPassword,
            data.currentPassword
          )
        );
      } else {
        ToastAndroid.show("رمز عبور داده‌شده نامعتبر است", ToastAndroid.SHORT);
      }
    }
    setData({ ...data, newPassword: "", currentPassword: "" });
  };

  const onChangeNameText = (text: string) => {
    let validInput: boolean = RegexValidator.validateName(text) == InputType.Name;
    setData({
      ...data,
      name: text,
      validName: validInput,
    });
  };

  const onChangeEmailText = (text: string) => {
    let validInput: boolean = RegexValidator.validateEmailOrPhone(text) == InputType.Email;
    setData({
      ...data,
      email: text,
      validEmail: validInput,
    });
  };
  const onChangePhoneText = (text: string) => {
    let validInput: boolean = RegexValidator.validateEmailOrPhone(text) == InputType.Phone;
    setData({
      ...data,
      phone: text,
      validPhone: validInput,
    });
  };

  const onChangeCurrentPasswordText = (text: string) => {
    let validInput: boolean = RegexValidator.validatePassword(text) == InputType.Password;
    setData({
      ...data,
      currentPassword: text,
      validCurrentPassword: validInput,
    });
  };

  const onChangePasswordText = (text: string) => {
    let validInput: boolean = RegexValidator.validatePassword(text) == InputType.Password;
    setData({
      ...data,
      newPassword: text,
      validNewPassword: validInput,
    });
  };

  const clearCurrentPassword = () => {
    setData({ ...data, currentPassword: "", validCurrentPassword: true });
  };

  const clearNewPassword = () => {
    setData({ ...data, newPassword: "", validNewPassword: true });
  };

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
              <CustomInput
                label="نام و نام خانوادگی"
                validInput={data.validName}
                defaultValue={data.name}
                onChangeText={onChangeNameText}
                confirmIcon={true}
                cancelIcon={true}
                onPressConfirmButton={onPressChangeName}
                onPressCancelButton={() => setData({ ...data, name: user.name, validName: true })}
              />
              {loggedInUser.authInputType == InputType.Email ? (
                <CustomInput
                  label="ایمیل"
                  validInput={data.validEmail}
                  defaultValue={data.email}
                  placeholder="ایمیل"
                  onChangeText={onChangeEmailText}
                  confirmIcon={true}
                  cancelIcon={true}
                  onPressConfirmButton={onPressChangeEmail}
                  onPressCancelButton={() =>
                    setData({ ...data, email: user.email, validEmail: true })
                  }
                />
              ) : null}
              {loggedInUser.authInputType == InputType.Phone ? (
                <CustomInput
                  label="شماره تلفن"
                  validInput={data.validPhone}
                  defaultValue={data.phone}
                  placeholder="شماره تلفن"
                  onChangeText={onChangePhoneText}
                  confirmIcon={true}
                  cancelIcon={true}
                  onPressConfirmButton={onPressChangePhone}
                  onPressCancelButton={() =>
                    setData({ ...data, phone: user.phone, validPhone: true })
                  }
                />
              ) : null}
              <CustomInput
                label="رمز عبور فعلی"
                passwordInput={true}
                defaultValue={data.currentPassword}
                placeholder="رمز عبور فعلی"
                cancelIcon={true}
                validInput={data.validCurrentPassword}
                onChangeText={onChangeCurrentPasswordText}
                onPressCancelButton={clearCurrentPassword}
              />
              <CustomInput
                label="رمز عبور جدید"
                passwordInput={true}
                defaultValue={data.newPassword}
                placeholder="رمز عبور جدید"
                cancelIcon={true}
                confirmIcon={true}
                validInput={data.validNewPassword}
                onChangeText={onChangePasswordText}
                onPressConfirmButton={onPressChangePassword}
                onPressCancelButton={clearNewPassword}
              />
            </ScrollView>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default EditProfile;
