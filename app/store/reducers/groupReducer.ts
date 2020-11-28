import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";

import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";

import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/group";
import {
  AddGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
  UpdateGroupResponse,
} from "../../models/responses/group";
import { InputType } from "../../utils/inputTypes";

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

export const groupReducer = createReducer(initialState, {
  [types.ADD_GROUP_REQUEST](
    state: IUserState,
    action: Action<AddGroupRequest>
  ) {
    return state;
  },
  [types.ADD_GROUP_RESPONSE](
    state: IUserState,
    action: Action<AddGroupResponse>
  ) {
    return state;
  },
  [types.ADD_GROUP_FAIL](state: IUserState, action: Action<AddGroupResponse>) {
    return state;
  },
  [types.UPDATE_GROUP_REQUEST](
    state: IUserState,
    action: Action<UpdateGroupRequest>
  ) {
    return state;
  },
  [types.UPDATE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<UpdateGroupResponse>
  ) {
    return state;
  },
  [types.UPDATE_GROUP_FAIL](
    state: IUserState,
    action: Action<UpdateGroupResponse>
  ) {
    return state;
  },
  [types.DELETE_GROUP_REQUEST](
    state: IUserState,
    action: Action<DeleteGroupRequest>
  ) {
    return state;
  },
  [types.DELETE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<DeleteGroupResponse>
  ) {
    return state;
  },
  [types.DELETE_GROUP_FAIL](
    state: IUserState,
    action: Action<DeleteGroupResponse>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_REQUEST](
    state: IUserState,
    action: Action<GetGroupByIdRequest>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_RESPONSE](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_FAIL](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ) {
    return state;
  },
  [types.GET_USER_GROUPS_REQUEST](
    state: IUserState,
    action: Action<GetUserGroupsRequest>
  ) {
    return {
      ...state,
      userId: action.payload.userId,
    };
  },
  [types.GET_USER_GROUPS_RESPONSE](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_GROUPS_FAIL](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
});
