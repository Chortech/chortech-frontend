import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StatusBar, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import * as signUpActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";

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

  const dispatch = useDispatch();
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

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
            <Text style={styles.textHeader}>Chortech</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.footer}>
            <View style={styles.inputContainer}>
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
            <View style={styles.inputContainer}>
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
            <View style={styles.inputContainer}>
              <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
                {data.secureTextEntry ? (
                  <FontAwesomeIcon icon="eye-slash" size={20} style={{ color: "red" }} />
                ) : (
                  <FontAwesomeIcon icon="eye" size={20} style={{ color: "#1AD927" }} />
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.verifyScreenButton} onPress={onVerify}>
                <Text style={styles.verifyScreenButtonText}>ادامه و دریافت کد تایید</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default SignUp;
