import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StatusBar, ToastAndroid } from "react-native";
import * as Animatable from "react-native-animatable";
import { CountDown } from "react-native-customizable-countdown";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootStackParamList } from "../../navigation/rootStackParams";
import NavigationService from "../../navigation/navigationService";
import { styles } from "./styles";
import * as authActions from "../../store/actions/authActions";
import { ILoginState } from "../../models/reducers/login";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import { User } from "../../models/other/graphql/User";

type Props = {
  route: RouteProp<RootStackParamList, "CodeVerification">;
};

type IState = {
  authReducer: IUserState;
};

const CodeVerification: React.FC<Props> = ({ route }: Props) => {
  const state: IUserState = useStore().getState()["authReducer"];
  const props = route.params;
  const { loading } = useSelector((state: IState) => state.authReducer);
  const [ref, setRef] = useState<any>(null);
  const [data, setData] = useState({
    verificationCode: "",
    validCode: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.onGenerateCodeRequest(props.email, props.phone, props.inputType));
  }, [dispatch]);

  const onNextScreen = () => {
    if (data.validCode) {
      if (props.parentScreen == "AccountIdentification") {
        NavigationService.navigate("ResetPassword");
      } else {
        dispatch(
          authActions.onSignUpRequest(
            props.name,
            props.email,
            props.phone,
            props.password,
            props.inputType
          )
        );
      }
    } else {
      ToastAndroid.show("کد وارد شده اشتباه است", ToastAndroid.SHORT);
    }
  };

  const regenerateCode = (): void => {
    dispatch(authActions.onGenerateCodeRequest(props.email, props.phone, props.inputType));
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
          <Animatable.View animation="fadeInUpBig" duration={500} style={styles.footer}>
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
                ref={(ref: any) => {
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
              <TouchableOpacity style={styles.confirmButton} onPress={onNextScreen}>
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
