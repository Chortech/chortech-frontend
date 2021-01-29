import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { useDispatch, useSelector, useStore } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import * as loginActions from "../../store/actions/authActions";
import NavigationService from "../../navigation/navigationService";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import { log } from "../../utils/logger";
import { Login } from "../../models/responses/axios/auth";
import { Response } from "../../models/responses/axios/response";
import { ArabicNumbers } from "react-native-arabic-numbers";

interface IState {
  authReducer: IUserState;
}

const LoginSecreen: React.FC = (): JSX.Element => {
  const state = useSelector((state: IState) => state.authReducer);

  const dispatch = useDispatch();

  const onLogin = () => {
    if (data.emailOrPhone == "" || data.password == "") {
      ToastAndroid.show("لطفا همه‌ی مقادیر ورودی را پُر کنید", ToastAndroid.SHORT);
    } else if (data.validEmailOrPhone && data.validPassword) {
      const email = data.inputType == InputType.Email ? data.emailOrPhone : "";
      const phone = data.inputType == InputType.Phone ? data.emailOrPhone : "";
      dispatch(loginActions.onLoginRequest(email, phone, data.password, data.inputType));
    } else {
      ToastAndroid.show("اطلاعات وارد شده معتبر نمی‌باشد", ToastAndroid.SHORT);
    }
  };
  const onForgot = () => NavigationService.navigate("AccountIdentification");
  const onSignUp = () => NavigationService.navigate("SignUp");

  const [data, setData] = useState({
    emailOrPhone: "",
    password: "",
    secureTextEntry: true,
    inputType: InputType.None,
    validEmailOrPhone: true,
    validPassword: true,
  });

  const setEmailOrPhone = (text: string): void => {
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

  return (
    <>
      {state.loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View style={styles.headerContainer} animation="fadeInDown" duration={1500}>
            <Image source={require("../../assets/images/chortech_1.png")} style={styles.logo} />
          </Animatable.View>
          <Animatable.View animation="slideInUp" duration={1500} style={styles.formsContainer}>
            <Text style={styles.screenTitleText}>ورود</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="ایمیل یا شماره موبایل"
                style={styles.textInput}
                value={data.emailOrPhone}
                onChangeText={(text) => setEmailOrPhone(text)}
              />
            </View>
            {!data.validEmailOrPhone ? (
              <Animatable.Text style={styles.validationText} animation="fadeIn" duration={1500}>
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
              <Animatable.Text style={styles.validationText} animation="fadeIn" duration={1500}>
                رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
              </Animatable.Text>
            ) : null}
            <View>
              <TouchableOpacity onPress={onForgot}>
                <Text style={styles.resetPasswordText}>کلمه عبور خود را فراموش کرده‌اید؟</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.outlinedButton} onPress={onSignUp}>
                <Text style={styles.outlinedButtonText}>ثبت نام</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.filledButton} onPress={onLogin}>
                <Text style={styles.filledButtonText}>ورود</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.privacyText}>قوانین حریم خصوصی</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default LoginSecreen;
