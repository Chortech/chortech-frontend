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
import {Group} from "../../models/other/axios/Group"

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
  const { loading, groups } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const [currentGroup, setCurrentGroup] = useState<Group>(); 
  const onAddExpense = () => NavigationService.navigate("AddExpense");
  const onEditGroup = () => NavigationService.navigate("EditGroup", {
    id: group.id,
    groupName: group.name,
    ImageUrl: group.picture,
    members: group.members != undefined ? group.members : [],
  });
  const onPressDeleteGroup = () => {
    dispatch(groupActions.onDeleteGroupRequest(loggedInUser.token, group.id));
  };
  useEffect(() => {
    
  }, [dispatch]);
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

  const renderExpenseItem: any = ({ item }) => (
    <ExpenseItem
      description={item.description}
      price={item.totalPrice}
      onPressExpenseItem={() => onExpensePress(item.id, item.description, "expense", "-1", "-1")}
    />
  );

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.groupImage}
              source={require("../../assets/images/group-image.jpg")}
            />
            <Text style={styles.textHeader}>{group.name}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            {/* <FlatList
              showsVerticalScrollIndicator={false}
              data={expenses}
              renderItem={renderExpenseItem}
              extraData={renderFlatList}
              ListFooterComponent={
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.removeButton} onPress={onPressDeleteGroup}>
                    <Text style={styles.removeButtonText}>حذف گروه</Text>
                  </TouchableOpacity>
                </View>
              }
            />  */}
          </Animatable.View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={onEditGroup}>
                <Text style={styles.buttonText}>تنظیمات گروه</Text>
              </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Group;
