import { ToastAndroid } from "react-native";
import { useSelector } from "react-redux";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as resetPasswordActions from "../actions/resetPasswordActions";

export default function* resetPasswordAsync(
  action: Action<ResetPasswordRequest>
) {
  yield put(resetPasswordActions.onLoadingEnable());
  const { id, password } = action.payload;
  let response: ResetPasswordResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.resetPassword(id, password);
  } catch (error) {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(resetPasswordActions.onLoadingDisable());

  if (response.success) {
    yield put(resetPasswordActions.onResetPasswordResponse(response));
    yield navigationRef.current?.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  } else {
    yield put(resetPasswordActions.onResetPasswordFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
