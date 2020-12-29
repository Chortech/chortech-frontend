import { Action } from "../../models/actions/action";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/graphql/group";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/graphql/group";
import * as types from "./types";

export function onAddGroupRequest(
  name: string,
  creatorId: string,
  membersIds: Array<string>
): Action<AddGroupRequest> {
  return {
    type: types.ADD_GROUP_REQUEST,
    payload: {
      name: name,
      creator: creatorId,
      members: membersIds,
    },
  };
}

export function onAddGroupResponse(response: AddGroupResponse): Action<AddGroupResponse> {
  return {
    type: types.ADD_GROUP_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
    },
  };
}

export function onAddGroupFail(): Action<AddGroupResponse> {
  return {
    type: types.ADD_GROUP_FAIL,
    payload: {
      success: false,
      id: "-1",
    },
  };
}

export function onUpdateGroupRequest(
  groupId: string,
  name: string,
  creator: string,
  members: Array<string>
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

export function onUpdateGroupResponse(response: UpdateGroupResponse): Action<UpdateGroupResponse> {
  return {
    type: types.UPDATE_GROUP_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
    },
  };
}

export function onUpdateGroupFail(): Action<UpdateGroupResponse> {
  return {
    type: types.UPDATE_GROUP_FAIL,
    payload: {
      success: false,
      id: "-1",
    },
  };
}

export function onDeleteGroupRequest(groupId: string): Action<DeleteGroupRequest> {
  return {
    type: types.DELETE_GROUP_REQUEST,
    payload: {
      groupId: groupId,
    },
  };
}

export function onDeleteGroupResponse(response: DeleteGroupResponse): Action<DeleteGroupResponse> {
  return {
    type: types.DELETE_GROUP_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
    },
  };
}

export function onDeleteGroupFail(): Action<DeleteGroupResponse> {
  return {
    type: types.DELETE_GROUP_FAIL,
    payload: {
      success: false,
      id: "-1",
    },
  };
}

export function onGetGroupByIdRequest(groupId: string): Action<GetGroupByIdRequest> {
  return {
    type: types.GET_GROUP_BY_ID_REQUEST,
    payload: {
      groupId,
    },
  };
}

export function onGetGroupByIdResponse(
  response: GetGroupByIdResponse
): Action<GetGroupByIdResponse> {
  return {
    type: types.GET_GROUP_BY_ID_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
      group: response.group,
    },
  };
}

export function onGetGroupByIdFail(): Action<GetGroupByIdResponse> {
  return {
    type: types.GET_GROUP_BY_ID_FAIL,
    payload: {
      success: false,
      id: "-1",
      group: {
        id: "-1",
        name: "",
        creatorId: "-1",
        membersIds: [],
        activitiesIds: [],
      },
    },
  };
}

export function onGetUserGroupsRequest(userId: string): Action<GetUserGroupsRequest> {
  return {
    type: types.GET_USER_GROUPS_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onGetUserGroupsResponse(
  response: GetUserGroupsResponse
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

export function onGetUserGroupsFail(): Action<GetUserGroupsResponse> {
  return {
    type: types.GET_USER_GROUPS_FAIL,
    payload: {
      success: false,
      userId: "-1",
      groups: [],
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
