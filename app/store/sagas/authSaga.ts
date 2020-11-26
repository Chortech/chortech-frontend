import { put } from "redux-saga/effects";
import { Alert, ToastAndroid } from "react-native";
// import { delay } from 'redux-saga';

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import { LoginResponse } from "../../models/responses/login";
import { LoginRequest } from "../../models/requests/login";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { InputType } from "../../utils/inputTypes";

export function* loginAsync(action: Action<LoginRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, password, inputType } = action.payload;
  let response: LoginResponse = {
    id: "-1",
    success: false,
    name: "",
  };

  try {
    response = yield Api.login(email, phone, password, inputType);
    console.log("data: " + JSON.stringify(response, undefined, 2));
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    console.log("success");
    yield put(authActions.onLoginResponse(response));
  } else {
    yield put(authActions.loginFailed());
    ToastAndroid.show("اطلاعات واردشده نادرست است", ToastAndroid.SHORT);
  }
}

export function* signUpAsync(action: Action<SignUpRequest>) {
  yield put(authActions.onLoadingEnable());
  const { name, email, phone, password, inputType } = action.payload;
  let response: LoginResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.signUp(name, email, phone, password, inputType);
    console.log("sign up reponse: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield navigationRef.current?.navigate("CodeVerification", {
      parentScreen: "SignUp",
    });
  } else {
    yield put(authActions.onSignUpFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
