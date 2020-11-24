import * as types from "./types";
import { Action } from "../../models/actions/action";
import { FriendsRequest } from "../../models/requests/getFriends";

export function GetUserFriends(userId: string): Action<FriendsRequest> {
  return {
    type: types.USER_FRIENDS_REQUEST,
    payload: {
      userId: userId,
    },
  };
}
