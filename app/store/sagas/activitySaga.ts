import { put } from "redux-saga/effects";
import { Alert, ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { navigationRef } from "../../navigation/navigationService";
import * as activityActions from "../actions/activityActions";
import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";

export function* addActivityAsync(action: Action<AddActivityRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { id, type, expense, debt } = action.payload;
  let response: AddActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addActivity(id, type, expense, debt);
    console.log("add activity response: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield navigationRef.current?.navigate("ActivityList", {
      parentScreen: "AddExpense",
    });
  } else {
    yield put(activityActions.onAddActivityFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
