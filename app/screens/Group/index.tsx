import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
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
import { validateToken } from "../../utils/tokenValidator";

type Props = {
  route: RouteProp<RootStackParamList, "Group">;
};

type IState = {
  userReducer: IUserState;
};

const Group: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const [renderFlatList, setRenderFlatList] = useState(false);
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { groupId } = route.params;
  const { loading, currentGroup } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchCurrentGroup();
  }, [dispatch]);

  const fetchCurrentGroup = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetGroupInfoRequest(loggedInUser.token, groupId));
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchCurrentGroup();
    setRefreshing(false);
  }, [dispatch]);

  const onEditGroup = () => {
    NavigationService.navigate("EditGroup", {
      groupId: currentGroup.id,
    });
  };

  const onPressSettleUp = () => NavigationService.navigate("SettleUp");
  const onPressGroupBalances = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(groupActions.onGetGroupInfoRequest(loggedInUser.token, groupId));
    }
    NavigationService.navigate("GroupBalances", { groupId: groupId });
  };

  const renderExpenseItem = ({ item }) => (
    <BalanceItem
      item={item}
      onPressItem={() => {
        log("pressed");
      }}
    />
  );

  let balance: number = currentGroup.balance != undefined ? currentGroup.balance : 0;

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
            <Text style={styles.groupName}>{currentGroup.name}</Text>
            <View style={styles.balanceStatusContainer}>
              {balance > 0 ? (
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
                  <Text style={styles.text}> پس می‌گیرید</Text>
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
              <TouchableOpacity style={styles.settleUpButton} onPress={onPressGroupBalances}>
                <Text style={styles.settleUpButtonText}>حساب و کتاب‌ها</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <FlatList
              refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              showsVerticalScrollIndicator={false}
              data={currentGroup.expenses}
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
