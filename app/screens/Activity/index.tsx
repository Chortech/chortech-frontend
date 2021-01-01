import { RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector, useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as expenseActions from "../../store/actions/expenseActions";
import * as friendActions from "../../store/actions/friendActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";

import { styles } from "./styles";
import { log } from "../../utils/logger";
import { Item } from "../../models/other/axios/Item";
import { PRole } from "../../models/other/axios/Participant";
import { faIdeal } from "@fortawesome/free-brands-svg-icons";
import { validateToken } from "../../utils/tokenValidator";

type Props = {
  route: RouteProp<RootStackParamList, "Activity">;
};

type IState = {
  userReducer: IUserState;
};

const Activity: React.FC<Props> = ({ route }: Props) => {
  const loggedInUser: IUserState = useStore().getState()["authReducer"];
  const params = route.params;
  const { loading, activities, friends } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseActions.onGetUserExpenseRequest(loggedInUser.token, params.id));
  }, [dispatch]);

  const onPressAddComment = () =>
    NavigationService.navigate("AddComment", { expenseId: params.id });

  const onPressDeleteActivity = () => {
    if (validateToken(loggedInUser.token)) {
      dispatch(expenseActions.onDeleteExpenseRequest(loggedInUser.token, params.id));
    } else {
      ToastAndroid.show("لطفا دوباره تلاش کنید", ToastAndroid.SHORT);
    }
  };

  const getItems = (): Array<Item> => {
    let items: Array<Item> = [];
    let index = activities.findIndex((ac) => ac.id == params.id);
    if (index > -1) {
      activities[index].participants?.forEach((element) => {
        items.push({
          id: element.id,
          name: element.name!,
          amount: element.amount,
          selected: true,
          role: element.role == "creditor" ? PRole.Creditor : PRole.Debtor,
        });
      });
    }
    friends.forEach((fr) => {
      index = items.findIndex((i) => i.id == fr.id);
      if (index < 0) {
        items.push({ id: fr.id, name: fr.name, amount: 0, selected: false });
      }
    });

    return items;
  };

  const onPressEditComment = () => {
    let items: Array<Item> = getItems();
    NavigationService.navigate("AddExpense", {
      parentScreen: "Activity",
      items: items,
      id: params.id,
      description: params.activityName,
      total: params.total,
    });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.activityImage}
              source={require("../../assets/images/category-image.jpg")}
            />
            <Text style={styles.activityNameText}>{params.activityName}</Text>
          </View>
          <Animatable.View animation="slideInUp" duration={600} style={styles.infoContainer}>
            <View style={styles.textWrapper}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>{params.category}</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfo}>دسته‌بندی</Text>
              </View>
            </View>
            <View style={styles.textWrapper}>
              <View style={styles.textContainerLeft}>
                <Text style={styles.textInfo}>{params.total}</Text>
              </View>
              <View style={styles.textContainerRight}>
                <Text style={styles.textInfo}>مبلغ</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={onPressEditComment}>
                <Text style={styles.addButtonText}>ویرایش هزینه</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton} onPress={onPressAddComment}>
                <Text style={styles.addButtonText}>اضافه‌کردن یادداشت</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.removeButton} onPress={onPressDeleteActivity}>
                <Text style={styles.removeButtonText}>حذف فعالیت</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Activity;
