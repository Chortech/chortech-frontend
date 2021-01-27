import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ToastAndroid,
  PointPropType,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { CountDown } from "react-native-customizable-countdown";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootStackParamList } from "../../navigation/rootStackParams";
import NavigationService, { navigationRef } from "../../navigation/navigationService";
import { styles } from "./styles";
import * as verificationActions from "../../store/actions/verificationActions";
import * as authActions from "../../store/actions/authActions";
import LoadingIndicator from "../Loading";
import { IUserState } from "../../models/reducers/default";
import { User } from "../../models/other/graphql/User";
import { log } from "../../utils/logger";
import { validateToken } from "../../utils/tokenValidator";
import { Response } from "../../models/responses/axios/response";
import { colors } from "react-native-elements";
import { ChangeEmailOrPhone, SignUp } from "../../models/responses/axios/auth";

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
  const [timerFinished, setTimerFinished] = useState<boolean>(false);
  const [data, setData] = useState({
    verificationCode: "",
    validCodeLength: false,
  });

  const dispatch = useDispatch();
  const generateCode = () => {
    dispatch(
      verificationActions.onGenerateCodeRequest(
        props.email,
        props.phone,
        props.inputType,
        props.parentScreen,
        props.name,
        props.password,
        state.token
      )
    );
  };

  useEffect(() => {
    generateCode();
  }, [dispatch]);

  const onNextScreen = () => {
    if (data.validCodeLength) {
      dispatch(
        verificationActions.onVerifyCodeRequest(
          props.name,
          props.email,
          props.phone,
          props.password,
          props.inputType,
          data.verificationCode,
          props.parentScreen,
          state.token
        )
      );
    } else {
      ToastAndroid.show("کد تایید واردشده باید ۶ رقمی باشد", ToastAndroid.SHORT);
    }
  };

  const regenerateCode = (): void => {
    generateCode();
    ref.resetCountDown();
    setTimerFinished(false);
  };

  const setCode = (code: string): void => {
    setData({
      verificationCode: code,
      validCodeLength: code.length == 6,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="fadeInUpBig" duration={500} style={styles.formsContainer}>
            <Text style={styles.screenTitleText}>لطفا کد فعال‌سازی را وارد کنید</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                placeholder="کد فعال‌سازی"
                style={styles.textInput}
                keyboardType="number-pad"
                maxLength={6}
                onChangeText={(text) => setCode(text)}
              />
            </View>
            <View style={styles.timerContainer}>
              <CountDown
                ref={(ref: any) => {
                  setRef(ref);
                }}
                initialSeconds={20}
                digitFontSize={20}
                labelFontSize={20}
                onTimeOut={(): void => setTimerFinished(true)}
                showHours={false}
                showSeparator
                separatorStyle={styles.seperatorLabel}
                minutesBackgroundStyle={styles.timerLabel}
                secondsBackgroundStyle={styles.timerLabel}
                width="40%"
                height={40}
              />
              <TouchableOpacity onPress={regenerateCode} disabled={!timerFinished}>
                <Text
                  style={{
                    ...styles.resendButtonText,
                    color: timerFinished ? "black" : "#aaaaaa",
                  }}>
                  ارسال مجدد کد
                </Text>
              </TouchableOpacity>
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
