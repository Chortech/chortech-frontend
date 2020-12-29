import { call, put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";

import { Action } from "../../models/actions/action";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import * as userActions from "../actions/userActions";
import {
  ChangeEmailOrPhoneRequest,
  ChangePasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  SignUpRequest,
} from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import {
  ChangeEmailOrPhone,
  ChangePassword,
  Login,
  SignUp,
} from "../../models/responses/axios/auth";
import { InputType } from "../../utils/inputTypes";
import { AuthenticationApi, AuthAPI } from "../../services/api/axios/authApi";
import { log } from "../../utils/logger";
import { VerificationAPI } from "../../services/api/axios/verificationApi";
import {
  CancelCodeRequest,
  GenerateCodeRequest,
  VerifyCodeRequest,
} from "../../models/requests/axios/verification";
import configureStore from "..";
import { IUserState } from "../../models/reducers/default";

export function* loginAsync(action: Action<LoginRequest>) {
  yield put(authActions.onLoadingEnable());
  const { email, phone, password, inputType } = action.payload;
  let response: Response<Login> = {
    success: false,
    status: -1,
  };

  if (inputType == InputType.Email) {
    response = yield AuthAPI.loginByEmail(email, password);
  } else if (inputType == InputType.Phone) {
    response = yield AuthAPI.loginByPhone(phone, password);
  }

  if (response.success) {
    yield put(authActions.onLoginResponse(response));
    yield put(userActions.onGetUserProfileRequest(response.response!.token));
    yield put(userActions.onGetUserFriendsRequest(response.response!.token));
    yield put(userActions.onGetUserActivitiesRequest(response.response!.token));
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
  yield put(authActions.onLoadingDisable());
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
  yield put(authActions.onLoadingEnable());
  const { token, name, email, phone, password, inputType, parentScreen } = action.payload;

  yield call(cancelCodeAsync, authActions.onCancelCodeRequest(email, phone, inputType));

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
    if (response.status == -2) {
      ToastAndroid.show("خطای ناشناخته در سیستم رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show("اطلاعات کاربر تایید شده‌است", ToastAndroid.SHORT);
      if (parentScreen == "AccountIdentification") {
        navigationRef.current?.navigate("ResetPassword", {
          email: email,
          phone: phone,
          inputType: inputType,
          parentScreen: parentScreen,
        });
      } else if (parentScreen == "EditProfile") {
        yield put(
          authActions.onChangeEmailOrPhoneRequest(token!, email, phone, password!, inputType)
        );
      } else {
        yield put(authActions.onSignUpRequest(name!, email, phone, password!, inputType));
      }
    } else if (response.status == 400) {
      ToastAndroid.show("ارسال کد تایید با خطا مواجه شد", ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show("اطلاعات کاربر تایید شده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  yield put(authActions.onLoadingDisable());
}

export function* verifyCodeAsync(action: Action<VerifyCodeRequest>) {
  const { token, email, phone, code, inputType, parentScreen, name, password } = action.payload;
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
        parentScreen: parentScreen,
      });
    } else if (parentScreen == "EditProfile") {
      yield put(authActions.onChangeEmailOrPhoneRequest(token!, email, phone, password, inputType));
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

export function* changePasswordAsync(action: Action<ChangePasswordRequest>) {
  const { token, newpass, oldpass, email, phone, inputType } = action.payload;
  let response: Response<ChangePassword> = {
    success: false,
    status: -1,
  };

  let api: AuthenticationApi = new AuthenticationApi(token);
  response = yield api.changePassword(oldpass, newpass);

  if (response.success) {
    yield put(authActions.onChangePasswordResponse(response));
    ToastAndroid.show("رمز عبور با موفقیت ویرایش شد", ToastAndroid.SHORT);
  } else {
    yield put(authActions.onChangePasswordFail());
    if (response.status == 401) {
      ToastAndroid.show("ایمیل یا شماره موبایل شما تایید نشده است", ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show("شما اجازه دسترسی به این منبع را ندارید", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* changeEmailOrPhoneAsync(action: Action<ChangeEmailOrPhoneRequest>) {
  const { token, newEmail, newPhone, inputType, password } = action.payload;
  const state: IUserState = configureStore().store.getState()["authReducer"];

  let response: Response<ChangeEmailOrPhone> = {
    success: false,
    status: -1,
  };

  let api: AuthenticationApi = new AuthenticationApi(token);
  if (inputType == InputType.Email) {
    response = yield api.changeEmail(newEmail);
  } else if (inputType == InputType.Phone) {
    response = yield api.changePhone(newPhone);
  }

  if (response.success) {
    yield put(authActions.onChangeEmailOrPhoneResponse(response));
    if (inputType == InputType.Email) {
      ToastAndroid.show("ایمیل شما با موفقیت ویرایش شد", ToastAndroid.SHORT);
    } else if (inputType == InputType.Phone) {
      ToastAndroid.show("شماره موبایل شما با موفقیت ویرایش شد", ToastAndroid.SHORT);
    }
    yield navigationRef.current?.goBack();
  } else {
    yield put(authActions.onChangeEmailOrPhoneFail());
    if (response.status == -2) {
      ToastAndroid.show("خطای ناشناخته در سیستم رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("ایمیل یا شماره موبایل شما تایید نشده‌است", ToastAndroid.SHORT);
    } else if (response.status == 401) {
      ToastAndroid.show("اطلاعات داده‌شده نامعتبر است", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("ایمیل یا شماره موبایل شما تایید نشده است", ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show("اجازه دسترسی به سرور قطع شده‌است", ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show("ایمیل یا شماره موبایل وارد شده تکراری است", ToastAndroid.SHORT);
    }
  }
}
