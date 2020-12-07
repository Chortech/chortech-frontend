import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  GetUserActivitiesRequest,
  GetUserRequest,
  UpdateUserRequest,
} from "../../models/requests/user";
import {
  GetUserActivitiesResponse,
  GetUserResponse,
  UpdateUserResponse,
} from "../../models/responses/user";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as userActions from "../actions/userActions";

export function* fetchUserAsync(action: Action<GetUserRequest>) {
  yield put(userActions.onLoadingEnable());
  const id = action.payload.id;
  let response: GetUserResponse = {
    success: false,
    user: undefined,
  };

  try {
    response = yield Api.getUser(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserResponse(response));
  } else {
    yield put(userActions.onGetUserFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* updateUserAsync(action: Action<UpdateUserRequest>) {
  yield put(userActions.onLoadingEnable());
  const user = action.payload.user;
  let response: UpdateUserResponse = {
    success: false,
    user: undefined,
  };

  try {
    response = yield Api.updateUser(user);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onUpdateUserResponse(response));
  } else {
    yield put(userActions.onUpdateUserFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserActivitiesAsync(
  action: Action<GetUserActivitiesRequest>
) {
  yield put(userActions.onLoadingEnable());
  const { userId } = action.payload;
  let response: GetUserActivitiesResponse = {
    success: false,
    userId: "-1",
    activities: [],
  };

  try {
    response = yield Api.getUserActivities(userId);
  } catch (error) {
    console.log(JSON.stringify(error));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserActivitiesResponse(response));
  } else {
    yield put(userActions.onGetUserActivitiesFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
