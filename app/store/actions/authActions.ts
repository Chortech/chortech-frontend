import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";

export function requestLogin(
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<LoginRequest> {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email,
      phone,
      password,
      inputType,
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

export function loginFailed(): Action<LoginResponse> {
  return {
    type: types.LOGIN_FAILED,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function logOut(): Action<any> {
  return {
    type: types.LOG_OUT,
    payload: {},
  };
}

export function requestSignUp(
  name: string,
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<SignUpRequest> {
  return {
    type: types.SIGNUP_REQUEST,
    payload: {
      name,
      email,
      phone,
      password,
      inputType,
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
