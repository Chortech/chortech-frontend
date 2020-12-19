import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import * as Animatable from "react-native-animatable";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/rootStackParams";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";
import { IUserState } from "../../models/reducers/default";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import FriendItem from "../../components/FriendItem";
import { Expense } from "../../models/other/Expense";
import ExpenseItem from "../../components/ExpenseItem";

type Props = {
  route: RouteProp<RootStackParamList, "Group">;
};

type IState = {
  userReducer: IUserState;
};

const Group: React.FC<Props> = ({ route }: Props): JSX.Element => {
  const [renderFlatList, setRenderFlatList] = useState(false);

  const { id, groupName, ImageUrl } = route.params;
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const onAddExpense = () => NavigationService.navigate("AddExpense");
  const onPressDeleteGroup = () => {
    dispatch(userActions.onDeleteGroupRequest(id));
  };

  const expenses: Array<Expense> = [
    { id: "1", description: "گوجه", category: "سبزی", participants: [], totalPrice: "10000" },
    { id: "2", description: "موز", category: "سبزی", participants: [], totalPrice: "12000" },
    { id: "3", description: "خیار", category: "سبزی", participants: [], totalPrice: "13000" },
    { id: "4", description: "آلو", category: "سبزی", participants: [], totalPrice: "1000" },
    { id: "5", description: "هلو", category: "سبزی", participants: [], totalPrice: "4000" },
    { id: "6", description: "گردو", category: "سبزی", participants: [], totalPrice: "50000" },
  ];

  const onExpensePress = () => {
    setRenderFlatList(!renderFlatList);
    console.log("expense pressed!");
  };

  const renderExpenseItem: any = ({ item }) => (
    <ExpenseItem
      description={item.description}
      price={item.totalPrice}
      onPressExpenseItem={onExpensePress}
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
            <Text style={styles.text}>{groupName}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <FlatList
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
            />
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Group;
