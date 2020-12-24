import { actionChannel, call, put, take } from "redux-saga/effects";
import { ToastAndroid } from "react-native";

import { Action } from "../../models/actions/action";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import { GenerateCodeRequest } from "../../models/requests/graphql/codeVerification";
import {
  LoginRequest,
  ResetPasswordRequest,
  SignUpRequest,
} from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import { Login, SignUp } from "../../models/responses/axios/auth";
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

  if (inputType == InputType.Email) {
    log("login by email");
    response = yield AuthAPI.loginByEmail(email, password);
  } else if (inputType == InputType.Phone) {
    response = yield AuthAPI.loginByPhone(phone, password);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onLoginResponse(response));
  } else {
    yield put(authActions.onLoginFail());
    if (response.status == -2) {
      ToastAndroid.show("درخواست ورود با خطا مواجه شد", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("اطلاعات واردشده نامعتبر است", ToastAndroid.SHORT);
    } else if (response.status == 401) {
      ToastAndroid.show("اطلاعات واردشده نادرست است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* signUpAsync(action: Action<SignUpRequest>) {
  yield put(authActions.onLoadingEnable());
  const { name, email, phone, password, inputType } = action.payload;
  let response: Response<SignUp> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield AuthAPI.signUpByEmail(name, email, password);
  } else if (inputType == InputType.Phone) {
    response = yield AuthAPI.signUpByPhone(name, phone, password);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onSignUpResponse(response));
  } else {
    yield put(authActions.onSignUpFail());
    if (response.status == -2) {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("ایمیل یا شماره تلفن شما تایید نشده‌است", ToastAndroid.SHORT);
    } else if (response.status == 404) {
    } else if (response.status == 409) {
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  const { email, phone, inputType } = action.payload;

  yield call(cancelCodeAsync, authActions.onCancelCodeRequest(email, phone, inputType));

  let response: Response<null> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield VerificationAPI.generateCodeRequestByEmail(email);
  } else if (inputType == InputType.Phone) {
    yield VerificationAPI.cancelCodeRequestByPhone(phone);
    response = yield VerificationAPI.generateCodeRequestByPhone(phone);
  }

  if (response.success) {
    yield put(authActions.onGenerateCodeResponse(response));
    ToastAndroid.show("کد تایید با موفقیت برای شما ارسال شد", ToastAndroid.SHORT);
  } else {
    yield put(authActions.onGenerateCodeFail());
    if (response.status == 400) {
      ToastAndroid.show("ارسال کد تایید با خطا مواجه شد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* verifyCodeAsync(action: Action<VerifyCodeRequest>) {
  const { email, phone, code, inputType, parentScreen, name, password } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield VerificationAPI.verifyCodeRequestByEmail(email, code);
  } else if (inputType == InputType.Phone) {
    response = yield VerificationAPI.verifyCodeRequestByPhone(phone, code);
  }

  if (response.success) {
    yield put(authActions.onVerifyCodeResponse(response));
    if (parentScreen == "AccountIdentification") {
      navigationRef.current?.navigate("ResetPassword", {
        email: email,
        phone: phone,
        inputType: inputType,
      });
    } else {
      yield put(authActions.onSignUpRequest(name, email, phone, password, inputType));
    }
  } else {
    yield put(authActions.onVerifyCodeFail());
    if (response.status == -3) {
      ToastAndroid.show("کد واردشده اشتباه است", ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show("خطایی ناشناخته در تایید کد رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("کد واردشده معتبر نیست", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
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

  if (response.success) {
    yield put(authActions.onCancelCodeResponse(response));
  } else {
    yield put(authActions.onCancelCodeFail());
  }
}

export function* resetPasswordAsync(action: Action<ResetPasswordRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, newPassword, inputType } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield AuthAPI.resetPasswordByEmail(email, newPassword);
  } else if (inputType == InputType.Phone) {
    response = yield AuthAPI.resetPasswordByEmail(phone, newPassword);
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
    if (response.status == 400) {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده نامعتبر است", ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show("تغییر رمز عبور با خطا مواجه شده‌است", ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده نامعتبر است", ToastAndroid.SHORT);
    } else if (response.status == -4) {
      ToastAndroid.show("ایمیل یا شماره موبایل وارد شده تایید نشده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده نامعتبر است", ToastAndroid.SHORT);
    }
  }
}
