import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  GetFriendsBalanceRequest,
  GetFriendBalanceRequest,
  GetGroupsBalancesRequest,
  GetGroupMembersBalancesRequest,
} from "../../models/requests/axios/user";
import { FriendBalance, GroupMembersBalances } from "../../models/responses/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";
import { GroupBalance } from "../../models/other/axios/Balance";

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

export function onGetFriendBalanceRequest(
  token: Token,
  friendId: string,
  friendName: string,
  balance: number
): Action<GetFriendBalanceRequest> {
  return {
    type: types.GET_FRIEND_BALANCE_REQUEST,
    payload: {
      token: token,
      friendId: friendId,
      friendName: friendName,
      balance: balance,
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

export function onGetGroupsBalancesRequest(token: Token): Action<GetGroupsBalancesRequest> {
  return {
    type: types.GET_GROUPS_BALANCES_REQUEST,
    payload: { token: token },
  };
}

export function onGetGroupsBalanceResponse(
  response: Response<GroupBalance[]>
): Action<Response<GroupBalance[]>> {
  return {
    type: types.GET_GROUPS_BALANCES_RESPONSE,
    payload: response,
  };
}

export function onGetGroupMembersBalancesRequest(
  token: Token,
  groupId: string
): Action<GetGroupMembersBalancesRequest> {
  return {
    type: types.GET_GROUP_MEMBERS_BALANCES_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
    },
  };
}

export function onGetGroupMembersBalancesResponse(
  response: Response<GroupMembersBalances>
): Action<Response<GroupMembersBalances>> {
  return {
    type: types.GET_GROUP_MEMBERS_BALANCES_RESPONSE,
    payload: response,
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
