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

const initialState: IUserState = {
  loading: false,
  id: "-1",
  name: "",
  password: "",
  email: "",
  phone: "",
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
    return {
      ...state,
    };
  },
  [types.UPDATE_GROUP_REQUEST](
    state: IUserState,
    action: Action<UpdateGroupRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.DELETE_GTOUP_REQUEST](
    state: IUserState,
    action: Action<DeleteGroupRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.GET_GROUP_BY_ID](
    state: IUserState,
    action: Action<GetGroupByIdRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.GET_USER_GROUPS](
    state: IUserState,
    action: Action<GetUserGroupsRequest>
  ) {
    return {
      ...state,
    };
  },
});
