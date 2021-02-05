import { ToastAndroid } from "react-native";
import { put, call } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GetUserActivitiesRequest } from "../../models/requests/axios/user";
import { ActivityAPI } from "../../services/api/axios/activityApi";
import { Response } from "../../models/responses/axios/response";
import * as activityActions from "../actions/activityActions";
import * as expenseActions from "../actions/expenseActions";
import * as expenseSaga from "./expenseSaga";
import { Activity } from "../../models/other/axios/Activity";
import messages from "../../assets/resources/messages";

export function* getUserActivitiesAsync(action: Action<GetUserActivitiesRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<Activity[]> = {
    success: false,
    status: -1,
  };

  yield call(expenseSaga.getUserExpensesAsync, expenseActions.onGetUserExpensesRequest(token));

  let api: ActivityAPI = new ActivityAPI(token);
  response = yield api.getActivities();

  if (response.success) {
    yield put(activityActions.onGetUserActivitiesResponse(response));
  } else {
    if (response.status == 404) {
      ToastAndroid.show(messages.noActivities, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(activityActions.onLoadingDisable());
}
