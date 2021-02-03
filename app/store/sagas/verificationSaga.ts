import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  GenerateCodeRequest,
  VerifyCodeRequest,
  CancelCodeRequest,
} from "../../models/requests/axios/verification";
import { Response } from "../../models/responses/axios/response";
import { navigationRef } from "../../navigation/navigationService";
import { VerificationAPI } from "../../services/api/axios/verificationApi";
import { InputType } from "../../utils/inputTypes";
import * as verificationActions from "../actions/verificationActions";
import * as authActions from "../actions/authActions";
import messages from "../../assets/resources/messages";

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  yield put(verificationActions.onLoadingEnable());
  const { token, name, email, phone, password, inputType, parentScreen } = action.payload;

  yield call(cancelCodeAsync, verificationActions.onCancelCodeRequest(email, phone, inputType));

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
    yield put(verificationActions.onGenerateCodeResponse(response));
    ToastAndroid.show(messages.codeSentSuccess, ToastAndroid.SHORT);
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show(messages.userVerified, ToastAndroid.SHORT);
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
      ToastAndroid.show(messages.codeError, ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show(messages.userVerified, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(verificationActions.onLoadingDisable());
}

export function* verifyCodeAsync(action: Action<VerifyCodeRequest>) {
  yield put(verificationActions.onLoadingEnable());
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
    yield put(verificationActions.onVerifyCodeResponse(response));
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
    if (response.status == -3) {
      ToastAndroid.show(messages.wrongCode, ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.wrongCode, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(verificationActions.onLoadingDisable());
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
    yield put(verificationActions.onCancelCodeResponse(response));
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}
