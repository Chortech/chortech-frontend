import React, { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as groupActions from "../../store/actions/groupActions";
import { Expense } from "../../models/other/graphql/Expense";
import ExpenseItem from "../../components/ExpenseItem";
import { log } from "../../utils/logger";
import { Group } from "../../models/other/axios/Group";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { ArabicNumbers } from "react-native-arabic-numbers";
import fonts from "../../assets/resources/fonts";
import BalanceItem from "../../components/BalanceItem";

type Props = {
  route: RouteProp<RootStackParamList, "Group">;
};

type IState = {
  userReducer: IUserState;
};

const Group: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const [renderFlatList, setRenderFlatList] = useState(false);
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { group } = route.params;
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [currentGroup, setCurrentGroup] = useState<Group>();
  const onAddExpense = () => NavigationService.navigate("AddExpense");
  const onEditGroup = () =>
    NavigationService.navigate("EditGroup", {
      id: group.id,
      groupName: group.name,
      ImageUrl: group.picture,
      members: group.members != undefined ? group.members : [],
    });
  const onPressDeleteGroup = () => {
    dispatch(groupActions.onDeleteGroupRequest(loggedInUser.token, group.id));
  };
  useEffect(() => {}, [dispatch]);
  const onExpensePress = (
    id: string,
    name: string,
    type: string,
    expenseId?: string,
    debtId?: string
  ) => {
    setRenderFlatList(!renderFlatList);
    NavigationService.navigate("Activity", {
      id: id,
      activityName: name,
      activityType: type,
      expenseId: expenseId,
      debtId: debtId,
    });
  };
  const onPressSettleUp = () => NavigationService.navigate("SettleUp");

  const renderExpenseItem: any = ({ item }) => <BalanceItem item={item} />;

  let balance: number = group.balance != undefined ? group.balance : 0;

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.settingIconContainer} onPress={onEditGroup}>
              <FontAwesomeIcon icon="cog" size={30} style={styles.settingIcon} />
            </TouchableOpacity>
            <Image
              style={styles.groupImage}
              source={require("../../assets/images/group-image.jpg")}
            />
            <Text style={styles.groupName}>{group.name}</Text>
            <View style={styles.balanceStatusContainer}>
              {balance > 0 ? (
                <>
                  <Text style={styles.text}>شما</Text>
                  <Text
                    style={{
                      ...styles.text,
                      fontFamily: fonts.IranSans_Bold,
                      fontSize: 18,
                    }}>
                    {ArabicNumbers(Math.abs(balance))} تومان
                  </Text>
                  <Text style={styles.text}>پس می‌گیرید</Text>
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
                  <Text style={styles.text}> بدهکار هستید </Text>
                </>
              ) : (
                <Text style={styles.text}>شما در این گروه بی‌حساب هستید</Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressSettleUp}>
                <Text style={styles.settleUpButtonText}>تسویه حساب</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressSettleUp}>
                <Text style={styles.settleUpButtonText}>حساب و کتاب‌ها</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={group.expenses}
              renderItem={renderExpenseItem}
              extraData={renderFlatList}
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Group;
