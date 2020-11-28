import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  AddFriendRequest,
  DeleteFriendRequest,
} from "../../models/requests/friend";
import { GetUserGroupsRequest } from "../../models/requests/group";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../models/responses/friend";
import { GetUserFriendsResponse } from "../../models/responses/user";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

const initialState: IUserState = {
  isLoggedIn: true,
  loading: false,
  id: "-1",
  name: "",
  password: "",
  email: "",
  phone: "",
  authInputType: InputType.None,
  credit: 0,
  balance: 0,
  friends: [],
  groups: [],
  activities: [],
};

export const friendReducer = createReducer(initialState, {
  [types.GET_USER_FRIENDS_REQUEST](
    state: IUserState,
    action: Action<GetUserGroupsRequest>
  ) {
    return {
      ...state,
      id: action.payload.userId,
    };
  },
  [types.GET_USER_FRIENDS_RESPONSE](
    state: IUserState,
    action: Action<GetUserFriendsResponse>
  ) {
    return {
      ...state,
      friends: action.payload.friends,
    };
  },
  [types.GET_USER_FRIENDS_FAIL](
    state: IUserState,
    action: Action<GetUserFriendsResponse>
  ) {
    return {
      ...state,
      friends: action.payload.friends,
    };
  },
  [types.ADD_FRIEND_REQUEST](
    state: IUserState,
    action: Action<AddFriendRequest>
  ) {
    return state;
  },
  [types.ADD_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<AddFriendResponse>
  ) {
    return state;
  },
  [types.ADD_FRIEND_FAIL](
    state: IUserState,
    action: Action<AddFriendResponse>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_REQUEST](
    state: IUserState,
    action: Action<DeleteFriendRequest>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<DeleteFriendResponse>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_FAIL](
    state: IUserState,
    action: Action<DeleteFriendResponse>
  ) {
    return state;
  },
  [types.LOADING_ENABLED](state: IUserState, action: Action<any>) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOADING_DISABLED](state: IUserState, action: Action<any>) {
    return {
      ...state,
      loading: false,
    };
  },
});
