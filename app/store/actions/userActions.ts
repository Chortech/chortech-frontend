import { Action } from "../../models/actions/action";
import { User } from "../../models/other/User";
import { FetchUserRequest } from "../../models/requests/getUser";
import { UpdateUserRequest } from "../../models/requests/updateUser";
import { FetchUserResponse } from "../../models/responses/getUser";
import { UpdateUserResponse } from "../../models/responses/updateUser";
import * as types from "./types";

export function onFetchUserRequest(id: string): Action<FetchUserRequest> {
  return {
    type: types.FETCH_USER_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onFetchUserResponse(
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

export function onUpdateUserRequest(user: User): Action<UpdateUserRequest> {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload: {
      user: user,
    },
  };
}

export function onUpdateUserResponse(
  response: UpdateUserResponse
): Action<UpdateUserResponse> {
  return {
    type: types.UPDATE_USER_RESPONSE,
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
