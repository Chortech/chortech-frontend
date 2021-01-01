import { Response } from "../../models/responses/axios/response";
import * as types from "./types";
import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  GenerateCodeRequest,
  VerifyCodeRequest,
  CancelCodeRequest,
} from "../../models/requests/axios/verification";
import { InputType } from "../../utils/inputTypes";

export function onGenerateCodeRequest(
  email: string,
  phone: string,
  inputType: InputType,
  parentScreen: string,
  name?: string,
  password?: string,
  token?: Token
): Action<GenerateCodeRequest> {
  return {
    type: types.GENERATE_CODE_REQUEST,
    payload: {
      email: email,
      phone: phone,
      inputType: inputType,
      parentScreen: parentScreen,
      name: name,
      password: password,
      token: token,
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
  parentScreen: string,
  token?: Token
): Action<VerifyCodeRequest> {
  return {
    type: types.VERIFY_CODE_REQUEST,
    payload: {
      token: token,
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
    type: types.CANCEL_CODE_REQUEST,
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
