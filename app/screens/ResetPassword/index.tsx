import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ToastAndroid } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import * as Animatable from "react-native-animatable";
import { styles } from "./styles";
import { RegexValidator } from "../../utils/regexValidator";
import { InputType } from "../../utils/inputTypes";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as authActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import { RouteProp } from "@react-navigation/native";
import { navigationRef } from "../../navigation/navigationService";

type Props = {
  route: RouteProp<RootStackParamList, "ResetPassword">;
};

type IState = {
  authReducer: IUserState;
};

const ResetPassword: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const props = route.params;
  const { loading } = useSelector((state: IState) => state.authReducer);
  const dispatch = useDispatch();
  const resetToHome = () => {
    if (data.password == data.confirmPassword && data.validPassword && data.validConfirmPassword) {
      dispatch(
        authActions.onResetPasswordRequest(props.email, props.phone, data.password, props.inputType)
      );
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
      validPassword: text == "" || RegexValidator.validatePassword(text) === InputType.Password,
    });
  };

  const setConfirmPassword = (text: string): void => {
    setData({
      ...data,
      confirmPassword: text,
      validConfirmPassword:
        text == "" || RegexValidator.validatePassword(text) === InputType.Password,
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
          <Animatable.View animation="slideInUp" duration={1500} style={styles.formsContainer}>
            <Text style={styles.screenTitleText}>تغییر رمز عبور</Text>
            <View style={styles.textInputContainer}>
              <TouchableOpacity onPress={togglePassword} style={styles.toggleIcon}>
                {data.secureTextEntry ? (
                  <FontAwesomeIcon icon="eye-slash" size={20} style={styles.invisiblePassword} />
                ) : (
                  <FontAwesomeIcon icon="eye" size={20} style={styles.visiblePassword} />
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
              <Animatable.Text style={styles.validationText} animation="fadeIn" duration={1500}>
                رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
              </Animatable.Text>
            ) : null}
            <View style={styles.textInputContainer}>
              <TouchableOpacity onPress={toggleConfirmPassword} style={styles.toggleIcon}>
                {data.confirmSecureTextEntry ? (
                  <FontAwesomeIcon icon="eye-slash" size={20} style={styles.invisiblePassword} />
                ) : (
                  <FontAwesomeIcon icon="eye" size={20} style={styles.visiblePassword} />
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
              <Animatable.Text style={styles.validationText} animation="fadeIn" duration={1500}>
                رمز عبور باید حداقل ۸ و حداکثر ۱۶ کاراکتر داشته باشد
              </Animatable.Text>
            ) : null}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.confirmButton} onPress={resetToHome}>
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
