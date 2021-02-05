import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StatusBar, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";

interface IState {
  authReducer: IUserState;
}

const AccountIdentification: React.FC = () => {
  const { loading } = useSelector((state: IState) => state.authReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    emailOrPhone: "",
    validEmailOrPhone: true,
    inputType: InputType.None,
  });

  const onVerify = () => {
    if (data.emailOrPhone != "" && data.validEmailOrPhone) {
      const email = data.inputType == InputType.Email ? data.emailOrPhone : "";
      const phone = data.inputType == InputType.Phone ? data.emailOrPhone : "";
      NavigationService.navigate("CodeVerification", {
        parentScreen: "AccountIdentification",
        name: "",
        email: email,
        phone: phone,
        password: "",
        inputType: data.inputType,
      });
    } else {
      ToastAndroid.show("اطلاعات وارد شده معتبر نمی‌باشد", ToastAndroid.SHORT);
    }
  };

  const setEmailOrPhone = (text: string): void => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setData({
      ...data,
      emailOrPhone: text,
      validEmailOrPhone: text == "" || type == InputType.Email || type == InputType.Phone,
      inputType: type,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={1000} style={styles.formsContainer}>
            <Text style={styles.screenTitleText}>
              ایمیل یا شماره‌موبایل موردنظر خود را وارد کنید
            </Text>
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
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.confirmButton} onPress={onVerify}>
                <Text style={styles.confirmButtonText}>ادامه و دریافت کد تایید</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default AccountIdentification;
