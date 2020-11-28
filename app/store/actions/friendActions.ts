import * as types from "./types";
import { Action } from "../../models/actions/action";
import {
  AddFriendRequest,
  DeleteFriendRequest,
} from "../../models/requests/friend";
import { GetUserFriendsRequest } from "../../models/requests/user";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../models/responses/friend";
import { GetUserFriendsResponse } from "../../models/responses/user";

export function onGetUserFriendsRequest(
  userId: string
): Action<GetUserFriendsRequest> {
  return {
    type: types.GET_USER_FRIENDS_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onGetUserFriendsResponse(
  response: GetUserFriendsResponse
): Action<GetUserFriendsResponse> {
  return {
    type: types.GET_USER_FRIENDS_RESPONSE,
    payload: {
      success: response.success,
      userId: response.userId,
      friends: response.friends,
    },
  };
}

export function onGetUserFriendsFail(): Action<GetUserFriendsResponse> {
  return {
    type: types.GET_USER_FRIENDS_FAIL,
    payload: {
      success: false,
      userId: "-1",
      friends: [],
    },
  };
}

export function onAddFriendRequest(
  userId: string,
  friendId: string,
  friendName: string
): Action<AddFriendRequest> {
  return {
    type: types.ADD_FRIEND_REQUEST,
    payload: {
      userId: userId,
      friendId: friendId,
      friendName: friendName,
    },
  };
}

export function onAddFriendResponse(
  response: AddFriendResponse
): Action<AddFriendResponse> {
  return {
    type: types.ADD_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      friend: response.friend,
    },
  };
}

export function onAddFriendFail(): Action<AddFriendResponse> {
  return {
    type: types.ADD_FRIEND_FAIL,
    payload: {
      success: false,
      friend: {
        id: "-1",
        friendId: "-1",
        friendName: "",
      },
    },
  };
}

export function onDeleteFriendRequest(id: string): Action<DeleteFriendRequest> {
  return {
    type: types.DELETE_USER_FRIEND_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteFriendResponse(
  response: DeleteFriendResponse
): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_USER_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
    },
  };
}

export function onDeleteFriendFail(): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_USER_FRIEND_FAIL,
    payload: {
      success: false,
      id: "-1",
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
