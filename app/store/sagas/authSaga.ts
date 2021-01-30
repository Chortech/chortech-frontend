import { call, put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { navigationRef } from "../../navigation/navigationService";
import * as authActions from "../actions/authActions";
import * as userActions from "../actions/userActions";
import * as groupActions from "../actions/groupActions";
import * as friendActions from "../actions/friendActions";
import * as expenseActions from "../actions/expenseActions";
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
import configureStore from "..";
import { IUserState } from "../../models/reducers/default";
import { log } from "../../utils/logger";
import messages from "../../assets/resources/messages";

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
    yield put(friendActions.onGetUserFriendsRequest(response.response!.token));
    yield put(expenseActions.onGetUserExpensesRequest(response.response!.token));
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.loginError, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.invalidInputInfo, ToastAndroid.SHORT);
    } else if (response.status == 401) {
      ToastAndroid.show(messages.wrongInputInfo, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
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

  if (response.success) {
    yield put(authActions.onSignUpResponse(response));
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.emailOrPhoneNotVerified, ToastAndroid.SHORT);
    } else if (response.status == 404) {
    } else if (response.status == 409) {
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(authActions.onLoadingDisable());
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
    response = yield AuthAPI.resetPasswordByPhone(phone, newPassword);
  }

  yield put(authActions.onLoadingDisable());

  if (response.success) {
    yield put(authActions.onResetPasswordResponse(response));
    ToastAndroid.show(messages.resetPasswordSuccess, ToastAndroid.SHORT);
    yield navigationRef.current?.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.invalidInputInfo, ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show(messages.changePasswordError, ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show(messages.invalidEmailOrPhone, ToastAndroid.SHORT);
    } else if (response.status == -4) {
      ToastAndroid.show(messages.emailOrPhoneNotVerified, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.invalidEmailOrPhone, ToastAndroid.SHORT);
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
      ToastAndroid.show(messages.emailEditedSuccess, ToastAndroid.SHORT);
    } else if (inputType == InputType.Phone) {
      ToastAndroid.show(messages.phoneEditedSuccess, ToastAndroid.SHORT);
    }
    yield navigationRef.current?.navigate("ProfileInfo");
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.emailOrPhoneNotVerified, ToastAndroid.SHORT);
    } else if (response.status == 401) {
      ToastAndroid.show(messages.invalidInputInfo, ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show(messages.emailOrPhoneNotVerified, ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show(messages.notAuthorized, ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show(messages.emailOrPhoneDuplicate, ToastAndroid.SHORT);
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
    ToastAndroid.show(messages.passwordEditedSuccess, ToastAndroid.SHORT);
    yield navigationRef.current?.navigate("ProfileInfo");
  } else {
    if (response.status == 401) {
      ToastAndroid.show(messages.emailOrPhoneNotVerified, ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show(messages.notAuthorized, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
}
