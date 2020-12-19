import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, FlatList, RefreshControl } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Activity } from "../../models/other/Activity";
import { IUserState } from "../../models/reducers/default";
import { GetUserActivitiesResponse } from "../../models/responses/user";
import NavigationService from "../../navigation/navigationService";
import * as userActions from "../../store/actions/userActions";
import styles from "./styles";

type IState = {
  userReducer: IUserState;
};

const ActivityList: React.FC = () => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const { activities } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();
  const onPressActivityItem = (
    id: string,
    name: string,
    type: string,
    expenseId?: string,
    debtId?: string
  ) =>
    NavigationService.navigate("Activity", {
      id: id,
      activityName: name,
      activityType: type,
      expenseId: expenseId,
      debtId: debtId,
    });
  const onAddExpense = () => NavigationService.navigate("AddExpense");
  const [refreshing, setRefreshing] = useState(false);
  const fetchActivities = (): void => {
    dispatch(userActions.onGetUserRequest(loggedInUser.id));
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
            data={activities}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.activityContainer}
                    onPress={() =>
                      onPressActivityItem(
                        item.id,
                        item.name,
                        item.type,
                        item.expenseId,
                        item.debtId
                      )
                    }>
                    <Text style={styles.activityText}>{item.name}</Text>
                    <Image
                      style={styles.activityImage}
                      source={require("../../assets/images/friend-image.jpg")}
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
