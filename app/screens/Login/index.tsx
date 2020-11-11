import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { onChange } from "react-native-reanimated";

import { styles } from "./styles";
import * as loginActions from "../../store/actions/loginActions";
import { ILoginState } from "../../models/reducers/login";
import NavigationService from "../../navigation/navigationService";

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = (): JSX.Element => {
  const id = useSelector((state: ILoginState) => state.id);
  const dispatch = useDispatch();
  const onLogin = () =>
    dispatch(loginActions.requestLogin("babak@example.com", "09123", "1234"));
  const onForgot = () => NavigationService.navigate("AccountIdentification");
  const onSignUp = () => NavigationService.navigate("SignUp");

  const [data, setData] = useState({
    emailOrPhone: "",
    password: "",
    secureTextEntry: true,
  });

  const togglePassword = (): void => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Chortech</Text>
      </View>
      <Animatable.View
        animation="slideInUp"
        duration={1000}
        style={styles.footer}>
        <ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="ایمیل یا شماره موبایل"
              style={styles.textInput}
            />
          </View>
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
              placeholder="رمز عبور"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry}
            />
          </View>
          <View>
            <TouchableOpacity onPress={onForgot}>
              <Text style={styles.resetPasswordText}>
                کلمه عبور خود را فراموش کرده‌اید؟
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.filledButton} onPress={onLogin}>
              <Text style={styles.filledButtonText}>ورود</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlinedButton} onPress={onSignUp}>
              <Text style={styles.outlinedButtonText}>ثبت نام</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlinedButton}>
              <Text style={styles.outlinedButtonText}>قوانین حریم خصوصی</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Login;
