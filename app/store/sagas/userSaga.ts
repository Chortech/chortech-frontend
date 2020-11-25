import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { FetchUserRequest } from "../../models/requests/getUser";
import { FetchUserResponse } from "../../models/responses/getUser";
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

  if (response.success) {
    yield put(userActions.onFetchUserResponse(response));
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
