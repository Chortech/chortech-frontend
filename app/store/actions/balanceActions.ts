import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  GetFriendsBalanceRequest,
  GetFriendBalanceRequest,
} from "../../models/requests/axios/user";
import { FriendBalance } from "../../models/responses/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";

export function onGetFriendsBalanceRequest(token: Token): Action<GetFriendsBalanceRequest> {
  return {
    type: types.GET_FRIENDS_BALANCE_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetFriendsBalanceResponse(
  response: Response<FriendBalance[]>
): Action<Response<FriendBalance[]>> {
  return {
    type: types.GET_FRIENDS_BALANCE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetFriendsBalanceFail(): Action<Response<FriendBalance[]>> {
  return {
    type: types.GET_FRIENDS_BALANCE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetFriendBalanceRequest(
  token: Token,
  friendId: string,
  friendName: string
): Action<GetFriendBalanceRequest> {
  return {
    type: types.GET_FRIEND_BALANCE_REQUEST,
    payload: {
      token: token,
      friendId: friendId,
      friendName: friendName,
    },
  };
}

export function onGetFriendBalanceResponse(
  response: Response<FriendBalance>
): Action<Response<FriendBalance>> {
  return {
    type: types.GET_FRIEND_BALANCE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetFriendBalanceFail(): Action<Response<FriendBalance>> {
  return {
    type: types.GET_FRIEND_BALANCE_FAIL,
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
