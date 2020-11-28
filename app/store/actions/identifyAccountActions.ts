import * as types from "./types";
import { Action } from "../../models/actions/action";
import { InputType } from "../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../models/responses/identifyAccount";
import { IdentifyAccountRequest } from "../../models/requests/identifyAccount";

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
