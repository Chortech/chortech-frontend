import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import LoadingIndicator from "../Loading";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import { RegexValidator } from "../../utils/regexValidator";
import { RootStackParamList } from "../../navigation/rootStackParams";
import { RouteProp } from "@react-navigation/native";
import * as paymentActions from "../../store/actions/paymentActions";

type Props = {
  route: RouteProp<RootStackParamList, "SettleUp">;
};

type IState = {
  userReducer: IUserState;
};

const SettleUp: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const params = route.params;
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { loading, payment } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const onPressPay = () => {
    dispatch(paymentActions.onAddPaymentRequest(
      loggedInUser.token,
      loggedInUser.id,
      data.friendId,
      Number(data.paymentAmount),
      Math.floor(Date.now() / 1000),
    ));
    // NavigationService.navigate("Pay");
  }  

  const [data, setData] = useState({
      paymentAmount: params.paymentAmount != undefined ? params.paymentAmount : "",
      friendId: params.friendId != undefined ? params.friendId : "",
      isValidExpenseAmount: true,
  });

  const setPaymentAmount = (text: string) => {
      setData({
          ...data,
          paymentAmount: text,
          isValidExpenseAmount: text == "" || RegexValidator.validateExpenseAmount(text) == true,
      });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="لطفاً مبلغ را وارد کنید"
                value={data.paymentAmount}
                placeholderTextColor="#A4A4A4"
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={setPaymentAmount}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressPay}>
                <Text style={styles.settleUpButtonText}>پرداخت</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default SettleUp;
