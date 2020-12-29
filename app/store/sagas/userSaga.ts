import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GetUserProfileRequest } from "../../models/requests/axios/user";
import { UserAPI } from "../../services/api/axios/userApi";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { Response } from "../../models/responses/axios/response";
import { UserProfileResponse } from "../../models/responses/axios/user";
import * as userActions from "../actions/userActions";

export function* getUserProfileAsync(action: Action<GetUserProfileRequest>) {
  yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UserProfileResponse> = {
    success: false,
    status: -1,
  };

  const api: UserAPI = new UserAPI(token);
  response = yield api.getUserProfile();

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserProfileResponse(response));
  } else {
    yield put(userActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}
