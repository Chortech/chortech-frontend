import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import { User } from "../../models/other/graphql/User";
import { GetUserProfileRequest } from "../../models/requests/axios/user";
import {
  AddActivityRequest,
  AddExpenseRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteDebtRequest,
  DeleteParticipantRequest,
} from "../../models/requests/graphql/activity";
import { AddFriendRequest, DeleteFriendRequest } from "../../models/requests/graphql/friend";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/graphql/group";
import {
  GetUserActivitiesRequest,
  GetUserFriendsRequest,
  UpdateUserRequest,
} from "../../models/requests/graphql/user";
import { Response } from "../../models/responses/axios/response";
import { UserProfileResponse } from "../../models/responses/axios/user";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/graphql/activity";
import { AddFriendResponse, DeleteFriendResponse } from "../../models/responses/graphql/friend";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/graphql/group";
import {
  GetUserActivitiesResponse,
  GetUserFriendsResponse,
  UpdateUserResponse,
} from "../../models/responses/graphql/user";
import * as types from "./types";

export function onGetUserProfileRequest(token: Token): Action<GetUserProfileRequest> {
  return {
    type: types.GET_USER_PROFILE_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserProfileResponse(
  response: Response<UserProfileResponse>
): Action<Response<UserProfileResponse>> {
  return {
    type: types.GET_USER_PROFILE_RESPONSE,
    payload: response,
  };
}

export function onGetUserProfileFail(): Action<Response<UserProfileResponse>> {
  return {
    type: types.GET_USER_PROFILE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetUserActivitiesRequest(userId: string): Action<GetUserActivitiesRequest> {
  return {
    type: types.GET_USER_ACTIVITIES_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onGetUserActivitiesResponse(
  response: GetUserActivitiesResponse
): Action<GetUserActivitiesResponse> {
  return {
    type: types.GET_USER_ACTIVITIES_RESPONSE,
    payload: {
      success: response.success,
      userId: response.userId,
      activities: response.activities,
    },
  };
}

export function onGetUserActivitiesFail(): Action<GetUserActivitiesResponse> {
  return {
    type: types.GET_USER_ACTIVITIES_RESPONSE,
    payload: {
      success: false,
      userId: "-1",
      activities: [],
    },
  };
}

export function onUpdateUserRequest(user: User): Action<UpdateUserRequest> {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload: {
      user: user,
    },
  };
}

export function onUpdateUserResponse(response: UpdateUserResponse): Action<UpdateUserResponse> {
  return {
    type: types.UPDATE_USER_RESPONSE,
    payload: {
      success: response.success,
      user: response.user,
    },
  };
}

export function onUpdateUserFail(): Action<UpdateUserResponse> {
  return {
    type: types.UPDATE_USER_FAIL,
    payload: {
      success: false,
      user: undefined,
    },
  };
}

export function onAddGrouptRequest(
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

export function onGetUserFriendsRequest(userId: string): Action<GetUserFriendsRequest> {
  return {
    type: types.GET_USER_FRIENDS_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onGetUserFriendsResponse(
  response: GetUserFriendsResponse
): Action<GetUserFriendsResponse> {
  return {
    type: types.GET_USER_FRIENDS_RESPONSE,
    payload: {
      success: response.success,
      userId: response.userId,
      friends: response.friends,
    },
  };
}

export function onGetUserFriendsFail(): Action<GetUserFriendsResponse> {
  return {
    type: types.GET_USER_FRIENDS_FAIL,
    payload: {
      success: false,
      userId: "-1",
      friends: [],
    },
  };
}

export function onAddFriendRequest(
  userId: string,
  friendId: string,
  friendName: string
): Action<AddFriendRequest> {
  return {
    type: types.ADD_FRIEND_REQUEST,
    payload: {
      userId: userId,
      friendId: friendId,
      friendName: friendName,
    },
  };
}

export function onAddFriendResponse(response: AddFriendResponse): Action<AddFriendResponse> {
  return {
    type: types.ADD_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      friend: response.friend,
    },
  };
}

export function onAddFriendFail(): Action<AddFriendResponse> {
  return {
    type: types.ADD_FRIEND_FAIL,
    payload: {
      success: false,
      friend: {
        id: "-1",
        friendId: "-1",
        friendName: "",
      },
    },
  };
}

export function onDeleteFriendRequest(id: string): Action<DeleteFriendRequest> {
  return {
    type: types.DELETE_USER_FRIEND_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteFriendResponse(
  response: DeleteFriendResponse
): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_USER_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      id: response.id,
    },
  };
}

export function onDeleteFriendFail(): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_USER_FRIEND_FAIL,
    payload: {
      success: false,
      id: "-1",
    },
  };
}

export function onAddActivityRequest(
  userId: string,
  type: string,
  groupId?: string,
  expenseId?: string,
  debtId?: string
): Action<AddActivityRequest> {
  return {
    type: types.ADD_ACTIVITY_REQUEST,
    payload: {
      userId,
      type,
      groupId,
      expenseId,
      debtId,
    },
  };
}

export function onAddActivityResponse(response: AddActivityResponse): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_RESPONSE,
    payload: response,
  };
}

export function onAddActivityFail(): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onAddExpenseRequest(
  userId: string,
  activityName: string,
  description: string,
  category: string,
  totalPrice: string
): Action<AddExpenseRequest> {
  return {
    type: types.ADD_EXPENSE_REQUEST,
    payload: {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      totalPrice: totalPrice,
    },
  };
}

export function onAddExpenseResponse(response: AddExpenseResponse): Action<AddExpenseResponse> {
  return {
    type: types.ADD_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onAddExpenseFail(): Action<AddExpenseResponse> {
  return {
    type: types.ADD_EXPENSE_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onAddDebtRequest(
  userId: string,
  activityName: string,
  description: string,
  category: string,
  debt: number,
  creditorId: string
): Action<AddDebtRequest> {
  return {
    type: types.ADD_DEBT_REQUEST,
    payload: {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      debt: debt,
      creditorId: creditorId,
    },
  };
}

export function onAddDebtResponse(response: AddDebtResponse): Action<AddDebtResponse> {
  return {
    type: types.ADD_DEBT_RESPONSE,
    payload: response,
  };
}

export function onAddDebtFail(): Action<AddDebtResponse> {
  return {
    type: types.ADD_DEBT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onAddParticipantRequest(
  expenseId: string,
  userId: string,
  share: number
): Action<AddParticipantRequest> {
  return {
    type: types.ADD_PARTICIPANT_REQUEST,
    payload: {
      expenseId,
      userId,
      share,
    },
  };
}

export function onAddParticipantResponse(
  response: AddParticipantResponse
): Action<AddParticipantResponse> {
  return {
    type: types.ADD_PARTICIPANT_RESPONSE,
    payload: response,
  };
}

export function onAddParticipantFail(): Action<AddParticipantResponse> {
  return {
    type: types.ADD_PARTICIPANT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onDeleteActivityRequest(id: string): Action<DeleteActivityRequest> {
  return {
    type: types.DELETE_ACTIVITY_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteActivityResponse(
  response: DeleteActivityResponse
): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_ACTIVITY_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteActivityFail(): Action<DeleteActivityResponse> {
  return {
    type: types.DELETE_ACTIVITY_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onDeleteExpenseRequest(id: string): Action<DeleteExpenseRequest> {
  return {
    type: types.DELETE_EXPENSE_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteExpenseResponse(
  response: DeleteExpenseResponse
): Action<DeleteExpenseResponse> {
  return {
    type: types.DELETE_EXPENSE_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteExpenseFail(): Action<DeleteExpenseResponse> {
  return {
    type: types.DELETE_EXPENSE_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onDeleteDebtRequest(id: string): Action<DeleteDebtRequest> {
  return {
    type: types.DELETE_DEBT_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteDebtResponse(response: DeleteDebtResponse): Action<DeleteDebtResponse> {
  return {
    type: types.DELETE_DEBT_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteDebtFail(): Action<DeleteDebtResponse> {
  return {
    type: types.DELETE_DEBT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onDeleteParticipantRequest(id: string): Action<DeleteParticipantRequest> {
  return {
    type: types.DELETE_PARTICIPANT_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteParticipantResponse(
  response: DeleteParticipantResponse
): Action<DeleteParticipantResponse> {
  return {
    type: types.DELETE_PARTICIPANT_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteParticipantFail(): Action<DeleteParticipantResponse> {
  return {
    type: types.DELETE_PARTICIPANT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onClearTokenRequest(): Action<any> {
  return {
    type: types.CLEAR_TOKEN_REQUEST,
    payload: {},
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
