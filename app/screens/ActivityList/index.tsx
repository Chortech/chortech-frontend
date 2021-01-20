import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Item } from "../../models/other/axios/Item";
import { IUserState } from "../../models/reducers/default";
import NavigationService from "../../navigation/navigationService";
import * as expenseActions from "../../store/actions/expenseActions";
import { log } from "../../utils/logger";
import { validateToken } from "../../utils/tokenValidator";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const ActivityList: React.FC = () => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const user = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const onPressActivityItem = (id: string, name: string, category: string, total: number) =>
    NavigationService.navigate("Activity", {
      id: id,
      activityName: name,
      category: category,
      total: total.toString(),
    });
  const onAddExpense = () => {
    let items: Array<Item> = [];

    user.friends.forEach((element) => {
      items.push({ id: element.id, name: element.name, amount: 0, selected: false });
    });
    NavigationService.navigate("AddExpense", { parentScreen: "ActivityList", items: items });
  };
  const [refreshing, setRefreshing] = useState(false);
  const fetchActivities = (): void => {
    // if (validateToken(loggedInUser.token)) {
    //   dispatch(expenseActions.onGetUserExpensesRequest(loggedInUser.token));
    // }
  };
  useEffect(() => {
    fetchActivities();
  }, [dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchActivities();
    setRefreshing(false);
  }, [dispatch]);

  return (
    <>
      <View style={styles.container}>
        <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
          <FlatList
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={false}
            data={user.activities}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.activityContainer}
                    onPress={() => onPressActivityItem(item.id, item.description, "", item.total)}>
                    <Text style={styles.activityText}>{item.description}</Text>
                    <Image
                      style={styles.activityImage}
                      source={require("../../assets/images/category-image.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </Animatable.View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onAddExpense}>
            <Text style={styles.buttonText}>ثبت فعالیت جدید</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ActivityList;
