import * as types from "./types";
import { Action } from "../../models/actions/action";

import { AddGroupRequest, UpdateGroupRequest, DeleteGroupRequest } from "../../models/requests/group";

export function addGroup(
    name: string,
    creator: string,
    members: Array<string>,
): Action<AddGroupRequest> {
  return {
    type: types.ADD_GROUP_REQUEST,
    payload: {
        name,
        creator,
        members,
    },
  };
}

export function updateGroup(
  groupId: string,
  name: string,
  creator: string,
  members: Array<string>,
  ): Action<UpdateGroupRequest> {
    return {
      type: types.UPDATE_GROUP_REQUEST,
      payload: {
        groupId,
        name,
        creator,
        members,
      },
    };
  }

export function deleteGroup(
  groupId: string,
  name: string,
): Action<DeleteGroupRequest> {
return {
  type: types.DELETE_GTOUP_REQUEST,
  payload: {
    groupId,
  },
};
}