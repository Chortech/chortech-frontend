import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { IdentifyAccountRequest } from "../../models/requests/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/identifyAccount";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as codeVerificationActions from "../actions/codeVerificationActions";
import * as identifyAccountActions from "../actions/identifyAccountActions";

export default function* identifyAccountAsync(
  action: Action<IdentifyAccountRequest>
) {
  yield put(identifyAccountActions.onLoadingEnable());
  const { email, phone, inputType } = action.payload;
  let response: IdentifyAccountResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.identifyAccount(email, phone, inputType);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(identifyAccountActions.onLoadingDisable());

  if (response.success) {
    yield put(identifyAccountActions.onIdentifyAccountResponse(response));
    yield navigationRef.current?.navigate("CodeVerification", {
      parentScreen: "AccountIdentification",
    });
    yield put(
      codeVerificationActions.onGenerateCodeRequest(email, phone, inputType)
    );
  } else {
    yield put(identifyAccountActions.onIdentifyAccountFail());
    ToastAndroid.show("اطلاعات وارد شده نادرست است", ToastAndroid.SHORT);
  }
}
