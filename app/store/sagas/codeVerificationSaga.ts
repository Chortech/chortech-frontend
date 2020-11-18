import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GenerateCodeRequest } from "../../models/requests/generateCode";
import { IdentifyAccountRequest } from "../../models/requests/identify";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { codeVerificationReducer } from "../reducers/codeVerificationReducer";
import * as codeVerificationActions from "../actions/codeVerificationActions";

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  yield put(codeVerificationActions.onLoadingEnable());
  const { email, phone, inputType } = action.payload;
  try {
    yield Api.generateCode(email, phone, inputType);
    console.log("code generated");
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(codeVerificationActions.onLoadingDisable());
}
