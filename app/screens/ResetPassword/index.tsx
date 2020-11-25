import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";

import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import { useDispatch, useSelector, useStore } from "react-redux";
import { ILoginState } from "../../models/reducers/login";
import * as resetPasswordActions from "../../store/actions/resetPasswordActions";
import LoadingIndicator from "../Loading";

type IState = {
  resetPasswordReducer: ILoginState;
};

const ResetPassword: React.FC = (): JSX.Element => {
  const id = useStore().getState()["IdentifyAccountReducer"].id;
  const { loading } = useSelector(
    (state: IState) => state.resetPasswordReducer
  );
  const dispatch = useDispatch();
  const resetToHome = () => {
    if (
      data.password == data.confirmPassword &&
      data.validPassword &&
      data.validConfirmPassword
    ) {
      dispatch(resetPasswordActions.requestResetPassword(id, data.password));
    } else {
      ToastAndroid.show("رمز عبور واردشده معتبر نیست", ToastAndroid.SHORT);
    }
  };

  const [data, setData] = useState({
    password: "",
    validPassword: true,
    secureTextEntry: true,
    confirmPassword: "",
    validConfirmPassword: true,
    confirmSecureTextEntry: true,
  });

  const setPassword = (text: string): void => {
    setData({
      ...data,
      password: text,
      validPassword:
        RegexValidator.validatePassword(text) === InputType.Password,
    });
  };

  const setConfirmPassword = (text: string): void => {
    setData({
      ...data,
      confirmPassword: text,
      validConfirmPassword:
        RegexValidator.validatePassword(text) === InputType.Password,
    });
  };

  const togglePassword = (): void => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const toggleConfirmPassword = (): void => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.textHeader}>بازیابی کلمه عبور</Text>
          </View>
          <Animatable.View
            animation="slideInUp"
            duration={600}
            style={styles.infoContainer}>
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={togglePassword}
                style={styles.toggleIcon}>
                {data.secureTextEntry ? (
                  <FontAwesomeIcon
                    icon="eye-slash"
                    size={20}
                    style={{ color: "red" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="eye"
                    size={20}
                    style={{ color: "#1AD927" }}
                  />
                )}
              </TouchableOpacity>
              <TextInput
                placeholder="رمز عبور جدید"
                secureTextEntry={data.secureTextEntry}
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            {!data.validPassword ? (
              <Animatable.Text
                style={styles.validationText}
                animation="fadeIn"
                duration={500}>
                رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
              </Animatable.Text>
            ) : null}
            <View style={styles.inputContainer}>
              <TouchableOpacity
                onPress={toggleConfirmPassword}
                style={styles.toggleIcon}>
                {data.confirmSecureTextEntry ? (
                  <FontAwesomeIcon
                    icon="eye-slash"
                    size={20}
                    style={{ color: "red" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon="eye"
                    size={20}
                    style={{ color: "#1AD927" }}
                  />
                )}
              </TouchableOpacity>
              <TextInput
                placeholder="تکرار رمز عبور جدید"
                secureTextEntry={data.confirmSecureTextEntry}
                style={styles.textInput}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
            {!data.validConfirmPassword ? (
              <Animatable.Text
                style={styles.validationText}
                animation="fadeIn"
                duration={500}>
                رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
              </Animatable.Text>
            ) : null}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={resetToHome}>
                <Text style={styles.confirmButtonText}>تایید</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default ResetPassword;
