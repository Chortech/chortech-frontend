import * as types from "./types";
import { Action } from "../../models/actions/action";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { InputType } from "../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { IdentifyAccountRequest } from "../../models/requests/identify";

export function requestIdentifyAccount(
  email: string,
  phone: string,
  inputType: InputType
): Action<IdentifyAccountRequest> {
  return {
    type: types.IDENTIFY_REQUEST,
    payload: {
      email,
      phone,
      inputType: inputType,
    },
  };
}

export function onIdentifyAccountResponse(
  response: IdentifyAccountResponse
): Action<IdentifyAccountResponse> {
  return {
    type: types.IDENTIFY_RESPONSE,
    payload: response,
  };
}

export function onIdentifyAccountFail(): Action<IdentifyAccountResponse> {
  return {
    type: types.IDENTIFY_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}
