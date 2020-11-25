import { Action } from "../../models/actions/action";
import { FetchUserRequest } from "../../models/requests/getUser";
import { FetchUserResponse } from "../../models/responses/getUser";
import * as types from "./types";

export function fetchUserRequest(id: string): Action<FetchUserRequest> {
  return {
    type: types.FETCH_USER_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function fetchUserResponse(
  response: FetchUserResponse
): Action<FetchUserResponse> {
  return {
    type: types.FETCH_USER_RESPONSE,
    payload: {
      success: response.success,
      user: response.user,
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
