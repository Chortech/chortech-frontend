import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from "react-native";
import { useDispatch } from "react-redux";
import * as Animatable from "react-native-animatable";

import * as identifyAccountActions from "../../store/actions/identifyAccountActions";
import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";

const AccountIdentification: React.FC = () => {
  const dispatch = useDispatch();
  const onVerify = () => {
    if (data.emailOrPhone != "" && data.validEmailOrPhone) {
      const email = data.inputType == InputType.Email ? data.emailOrPhone : "";
      const phone = data.inputType == InputType.Phone ? data.emailOrPhone : "";
      dispatch(
        identifyAccountActions.requestIdentifyAccount(
          email,
          phone,
          data.inputType
        )
      );
    }
  };

  const [data, setData] = useState({
    emailOrPhone: "",
    validEmailOrPhone: true,
    inputType: InputType.None,
  });

  const setEmailOrPhone = (text: string): void => {
    const type = RegexValidator.validateEmailOrPhone(text);
    setData({
      ...data,
      emailOrPhone: text,
      validEmailOrPhone:
        text == "" || type == InputType.Email || type == InputType.Phone,
      inputType: type,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Chortech</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={1000}
        style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="ایمیل یا شماره موبایل"
            style={styles.textInput}
            onChangeText={(text) => setEmailOrPhone(text)}
          />
        </View>
        {!data.validEmailOrPhone ? (
          <Animatable.Text
            style={styles.validationText}
            animation="fadeIn"
            duration={500}>
            ایمیل یا شماره موبایل وارد شده معتبر نیست
          </Animatable.Text>
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.verifyScreenButton}
            onPress={onVerify}>
            <Text style={styles.verifyScreenButtonText}>
              ادامه و دریافت کد تایید
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default AccountIdentification;
