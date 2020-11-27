import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from "react-native";
import ActionButton from "react-native-action-button";
import * as Animatable from "react-native-animatable";
import { useStore } from "react-redux";
import { Activity } from "../../models/other/Activity";
import { ILoginState } from "../../models/reducers/login";
import { GetUserActivitiesResponse } from "../../models/responses/getUserActivities";
import { GetUserGroupsResponse } from "../../models/responses/group";

import NavigationService from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import styles from "./styles";

const ActivityList: React.FC = () => {
  const loggedInUser: ILoginState = useStore().getState()["authReducer"];
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
  const [fetchedActivities, setActivities] = useState<Array<Activity>>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchActivities = () => {
    try {
      Api.getUserActivities(loggedInUser.id).then(
        (data: GetUserActivitiesResponse) => {
          setActivities(data.activities);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchActivities();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>فعالیت‌ها</Text>
        </View>
        <Animatable.View
          animation="slideInUp"
          duration={600}
          style={styles.infoContainer}>
          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
            data={fetchedActivities}
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
