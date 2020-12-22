import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import { SignUpRequest } from "../../models/requests/graphql/signUp";
import { SignUpResponse } from "../../models/responses/graphql/signUp";
import { IdentifyAccountRequest } from "../../models/requests/graphql/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/graphql/identifyAccount";
import { ResetPasswordRequest } from "../../models/requests/graphql/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/graphql/resetPassword";
import { LoginRequest } from "../../models/requests/axios/auth";
import { Login } from "../../models/responses/axios/auth";
import { Response } from "../../models/responses/axios/response";
import {
  CancelCodeRequest,
  GenerateCodeRequest,
  VerifyCodeRequest,
} from "../../models/requests/axios/verification";

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

export function onSignUpResponse(response: SignUpResponse): Action<SignUpResponse> {
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

export function onGenerateCodeResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.GENERATE_CODE_RESPONSE,
    payload: response,
  };
}

export function onGenerateCodeFail(): Action<Response<null>> {
  return {
    type: types.GENERATE_CODE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onVerifyCodeRequest(
  name: string,
  email: string,
  phone: string,
  password: string,
  inputType: InputType,
  code: string,
  parentScreen: string
): Action<VerifyCodeRequest> {
  return {
    type: types.VERIFY_CODE_REQUEST,
    payload: {
      name: name,
      email: email,
      phone: phone,
      code: code,
      password: password,
      inputType: inputType,
      parentScreen: parentScreen,
    },
  };
}

export function onVerifyCodeResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.VERIFY_CODE_RESPONSE,
    payload: response,
  };
}

export function onVerifyCodeFail(): Action<Response<null>> {
  return {
    type: types.VERIFY_CODE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onCancelCodeRequest(
  email: string,
  phone: string,
  inputType: InputType
): Action<CancelCodeRequest> {
  return {
    type: types.CANCE_CODE_REQUEST,
    payload: {
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onCancelCodeResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.CANCEL_CODE_RESPONSE,
    payload: response,
  };
}

export function onCancelCodeFail(): Action<Response<null>> {
  return {
    type: types.CANCEL_CODE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onResetPasswordRequest(id: string, password: string): Action<ResetPasswordRequest> {
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
