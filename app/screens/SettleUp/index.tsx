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

type Props = {
    // route: RouteProp<RootStackParamList, "SettleUp">;
};

type IState = {
    userReducer: IUserState;
};

const Friend: React.FC<Props> = (): JSX.Element => {
    // const params = route.params;
    const loggedInUser: IUserState = useStore().getState()["authReducer"];
    const { loading } = useSelector((state: IState) => state.userReducer);
    const dispatch = useDispatch();

    const onPressPay = () => NavigationService.navigate("Pay");

    // const [data, setData] = useState({
    //     description: params.description != undefined ? params.description : "",
    //     paymentAmount: params.total != undefined ? params.total : "",
    //     isValidExpenseAmount: true,
    // });

    // const setPaymentAmount = (text: string) => {
    //     setData({
    //         ...data,
    //         paymentAmount: text,
    //         isValidExpenseAmount: text == "" || RegexValidator.validateExpenseAmount(text) == true,
    //     });
    // };

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
                                // value={data.paymentAmount}
                                placeholderTextColor="#A4A4A4"
                                style={styles.textInput}
                                keyboardType="numeric"
                                // onChangeText={setPaymentAmount}
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

export default Friend;
