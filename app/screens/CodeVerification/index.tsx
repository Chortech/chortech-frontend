import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ToastAndroid,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { CountDown } from "react-native-customizable-countdown";
import { useDispatch, useSelector, useStore } from "react-redux";

import { RootStackParamList } from "../../navigation/rootStackParams";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import * as signUpActions from "../../store/actions/authActions";
import * as codeVerificationActions from "../../store/actions/codeVerificationActions";
import { ILoginState } from "../../models/reducers/login";
import LoadingIndicator from "../Loading";

type Props = {
  route: RouteProp<RootStackParamList, "CodeVerification">;
};

type IState = {
  codeVerificationReducer: ILoginState;
};

const CodeVerification: React.FC<Props> = ({ route }: Props) => {
  const state = useStore().getState()["authReducer"];
  const { parentScreen } = route.params;
  const { phone, email, password, inputType, loading } = useSelector(
    (state: IState) => state.codeVerificationReducer
  );
  const [ref, setRef] = useState(null);
  const [data, setData] = useState({
    verificationCode: "",
    validCode: false,
  });
  const dispatch = useDispatch();

  const onNextScreen = () => {
    if (data.validCode) {
      if (parentScreen == "AccountIdentification") {
        NavigationService.navigate("ResetPassword");
      } else {
        dispatch(
          signUpActions.onSignUpResponse({ id: state.id, success: true })
        );
      }
    } else {
      ToastAndroid.show("کد وارد شده اشتباه است", ToastAndroid.SHORT);
    }
  };

  const regenerateCode = (): void => {
    dispatch(
      codeVerificationActions.requestGenerateCode(email, phone, inputType)
    );
    ref.resetCountDown();
  };

  const setCode = (code: string): void => {
    setData({
      verificationCode: code,
      validCode: code === "12345",
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
          <Animatable.View
            animation="fadeInUpBig"
            duration={500}
            style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="لطفا کد فعال‌سازی را وارد کنید"
                style={styles.textInput}
                keyboardType="number-pad"
                onChangeText={(text) => setCode(text)}
              />
            </View>
            <View style={styles.timerContainer}>
              <CountDown
                ref={(ref) => {
                  setRef(ref);
                }}
                initialSeconds={120}
                digitFontSize={20}
                labelFontSize={20}
                onTimeOut={(): void => {}}
                showHours={false}
                showSeparator
                separatorStyle={styles.seperatorLabel}
                minutesBackgroundStyle={styles.timerLabel}
                secondsBackgroundStyle={styles.timerLabel}
                width="40%"
                height={40}
              />
              <View>
                <TouchableOpacity onPress={regenerateCode}>
                  <Text style={styles.buttonResend}>ارسال مجدد کد</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={onNextScreen}>
                <Text style={styles.confirmButtonText}>تایید</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default CodeVerification;
