import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  AddFriendToGroupRequest,
  CreateGroupRequest,
  DeleteGroupRequest,
  EditGroupRequest,
  GetGroupInfoRequest,
  GetUserGroupsRequest,
  LeaveGroupRequest,
  RemoveMemberRequest,
} from "../../models/requests/axios/group";
import {
  AddFriendToGroupResponse,
  DeleteGroupResponse,
  EditGroupResponse,
  GetGroupInfoResponse,
  GetUserGroupsResponse,
  LeaveGroupResponse,
  RemoveMemberResponse,
} from "../../models/responses/axios/group";
import * as types from "./types";
import { Group } from "../../models/other/axios/Group";
import { Response } from "../../models/responses/axios/response";

export function onCreateGroupRequest(
  token: Token,
  name: string,
  picture: string,
): Action<CreateGroupRequest> {
  return {
    type: types.ADD_GROUP_REQUEST,
    payload: {
      token,
      name,
      picture,
    },
  };
}

export function onCreateGroupResponse(response: any): Action<null> {
  return {
    type: types.ADD_GROUP_RESPONSE,
    payload: response,
  };
}

export function onAddGroupFail(response: null): Action<null> {
  return {
    type: types.ADD_GROUP_FAIL,
    payload: response,
  };
}

export function onEditGroupRequest(
    token: Token,
    id: string,
    name: string,
    picture: string,
): Action<EditGroupRequest> {
  return {
    type: types.EDIT_GROUP_REQUEST,
    payload: {
      token,
      id,
      name,
      picture,
    },
  };
}

export function onEditGroupResponse(group: Group): Action<EditGroupResponse> {
  return {
    type: types.EDIT_GROUP_RESPONSE,
    payload: {
      group,
    },
  };
}

export function onUpdateGroupFail(response: null): Action<null> {
  return {
    type: types.UPDATE_GROUP_FAIL,
    payload: response,
  };
}

export function onDeleteGroupRequest(
  token: Token,
  id: string,
  ): Action<DeleteGroupRequest> {
  return {
    type: types.DELETE_GROUP_REQUEST,
    payload: {
      token,
      id,
    },
  };
}

export function onDeleteGroupResponse(message: string): Action<DeleteGroupResponse> {
  return {
    type: types.DELETE_GROUP_RESPONSE,
    payload: {
      message,
    },
  };
}

export function onDeleteGroupFail(response: null): Action<null> {
  return {
    type: types.DELETE_GROUP_FAIL,
    payload: response,
  };
}

export function onGetGroupByIdRequest(
  token: Token,
  id: string,
  ): Action<GetGroupInfoRequest> {
  return {
    type: types.GET_GROUP_BY_ID_REQUEST,
    payload: {
      token,
      id,
    },
  };
}

export function onGetGroupByIdResponse(
  group: Group,
): Action<GetGroupInfoResponse> {
  return {
    type: types.GET_GROUP_BY_ID_RESPONSE,
    payload: {
      group,
    },
  };
}

export function onGetGroupByIdFail(response: null): Action<null> {
  return {
    type: types.GET_GROUP_BY_ID_FAIL,
    payload: 
      response,
  };
}

export function onGetUserGroupsRequest(token: Token): Action<GetUserGroupsRequest> {
  return {
    type: types.GET_USER_GROUPS_REQUEST,
    payload: {
      token,
    },
  };
}

export function onGetUserGroupsResponse(
  response: Response<GetUserGroupsResponse>
): Action<Response<GetUserGroupsResponse>> {
  return {
    type: types.GET_USER_GROUPS_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetUserGroupsFail(response: null): Action<null> {
  return {
    type: types.GET_USER_GROUPS_FAIL,
    payload: response,
  };
}

export function onAddFriendToGroupRequest(
  token: Token,
  id: string,
  members: Array<string>,
): Action<AddFriendToGroupRequest> {
return {
  type: types.ADD_GROUP_REQUEST,
  payload: {
    token,
    id,
    members,
  },
};
}

export function onAddFriendToGroupResponse(group: Group): Action<AddFriendToGroupResponse> {
return {
  type: types.ADD_GROUP_RESPONSE,
  payload: {
    group,
  },
};
}

export function onLeaveGroupRequest(
  token: Token,
  id: string,
): Action<LeaveGroupRequest> {
return {
  type: types.LEAVE_GROUP_REQUEST,
  payload: {
    token,
    id,
  },
};
}

export function onLeaveGroupResponse(response: any): Action<LeaveGroupResponse> {
return {
  type: types.LEAVE_GROUP_RESPONSE,
  payload: response,
};
}

export function onRemoveMemberRequest(
  token: Token,
  memberId: string,
): Action<RemoveMemberRequest> {
return {
  type: types.REMOVE_MEMBER_REQUEST,
  payload: {
    token,
    memberId,
  },
};
}

export function onRemoveMemberResponse(group: Group): Action<RemoveMemberResponse> {
return {
  type: types.REMOVE_MEMBER_RESPONSE,
  payload: {
    group,
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
