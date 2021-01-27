import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ToastAndroid, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as friendActions from "../../store/actions/friendActions";
import * as expenseActions from "../../store/actions/expenseActions";
import { validateToken } from "../../utils/tokenValidator";
import LoadingIndicator from "../Loading";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";
import { AxiosInstance } from "axios";
import { Friend } from "../../models/other/axios/Friend";
import { log } from "../../utils/logger";
import { ExpenseBalance } from "../../models/other/axios/Expense";
import colors from "../../assets/resources/colors";
import FriendExpenseItem from "../../components/FriendExpenseItem";

type Props = {
  route: RouteProp<RootStackParamList, "Friend">;
};

type IState = {
  userReducer: IUserState;
};

const Friend: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { id, name, image, friendBalance } = route.params;
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();


  const onPressSettleUp = () => NavigationService.navigate("SettleUp");

  const onPressDeleteFriend = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(friendActions.onDeleteFriendRequest(loggedInUser.token, id));
    }
  };

  log("friend balance");
  log(friendBalance);

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.friendImage}
              source={require("../../assets/images/friend-image.jpg")}
            />
            <Text style={styles.userNameText}>{name}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <FlatList
              data={friendBalance[0].expenses}
              renderItem={({ item }) => <FriendExpenseItem item={item} />}
              keyExtractor={(item) => item.balance.toString()}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressSettleUp}>
                <Text style={styles.settleUpButtonText}>تسویه حساب</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={onPressDeleteFriend}>
                <Text style={styles.removeButtonText}>حذف کردن از دوستان</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Friend;
