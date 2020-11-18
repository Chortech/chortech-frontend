import { Action } from "../../models/actions/action";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { InputType } from "../../utils/inputTypes";
import * as types from "./types";

export function requestResetPassword(
  id: string,
  password: string
): Action<ResetPasswordRequest> {
  return {
    type: types.RESET_PASSWORD_REQUEST,
    payload: {
      id,
      password,
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

export function onResetPasswordFailed(): Action<ResetPasswordResponse> {
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
