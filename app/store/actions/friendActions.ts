import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  GetUserFriendsRequest,
  AddFriendRequest,
  DeleteFriendRequest,
  InviteFriendsRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { GetUserFriends, AddFriend, DeleteFriend } from "../../models/responses/axios/user";
import { InputType } from "../../utils/inputTypes";
import * as types from "./types";

export function onGetUserFriendsRequest(token: Token): Action<GetUserFriendsRequest> {
  return {
    type: types.GET_USER_FRIENDS_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserFriendsResponse(
  response: Response<GetUserFriends>
): Action<Response<GetUserFriends>> {
  return {
    type: types.GET_USER_FRIENDS_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetUserFriendsFail(): Action<Response<GetUserFriends>> {
  return {
    type: types.GET_USER_FRIENDS_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onAddFriendRequest(
  token: Token,
  email: string,
  phone: string,
  inputType: InputType
): Action<AddFriendRequest> {
  return {
    type: types.ADD_FRIEND_REQUEST,
    payload: {
      token: token,
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onAddFriendResponse(response: Response<AddFriend>): Action<Response<AddFriend>> {
  return {
    type: types.ADD_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddFriendFail(): Action<Response<AddFriend>> {
  return {
    type: types.ADD_FRIEND_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onDeleteFriendRequest(token: Token, id: string): Action<DeleteFriendRequest> {
  return {
    type: types.DELETE_USER_FRIEND_REQUEST,
    payload: {
      id: id,
      token: token,
    },
  };
}

export function onDeleteFriendResponse(
  response: Response<DeleteFriend>
): Action<Response<DeleteFriend>> {
  return {
    type: types.DELETE_USER_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onDeleteFriendFail(): Action<Response<DeleteFriend>> {
  return {
    type: types.DELETE_USER_FRIEND_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onInviteFriendRequest(
  token: Token,
  email: string,
  phone: string,
  inputType: InputType
): Action<InviteFriendsRequest> {
  return {
    type: types.INVITE_FRIEND_REQUEST,
    payload: {
      token: token,
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onInviteFriendResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.INVITE_FRIEND_RESPONSE,
    payload: response,
  };
}

export function onInviteFriendFail(): Action<Response<null>> {
  return {
    type: types.INVITE_FRIEND_FAIL,
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
