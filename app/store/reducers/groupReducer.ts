import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";

import { Action } from "../../models/actions/action";
import { IDefaultState } from "../../models/reducers/default";

import { AddGroupRequest, UpdateGroupRequest, DeleteGroupRequest } from "../../models/requests/group";


const initialState: IDefaultState = {
  loading: false,
  isLoggedIn: true,
  id: "",
  name: "",
};

export const groupReducer = createReducer(initialState, {
  [types.ADD_GROUP_REQUEST](state: IDefaultState, action: Action<AddGroupRequest>) {
    return {
      ...state,
      name: action.payload.name,
      creator: action.payload.creator,
      members: action.payload.members,
    };
  },
  [types.UPDATE_GROUP_REQUEST](state: IDefaultState, action: Action<UpdateGroupRequest>) {
    return {
      ...state,
      groupId: action.payload.groupId,
      name: action.payload.name,
      creator: action.payload.creator,
      members: action.payload.members,
    };
  },
  [types.DELETE_GTOUP_REQUEST](state: IDefaultState, action: Action<DeleteGroupRequest>) {
    return {
      ...state,
      groupId: action.payload.groupId,
    };
  },
});