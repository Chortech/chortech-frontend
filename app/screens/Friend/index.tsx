import { RouteProp, useLinkProps } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, ToastAndroid, FlatList, Alert } from "react-native";
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
import { ExpenseBalance } from "../../models/other/axios/Balance";
import colors from "../../assets/resources/colors";
import BalanceItem from "../../components/BalanceItem";
import PopupMenu from "../../components/PopupMenu";
import fonts from "../../assets/resources/fonts";
import { ArabicNumbers } from "react-native-arabic-numbers";

type Props = {
  route: RouteProp<RootStackParamList, "Friend">;
};

type IState = {
  userReducer: IUserState;
};

const Friend: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { id, name, image, balance, balances } = route.params;
  const { loading, friends } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const onPressSettleUp = () => NavigationService.navigate("SettleUp", {friendId: id});

  const onPressDeleteFriend = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(friendActions.onDeleteFriendRequest(loggedInUser.token, id));
    }
  };

  const onPopupEvent = (eventName, index) => {
    if (eventName !== "itemSelected") return;
    if (index === 0) {
      Alert.alert(
        "",
        "آیا از حذف دوست خود مطمئن هستید؟",
        [
          {
            text: "لغو",
            onPress: () => {},
          },
          {
            text: "تایید",
            onPress: onPressDeleteFriend,
          },
        ],
        {
          cancelable: true,
        }
      );
    }
  };

  const renderFriendBalanceItem = ({ item }) => {
    return <BalanceItem item={item} />;
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.popupMenuContainer}>
              <PopupMenu actions={["حذف از لیست دوستان"]} onPress={onPopupEvent} />
            </View>
            <Image
              style={styles.friendImage}
              source={require("../../assets/images/friend-image.jpg")}
            />
            <Text style={styles.userNameText}>{name}</Text>
            <View style={styles.balanceStatusContainer}>
              {balance > 0 ? (
                <>
                  <Text style={styles.text}> {name}</Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontFamily: fonts.IranSans_Bold,
                      fontSize: 18,
                    }}>
                    {ArabicNumbers(Math.abs(balance))} تومان
                  </Text>
                  <Text style={styles.text}> به شما بدهکار است</Text>
                </>
              ) : balance < 0 ? (
                <>
                  <Text style={styles.text}>شما </Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontFamily: fonts.IranSans_Bold,
                      fontSize: 18,
                    }}>
                    {ArabicNumbers(Math.abs(balance))} تومان
                  </Text>
                  <Text style={styles.text}> به </Text>
                  <Text style={styles.text}>{name}</Text>
                  <Text style={styles.text}> بدهکار هستید </Text>
                </>
              ) : (
                <Text style={styles.text}>شما بی‌حساب هستید</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressSettleUp}>
                <Text style={styles.settleUpButtonText}>تسویه حساب</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            {balances.length > 0 ? (
              <FlatList
                data={balances}
                renderItem={renderFriendBalanceItem}
                keyExtractor={(item) => item.id}
                style={styles.flatList}
              />
            ) : null}
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Friend;
