import React from "react";
import { GestureResponderEvent, Image, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Member } from "../../models/other/axios/Group";
import { GroupMemberBalanceItem } from "../../models/other/axios/Item";
import { styles } from "./styles";
import { ArabicNumbers } from "react-native-arabic-numbers";
import colors from "../../assets/resources/colors";
import fonts from "../../assets/resources/fonts";
import * as Animatable from "react-native-animatable";
import { useDispatch, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { validateToken } from "../../utils/tokenValidator";
import * as notifActions from "../../store/actions/notificationActions";
import messages from "../../assets/resources/messages";
import navigationService from "../../navigation/navigationService";

type Props = {
  balance: GroupMemberBalanceItem;
  onPressItem?: (event: GestureResponderEvent) => void;
};

const MemberBalanceItem: React.FC<Props> = (props: Props): JSX.Element => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { member, selected } = props.balance;
  const dispatch = useDispatch();
  let balance: number = member.totalBalance != undefined ? member.totalBalance : 0;

  const onPressSettleUp = (itemId: string) => {
    navigationService.navigate("SettleUp");
  };

  const onPressRemind = (friendId: string) => {
    if (validateToken(loggedInUser.token)) {
      dispatch(
        notifActions.onRemindMemberRequest(loggedInUser.token, messages.reminderMessage, friendId)
      );
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={props.onPressItem}
        style={styles.container}
        disabled={balance == 0}>
        <View style={styles.itemContainer}>
          <Text style={{ ...styles.text, fontFamily: fonts.IranSans_Medium }}>{member.name}</Text>
          {balance == 0 ? (
            <Text style={styles.text}> بی‌حساب است</Text>
          ) : balance > 0 ? (
            <>
              <Text style={styles.text}> در کل</Text>
              <Text
                style={{
                  ...styles.text,
                  color: colors.mainColor,
                  fontFamily: fonts.IranSans_Bold,
                  fontSize: 16,
                }}>
                {" "}
                {ArabicNumbers(Math.abs(balance))} تومان{" "}
              </Text>
              <Text style={styles.text}>پس می‌گیرد</Text>
            </>
          ) : (
            <>
              <Text style={styles.text}> در کل</Text>
              <Text
                style={{
                  ...styles.text,
                  color: colors.red,
                  fontFamily: fonts.IranSans_Bold,
                  fontSize: 16,
                }}>
                {" "}
                {ArabicNumbers(Math.abs(balance))} تومان{" "}
              </Text>
              <Text style={styles.text}>بدهکار است</Text>
            </>
          )}
        </View>
      </TouchableOpacity>
      {selected ? (
        <Animatable.View animation="bounceInRight" duration={500}>
          <FlatList
            data={member.balances}
            renderItem={({ item }) => {
              let memberBalance: number = item.balance != undefined ? item.balance : 0;
              return (
                <View style={styles.balanceContainer}>
                  <View style={styles.memberBalanceItemTextContainer}>
                    {memberBalance > 0 ? (
                      <>
                        <Text style={styles.miniText}>{item.name}</Text>
                        <Text style={styles.miniText}>
                          {ArabicNumbers(Math.abs(memberBalance))}
                        </Text>
                        <Text style={styles.miniText}> تومان به </Text>
                        <Text style={styles.miniText}>{member.name}</Text>
                        <Text style={styles.miniText}> بدهکار است</Text>
                      </>
                    ) : null}
                    {memberBalance < 0 ? (
                      <>
                        <Text style={styles.miniText}>{member.name}</Text>
                        <Text style={styles.miniText}>
                          {ArabicNumbers(Math.abs(memberBalance))}
                        </Text>
                        <Text style={styles.miniText}> تومان به </Text>
                        <Text style={styles.miniText}>{item.name}</Text>
                        <Text style={styles.miniText}> بدهکار است</Text>
                      </>
                    ) : null}
                  </View>
                  <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                      style={styles.settleUpButtonContainer}
                      onPress={() => onPressSettleUp(item.id)}>
                      <Text style={styles.settleUpButtonText}>تسویه</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.reminderButtonContainer}
                      onPress={() => onPressRemind(item.id)}>
                      <Text style={styles.reminderButtonText}>یادآوری</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          />
        </Animatable.View>
      ) : null}
    </>
  );
};

export default MemberBalanceItem;
