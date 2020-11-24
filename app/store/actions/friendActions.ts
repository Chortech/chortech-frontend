import * as types from "./types";
import { Action } from "../../models/actions/action";
import { FriendsRequest } from "../../models/requests/getFriends";
import { FriendsResponse } from "../../models/responses/getFriends";

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
      relationId: response.relationId,
      userId: response.userId,
      friends: response.friends,
    },
  };
}
