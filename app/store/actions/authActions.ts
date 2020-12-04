import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { IdentifyAccountRequest } from "../../models/requests/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/identifyAccount";
import { GenerateCodeRequest } from "../../models/requests/codeVerification";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";

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

export function onLoginResponse(
  response: LoginResponse
): Action<LoginResponse> {
  return {
    type: types.LOGIN_RESPONSE,
    payload: response,
  };
}

export function onLoginFail(): Action<LoginResponse> {
  return {
    type: types.LOGIN_FAIL,
    payload: {
      success: false,
      user: null,
    },
  };
}

export function onLogout(): Action<LoginResponse> {
  return {
    type: types.LOG_OUT,
    payload: {
      success: false,
      user: null,
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

export function onSignUpResponse(
  response: SignUpResponse
): Action<SignUpResponse> {
  return {
    type: types.SIGNUP_RESPONSE,
    payload: response,
  };
}

export function onSignUpFail(): Action<SignUpResponse> {
  return {
    type: types.SIGNUP_FAIL,
    payload: {
      user: null,
      success: false,
    },
  };
}

export function onIdentifyAccountRequest(
  email: string,
  phone: string,
  inputType: InputType
): Action<IdentifyAccountRequest> {
  return {
    type: types.IDENTIFY_ACCOUNT_REQUEST,
    payload: {
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onIdentifyAccountResponse(
  response: IdentifyAccountResponse
): Action<IdentifyAccountResponse> {
  return {
    type: types.IDENTIFY_ACCOUNT_RESPONSE,
    payload: response,
  };
}

export function onIdentifyAccountFail(): Action<IdentifyAccountResponse> {
  return {
    type: types.IDENTIFY_ACCOUNT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onGenerateCodeRequest(
  email: string,
  phone: string,
  inputType: InputType
): Action<GenerateCodeRequest> {
  return {
    type: types.GENERATE_CODE_REQUEST,
    payload: {
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onResetPasswordRequest(
  id: string,
  password: string
): Action<ResetPasswordRequest> {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: {
      id: id,
      password: password,
    },
  };
}

export function onResetPasswordResponse(
  response: ResetPasswordResponse
): Action<ResetPasswordResponse> {
  return {
    type: types.RESET_PASSWORD_RESPONSE,
    payload: response,
  };
}

export function onResetPasswordFail(): Action<ResetPasswordResponse> {
  return {
    type: types.RESET_PASSWORD_FAIL,
    payload: {
      id: "-1",
      success: false,
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
