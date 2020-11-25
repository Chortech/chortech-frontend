import * as types from "./types";
import { Action } from "../../models/actions/action";
import { FriendsRequest } from "../../models/requests/getFriends";
import { FriendsResponse } from "../../models/responses/getFriends";
import { InputType } from "../../utils/inputTypes";
import { UserByFilterRequest } from "../../models/requests/userByFilter";

export function onUserFriendsRequest(userId: string): Action<FriendsRequest> {
  return {
    type: types.USER_FRIENDS_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onUserFriendsResponse(
  response: FriendsResponse
): Action<FriendsResponse> {
  return {
    type: types.USER_FRIENDS_RESPONSE,
    payload: {
      success: response.success,
      userId: response.userId,
      friends: response.friends,
    },
  };
}

export function onUserByFilterRequest(
  emailOrPhone: string,
  inputType: InputType
): Action<UserByFilterRequest> {
  return {
    type: types.USER_BY_FILTER_REQUEST,
    payload: {
      emailOrPhone: emailOrPhone,
      inputType: inputType,
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
