import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ToastAndroid } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as friendActions from "../../store/actions/friendActions";
import * as authActions from "../../store/actions/authActions";
import { validateToken } from "../../utils/tokenValidator";
import LoadingIndicator from "../Loading";
import { styles } from "./styles";
import NavigationService from "../../navigation/navigationService";

type Props = {
  route: RouteProp<RootStackParamList, "Friend">;
};

type IState = {
  userReducer: IUserState;
};

const Friend: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { id, friendName } = route.params;
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const onPressSettleUp = () => NavigationService.navigate("SettleUp");

  const onPressDeleteFriend = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(friendActions.onDeleteFriendRequest(loggedInUser.token, id));
    } else {
      dispatch(
        authActions.onLoginRequest(
          loggedInUser.email,
          loggedInUser.phone,
          loggedInUser.password,
          loggedInUser.authInputType
        )
      );
      ToastAndroid.show("دوباره تلاش کنید", ToastAndroid.SHORT);
    }
  };

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
            <Text style={styles.userNameText}>{friendName}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
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
