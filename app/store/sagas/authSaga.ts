import { put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import { SignUpRequest } from "../../models/requests/graphql/signUp";
import { SignUpResponse } from "../../models/responses/graphql/signUp";
import { IdentifyAccountRequest } from "../../models/requests/graphql/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/graphql/identifyAccount";
import { GenerateCodeRequest } from "../../models/requests/graphql/codeVerification";
import { ResetPasswordRequest } from "../../models/requests/graphql/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/graphql/resetPassword";
import { LoginRequest } from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import { Login } from "../../models/responses/axios/auth";
import { InputType } from "../../utils/inputTypes";
import { AuthAPI } from "../../services/api/axios/authApi";
import { log } from "../../utils/logger";
import { VerificationAPI } from "../../services/api/axios/verificationApi";
import { CancelCodeRequest, VerifyCodeRequest } from "../../models/requests/axios/verification";

export function* loginAsync(action: Action<LoginRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, password, inputType } = action.payload;
  let response: Response<Login> = {
    success: false,
    status: -1,
    response: null,
  };

  log(action.payload);

  try {
    if (inputType == InputType.Email) {
      log("login by email");
      response = yield AuthAPI.loginByEmail(email, password);
    } else if (inputType == InputType.Phone) {
      response = yield AuthAPI.loginByPhone(phone, password);
    }
  } catch (error) {
    error(error);
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
  const { email, phone, inputType } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield VerificationAPI.generateCodeRequestByEmail(email);
  } else if (inputType == InputType.Phone) {
    response = yield VerificationAPI.generateCodeRequestByPhone(phone);
  }

  if (response.success) {
    yield put(authActions.onGenerateCodeResponse(response));
    ToastAndroid.show("کد تایید با موفقیت برای شما ارسال شد", ToastAndroid.SHORT);
  } else {
    yield put(authActions.onGenerateCodeFail());
    ToastAndroid.show("ارسال کد تایید با خطا مواجه شد", ToastAndroid.SHORT);
  }
}

export function* verifyCodeAsync(action: Action<VerifyCodeRequest>) {
  const { email, phone, code, inputType, parentScreen, name, password } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  try {
    if (inputType == InputType.Email) {
      response = yield VerificationAPI.verifyCodeRequestByEmail(email, code);
    } else if (inputType == InputType.Phone) {
      response = yield VerificationAPI.verifyCodeRequestByPhone(phone, code);
    }
  } catch (error) {
    error(error);
  }

  if (response.success) {
    if (parentScreen == "AccountIdentification") {
    } else {
      yield put(authActions.onVerifyCodeResponse(response));
      yield put(authActions.onSignUpRequest(name, email, phone, password, inputType));
      ToastAndroid.show("کد واردشده تایید شد", ToastAndroid.SHORT);
    }
  } else {
    yield put(authActions.onVerifyCodeFail());
    ToastAndroid.show("کد واردشده معتبر نیست", ToastAndroid.SHORT);
  }
}

export function* cancelCodeAsync(action: Action<CancelCodeRequest>) {
  const { email, phone, inputType } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield VerificationAPI.cancelCodeRequestByEmail(email);
  } else if (inputType == InputType.Phone) {
    response = yield VerificationAPI.cancelCodeRequestByPhone(phone);
  }

  // try {
  //   if (inputType == InputType.Email) {
  //   } else if (inputType == InputType.Phone) {
  //   }
  // } catch (error) {
  //   log(error);
  // }

  if (response.success) {
    yield put(authActions.onCancelCodeResponse(response));
  } else {
    yield put(authActions.onCancelCodeResponse(response));
  }
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
