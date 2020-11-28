import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GenerateCodeRequest } from "../../models/requests/codeVerification";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as codeVerificationActions from "../actions/codeVerificationActions";

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  yield put(codeVerificationActions.onLoadingEnable());
  const { email, phone, inputType } = action.payload;
  try {
    yield Api.generateCode(email, phone, inputType);
  } catch (error) {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(codeVerificationActions.onLoadingDisable());
}
