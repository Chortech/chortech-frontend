import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ToastAndroid,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import * as signUpActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import NavigationService, { navigationRef } from "../../navigation/navigationService";

interface IState {
  authReducer: IUserState;
}

const SignUp: React.FC = (): JSX.Element => {
  const { loading } = useSelector((state: IState) => state.authReducer);
  const [data, setData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
    secureTextEntry: true,
    validName: true,
    validEmailOrPhone: true,
    validPassword: true,
    inputType: InputType.None,
  });

  const onVerify = () => {
    if (data.name == "" || data.emailOrPhone == "" || data.password == "") {
      ToastAndroid.show("لطفا همه‌ی مقادیر ورودی را پُر کنید", ToastAndroid.SHORT);
    } else if (data.name && data.emailOrPhone && data.password) {
      const email = data.inputType == InputType.Email ? data.emailOrPhone : "";
      const phone = data.inputType == InputType.Phone ? data.emailOrPhone : "";
      NavigationService.navigate("CodeVerification", {
        parentScreen: "SignUp",
        name: data.name,
        email: email,
        phone: phone,
        password: data.password,
        inputType: data.inputType,
      });
    } else {
      ToastAndroid.show("اطلاعات وارد شده معتبر نمی‌باشد", ToastAndroid.SHORT);
    }
  };

  const setName = (text: string) => {
    setData({
      ...data,
      name: text,
      validName: RegexValidator.validateName(text) == InputType.Name,
    });
  };

  const setEmailOrPhone = (text: string) => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setData({
      ...data,
      emailOrPhone: text,
      validEmailOrPhone: text == "" || type == InputType.Email || type == InputType.Phone,
      inputType: type,
    });
  };

  const setPassword = (text: string) => {
    setData({
      ...data,
      password: text,
      validPassword: text == "" || RegexValidator.validatePassword(text) == InputType.Password,
    });
  };

  const togglePassword = (): void => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const goBack = (): void => {
    navigationRef.current?.reset({ index: 0, routes: [{ name: "Login" }] });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View style={styles.header} animation="fadeInDown" duration={1500}>
            <Image source={require("../../assets/images/chortech_1.png")} style={styles.logo} />
          </Animatable.View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.contentWrapper}>
            <View style={styles.formsContainer}>
              <Text style={styles.text}>ثبت‌ نام</Text>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="نام و نام خانوادگی"
                  style={styles.textInput}
                  onChangeText={(text) => setName(text)}
                />
              </View>
              {!data.validName ? (
                <Animatable.Text style={styles.validationText} animation="fadeIn" duration={500}>
                  نام و نام خانوادگی باید حداقل دارای ۶ کاراکتر باشد
                </Animatable.Text>
              ) : null}
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="ایمیل یا شماره موبایل"
                  style={styles.textInput}
                  onChangeText={(text) => setEmailOrPhone(text)}
                />
              </View>
              {!data.validEmailOrPhone ? (
                <Animatable.Text style={styles.validationText} animation="fadeIn" duration={500}>
                  ایمیل یا شماره موبایل وارد شده معتبر نیست
                </Animatable.Text>
              ) : null}
              <View style={styles.textInputContainer}>
                <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
                  {data.secureTextEntry ? (
                    <FontAwesomeIcon icon="eye-slash" size={20} style={styles.invisiblePassword} />
                  ) : (
                    <FontAwesomeIcon icon="eye" size={20} style={styles.visiblePassword} />
                  )}
                </TouchableOpacity>
                <TextInput
                  placeholder="رمز عبور"
                  style={styles.textInput}
                  secureTextEntry={data.secureTextEntry}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
              {!data.validPassword ? (
                <Animatable.Text style={styles.validationText} animation="fadeIn" duration={500}>
                  رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
                </Animatable.Text>
              ) : null}
            </View>

            {/* <KeyboardAvoidingView style={{ flex: 2 }} behavior="height"> */}
            <View style={styles.footerContainer}>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.verifyScreenButton} onPress={onVerify}>
                  <Text style={styles.verifyScreenButtonText}>ادامه و دریافت کد تایید</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goBack}>
                  <Text style={styles.loggedInBeforeText}>قبلا ثبت نام کرده‌ام</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* </KeyboardAvoidingView> */}
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default SignUp;
