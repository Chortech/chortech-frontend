import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { FetchUserRequest } from "../../models/requests/getUser";
import { UpdateUserRequest } from "../../models/requests/updateUser";
import { FetchUserResponse } from "../../models/responses/getUser";
import { UpdateUserResponse } from "../../models/responses/updateUser";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as userActions from "../actions/userActions";

export function* fetchUserAsync(action: Action<FetchUserRequest>) {
  yield put(userActions.onLoadingEnable());
  const id = action.payload.id;
  let response: FetchUserResponse = {
    success: false,
    user: undefined,
  };

  try {
    response = yield Api.getUser(id);
    console.log(JSON.stringify(response, undefined, 2));
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onFetchUserResponse(response));
  } else {
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
    console.log("update user: " + JSON.stringify(response));
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onUpdateUserResponse(response));
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
