import * as types from "./types";
import { Action } from "../../models/actions/action";
import { GetUserGroupsResponse } from "../../models/responses/group";

import { AddGroupRequest, UpdateGroupRequest, DeleteGroupRequest, GetGroupByIdRequest, GetUserGroupsRequest } from "../../models/requests/group";

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
  ): Action<DeleteGroupRequest> {
  return {
    type: types.DELETE_GTOUP_REQUEST,
    payload: {
      groupId,
    },
  };
  }

export function getGroupById(
  groupId: string,
): Action<GetGroupByIdRequest> {
return {
  type: types.GET_GROUP_BY_ID,
  payload: {
    groupId,
  },
};
}

export function getUserGroupsRequest(
  userId: string
): Action<GetUserGroupsRequest> {
return {
  type: types.GET_USER_GROUPS_REQUEST,
  payload: {
    userId: userId,
  },
};
}

export function getUserGroupsResponse(
  response: GetUserGroupsResponse,
): Action<GetUserGroupsResponse> {
return {
  type: types.GET_USER_GROUPS_RESPONSE,
  payload: {
    userId: response.userId,
    success: response.success,
    groups: response.groups,
  },
};
}