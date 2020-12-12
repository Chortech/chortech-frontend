import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { RootStackParamList } from "../../navigation/rootStackParams";
import * as userActions from "../../store/actions/userActions";
import LoadingIndicator from "../Loading";
import NavigationService from "../../navigation/navigationService";

import { styles } from "./styles";

type Props = {
  route: RouteProp<RootStackParamList, "Activity">;
};

type IState = {
  userReducer: IUserState;
};

const Activity: React.FC<Props> = ({ route }: Props) => {
  const { id, activityName, activityType, expenseId, debtId } = route.params;
  const { loading } = useSelector((state: IState) => state.userReducer);
  const dispatch = useDispatch();

  const onPressDeleteActivity = () => {
    if (activityType == "debt") {
      let targetid: string = debtId != undefined ? debtId : "-1";
      dispatch(userActions.onDeleteDebtRequest(targetid));
      dispatch(userActions.onDeleteActivityRequest(id));
    } else {
      let targetId: string = expenseId != undefined ? expenseId : "-1";
      dispatch(userActions.onDeleteExpenseRequest(targetId));
      dispatch(userActions.onDeleteActivityRequest(id));
    }
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
              source={require("../../assets/images/friend-image.jpg")}
            />
            <Text style={styles.activityNameText}>{activityName}</Text>
          </View>
          <Animatable.View
            animation="slideInUp"
            duration={600}
            style={styles.infoContainer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={onPressDeleteActivity}>
                <Text style={styles.removeButtonText}>حذف فعالیت</Text>
                <Text style={styles.minus}>-</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      )}
    </>
  );
};

export default Activity;
