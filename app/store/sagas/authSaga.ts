import { put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import { LoginResponse } from "../../models/responses/graphql/login";
import { LoginRequest } from "../../models/requests/graphql/login";
import { SignUpRequest } from "../../models/requests/graphql/signUp";
import { SignUpResponse } from "../../models/responses/graphql/signUp";
import { IdentifyAccountRequest } from "../../models/requests/graphql/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/graphql/identifyAccount";
import { GenerateCodeRequest } from "../../models/requests/graphql/codeVerification";
import { ResetPasswordRequest } from "../../models/requests/graphql/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/graphql/resetPassword";

export function* loginAsync(action: Action<LoginRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, password, inputType } = action.payload;
  let response: LoginResponse = {
    success: false,
    user: null,
  };

  try {
    response = yield Api.login(email, phone, password, inputType);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onLoginResponse(response));
  } else {
    yield put(authActions.onLoginFail());
    ToastAndroid.show("اطلاعات واردشده نادرست است", ToastAndroid.SHORT);
  }
}

export function* signUpAsync(action: Action<SignUpRequest>) {
  yield put(authActions.onLoadingEnable());
  const { name, email, phone, password, inputType } = action.payload;
  let response: SignUpResponse = {
    success: false,
    user: null,
  };

  try {
    response = yield Api.signUp(name, email, phone, password, inputType);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onSignUpResponse(response));
  } else {
    yield put(authActions.onSignUpFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* identifyAccountAsync(action: Action<IdentifyAccountRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, inputType } = action.payload;
  let response: IdentifyAccountResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.identifyAccount(email, phone, inputType);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onIdentifyAccountResponse(response));
    navigationRef.current?.navigate("CodeVerification", {
      parentScreen: "AccountIdentification",
      name: "",
      email: email,
      phone: phone,
      password: "",
      inputType: inputType,
    });
  } else {
    yield put(authActions.onIdentifyAccountFail());
    ToastAndroid.show("اطلاعات وارد شده نادرست است", ToastAndroid.SHORT);
  }
}

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, inputType } = action.payload;
  try {
    yield Api.generateCode(email, phone, inputType);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(authActions.onLoadingDisable());
}

export function* resetPasswordAsync(action: Action<ResetPasswordRequest>) {
  yield put(authActions.onLoadingEnable());
  const { id, password } = action.payload;
  let response: ResetPasswordResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.resetPassword(id, password);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onResetPasswordResponse(response));
    yield navigationRef.current?.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  } else {
    yield put(authActions.onResetPasswordFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
