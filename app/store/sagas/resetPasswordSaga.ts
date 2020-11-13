import { ToastAndroid } from "react-native";
import { useSelector } from "react-redux";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as resetPasswordActions from "../actions/resetPasswordActions";

type IState = {
  identifyAccountReducer: ILoginState;
};

export default function* resetPasswordAsync(
  action: Action<ResetPasswordRequest>
) {
  const { id, password } = action.payload;
  let response: ResetPasswordResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.resetPassword(id, password);
  } catch (error) {
    console.log("reset password error: " + error);
    ToastAndroid.show(error.message, ToastAndroid.SHORT);
  }

  if (response.success) {
    yield put(resetPasswordActions.onResetPasswordResponse(response));
    yield navigationRef.current?.navigate("Login");
  } else {
    console.log("error reset password");
    yield put(resetPasswordActions.onResetPasswordFailed());
    ToastAndroid.show("خطا در تغییر رمز عبور", ToastAndroid.SHORT);
  }
}
