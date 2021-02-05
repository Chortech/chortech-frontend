import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import * as types from "./types";
import { Group } from "../../models/other/axios/Group";
import { Response } from "../../models/responses/axios/response";
import {
  GetUserGroupsRequest,
  GetGroupInfoRequest,
  AddGroupRequest,
  EditGroupRequest,
  DeleteGroupRequest,
  AddFriendToGroupRequest,
  LeaveGroupRequest,
  RemoveMemberRequest,
} from "../../models/requests/axios/user";
import { RemoveGroupMember } from "../../models/responses/axios/user";
import {UploadImageRequest} from "../../models/requests/axios/user";
import { UploadImage } from "../../models/responses/axios/user";

export function onGetUserGroupsRequest(token: Token): Action<GetUserGroupsRequest> {
  return {
    type: types.GET_USER_GROUPS_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserGroupsResponse(response: Response<Group[]>): Action<Response<Group[]>> {
  return {
    type: types.GET_USER_GROUPS_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetGroupInfoRequest(token: Token, groupId: string): Action<GetGroupInfoRequest> {
  return {
    type: types.GET_GROUP_INFO_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
    },
  };
}

export function onGetGroupInfoResponse(response: Response<Group>): Action<Response<Group>> {
  return {
    type: types.GET_GROUP_INFO_RESPONSE,
    payload: response,
  };
}

export function onAddGroupRequest(
  token: Token,
  name: string,
  picture?: string
): Action<AddGroupRequest> {
  return {
    type: types.ADD_GROUP_REQUEST,
    payload: {
      token,
      name,
      picture,
    },
  };
}

export function onAddGroupResponse(response: Response<Group>): Action<Response<Group>> {
  return {
    type: types.ADD_GROUP_RESPONSE,
    payload: response,
  };
}

export function onEditGroupRequest(
  token: Token,
  groupId: string,
  name: string,
  picture?: string
): Action<EditGroupRequest> {
  return {
    type: types.EDIT_GROUP_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
      name: name,
      picture: picture,
    },
  };
}

export function onEditGroupResponse(response: Response<Group>): Action<Response<Group>> {
  return {
    type: types.EDIT_GROUP_RESPONSE,
    payload: response,
  };
}

export function onDeleteGroupRequest(token: Token, groupId: string): Action<DeleteGroupRequest> {
  return {
    type: types.DELETE_GROUP_REQUEST,
    payload: {
      groupId: groupId,
      token: token,
    },
  };
}

export function onDeleteGroupResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.DELETE_GROUP_RESPONSE,
    payload: response,
  };
}

export function onAddFriendToGroupRequest(
  token: Token,
  groupId: string,
  members: string[]
): Action<AddFriendToGroupRequest> {
  return {
    type: types.ADD_FRIEND_TO_GROUP_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
      members: members,
    },
  };
}

export function onAddFriendToGroupResponse(response: Response<Group>): Action<Response<Group>> {
  return {
    type: types.ADD_FRIEND_TO_GROUP_RESPONSE,
    payload: response,
  };
}

export function onLeaveGroupRequest(token: Token, groupId: string): Action<LeaveGroupRequest> {
  return {
    type: types.LEAVE_GROUP_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
    },
  };
}

export function onLeaveGroupResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.LEAVE_GROUP_RESPONSE,
    payload: response,
  };
}

export function onRemoveMemberRequest(
  token: Token,
  groupId: string,
  memberId: string
): Action<RemoveMemberRequest> {
  return {
    type: types.REMOVE_MEMBER_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
      memberId: memberId,
    },
  };
}

export function onRemoveMemberResponse(
  response: Response<RemoveGroupMember>
): Action<Response<RemoveGroupMember>> {
  return {
    type: types.REMOVE_MEMBER_RESPONSE,
    payload: response,
  };
}

export function onUploadImageRequest(token: Token, response): Action<UploadImageRequest> {
  return {
    type: types.GROUP_UPLOAD_IMAGE_REQUEST,
    payload: {
      token: token,
      data: response,
    },
  };
}

export function onUploadImageResponse(
  response: Response<UploadImage>
): Action<Response<UploadImage>> {
  return {
    type: types.GROUP_UPLOAD_IMAGE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
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
