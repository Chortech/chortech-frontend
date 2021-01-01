import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import {
  ChangeEmailOrPhoneRequest,
  ChangePasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  SignUpRequest,
} from "../../models/requests/axios/auth";
import {
  ChangeEmailOrPhone,
  ChangePassword,
  Login,
  SignUp,
} from "../../models/responses/axios/auth";
import { Response } from "../../models/responses/axios/response";
import {
  CancelCodeRequest,
  GenerateCodeRequest,
  VerifyCodeRequest,
} from "../../models/requests/axios/verification";
import { Token } from "../../models/other/axios/Token";

export function onLoginRequest(
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<LoginRequest> {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email: email,
      phone: phone,
      password: password,
      inputType: inputType,
    },
  };
}

export function onLoginResponse(response: Response<Login>): Action<Response<Login>> {
  return {
    type: types.LOGIN_RESPONSE,
    payload: response,
  };
}

export function onLoginFail(): Action<Response<Login>> {
  return {
    type: types.LOGIN_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onLogout(): Action<Response<Login>> {
  return {
    type: types.LOG_OUT,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onSignUpRequest(
  name: string,
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<SignUpRequest> {
  return {
    type: types.SIGNUP_REQUEST,
    payload: {
      name: name,
      email: email,
      phone: phone,
      password: password,
      inputType: inputType,
    },
  };
}

export function onSignUpResponse(response: Response<SignUp>): Action<Response<SignUp>> {
  return {
    type: types.SIGNUP_RESPONSE,
    payload: response,
  };
}

export function onSignUpFail(): Action<Response<SignUp>> {
  return {
    type: types.SIGNUP_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onResetPasswordRequest(
  email: string,
  phone: string,
  newPassword: string,
  inputType: InputType
): Action<ResetPasswordRequest> {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: {
      email: email,
      phone: phone,
      newPassword: newPassword,
      inputType: inputType,
    },
  };
}

export function onResetPasswordResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.RESET_PASSWORD_RESPONSE,
    payload: response,
  };
}

export function onResetPasswordFail(): Action<Response<null>> {
  return {
    type: types.RESET_PASSWORD_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onChangePasswordRequest(
  token: Token,
  email: string,
  phone: string,
  inputType: InputType,
  newPassword: string,
  oldPassword: string
): Action<ChangePasswordRequest> {
  return {
    type: types.CHANGE_PASSWORD_REQUEST,
    payload: {
      token: token,
      newpass: newPassword,
      oldpass: oldPassword,
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onChangePasswordResponse(
  response: Response<ChangePassword>
): Action<Response<ChangePassword>> {
  return {
    type: types.CHANGE_PASSWORD_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onChangePasswordFail(): Action<Response<ChangePassword>> {
  return {
    type: types.CHANGE_PASSWORD_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onChangeEmailOrPhoneRequest(
  token: Token,
  newEmail: string,
  newPhone: string,
  password: string,
  inputType: InputType
): Action<ChangeEmailOrPhoneRequest> {
  return {
    type: types.CHANGE_EMAIL_OR_PHONE_REQUEST,
    payload: {
      token: token,
      newEmail: newEmail,
      newPhone: newPhone,
      inputType: inputType,
      password: password,
    },
  };
}

export function onChangeEmailOrPhoneResponse(
  response: Response<ChangeEmailOrPhone>
): Action<Response<ChangeEmailOrPhone>> {
  return {
    type: types.CHANGE_EMAIL_OR_PHONE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onChangeEmailOrPhoneFail(): Action<Response<ChangeEmailOrPhone>> {
  return {
    type: types.CHANGE_EMAIL_OR_PHONE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onLoadingEnable(): Action<any> {
  return {
    type: types.LOADING_ENABLED,
    payload: {},
  };
}

export function onLoadingDisable(): Action<any> {
  return {
    type: types.LOADING_DISABLED,
    payload: {},
  };
}
