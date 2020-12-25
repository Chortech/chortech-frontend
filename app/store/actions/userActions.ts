import { Action } from "../../models/actions/action";
import { Participant } from "../../models/other/axios/Participant";
import { Token } from "../../models/other/axios/Token";
import { User } from "../../models/other/graphql/User";
import {
  AddFriendRequest,
  GetUserFriendsRequest,
  GetUserProfileRequest,
  DeleteFriendRequest,
  InviteFriendsRequest,
  AddExpenseRequest,
  GetExpensesRequest,
  AddCommentRequest,
  GetExpenseRequest,
  GetCommentRequest,
} from "../../models/requests/axios/user";
import {
  AddActivityRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteDebtRequest,
  DeleteParticipantRequest,
} from "../../models/requests/graphql/activity";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/graphql/group";
import { GetUserActivitiesRequest, UpdateUserRequest } from "../../models/requests/graphql/user";
import { Response } from "../../models/responses/axios/response";
import {
  AddFriend,
  DeleteFriend,
  GetUserFriends,
  UserProfileResponse,
  AddExpense,
  AddComment,
  GetExpenses,
  GetExpense,
  GetComment,
} from "../../models/responses/axios/user";
import {
  AddActivityResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/graphql/activity";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/graphql/group";
import { GetUserActivitiesResponse, UpdateUserResponse } from "../../models/responses/graphql/user";
import { InputType } from "../../utils/inputTypes";
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

export function onGetUserFriendsRequest(token: Token): Action<GetUserFriendsRequest> {
  return {
    type: types.GET_USER_FRIENDS_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserFriendsResponse(
  response: Response<GetUserFriends>
): Action<Response<GetUserFriends>> {
  return {
    type: types.GET_USER_FRIENDS_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetUserFriendsFail(): Action<Response<GetUserFriends>> {
  return {
    type: types.GET_USER_FRIENDS_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onAddFriendRequest(
  token: Token,
  email: string,
  phone: string,
  inputType: InputType
): Action<AddFriendRequest> {
  return {
    type: types.ADD_FRIEND_REQUEST,
    payload: {
      token: token,
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onAddFriendResponse(response: Response<AddFriend>): Action<Response<AddFriend>> {
  return {
    type: types.ADD_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddFriendFail(): Action<Response<AddFriend>> {
  return {
    type: types.ADD_FRIEND_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onDeleteFriendRequest(token: Token, id: string): Action<DeleteFriendRequest> {
  return {
    type: types.DELETE_USER_FRIEND_REQUEST,
    payload: {
      id: id,
      token: token,
    },
  };
}

export function onDeleteFriendResponse(
  response: Response<DeleteFriend>
): Action<Response<DeleteFriend>> {
  return {
    type: types.DELETE_USER_FRIEND_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onDeleteFriendFail(): Action<Response<DeleteFriend>> {
  return {
    type: types.DELETE_USER_FRIEND_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onInviteFriendRequest(
  token: Token,
  email: string,
  phone: string,
  inputType: InputType
): Action<InviteFriendsRequest> {
  return {
    type: types.INVITE_FRIEND_REQUEST,
    payload: {
      token: token,
      email: email,
      phone: phone,
      inputType: inputType,
    },
  };
}

export function onInviteFriendResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.INVITE_FRIEND_RESPONSE,
    payload: response,
  };
}

export function onInviteFriendFail(): Action<Response<null>> {
  return {
    type: types.INVITE_FRIEND_FAIL,
    payload: {
      success: false,
      status: -1,
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
  token: Token,
  description: string,
  total: number,
  paid_at: number,
  participants: Array<Participant>,
  group?: string,
  notes?: string
): Action<AddExpenseRequest> {
  return {
    type: types.ADD_EXPENSE_REQUEST,
    payload: {
      token: token,
      description: description,
      total: total,
      paid_at: paid_at,
      group: group,
      notes: notes,
      participants: participants,
    },
  };
}

export function onAddExpenseResponse(response: Response<AddExpense>): Action<Response<AddExpense>> {
  return {
    type: types.ADD_EXPENSE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddExpenseFail(): Action<Response<AddExpense>> {
  return {
    type: types.ADD_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetExpensesRequest(token: Token): Action<GetExpensesRequest> {
  return {
    type: types.GET_EXPENSES_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetExpensesResponse(
  response: Response<GetExpenses>
): Action<Response<GetExpenses>> {
  return {
    type: types.GET_EXPENSES_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetExpensesFail(): Action<Response<GetExpenses>> {
  return {
    type: types.GET_EXPENSES_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetExpenseRequest(token: Token, id: string): Action<GetExpenseRequest> {
  return {
    type: types.GET_EXPENSE_REQUEST,
    payload: {
      token: token,
      id: id,
    },
  };
}

export function onGetExpenseResponse(response: Response<GetExpense>): Action<Response<GetExpense>> {
  return {
    type: types.GET_EXPENSE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetExpenseFail(): Action<Response<GetExpense>> {
  return {
    type: types.GET_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onAddCommentRequest(
  token: Token,
  text: string,
  created_at: number,
  id: string
): Action<AddCommentRequest> {
  return {
    type: types.ADD_COMMENT_REQUEST,
    payload: {
      token: token,
      text: text,
      created_at: created_at,
      id: id,
    },
  };
}

export function onAddCommentResponse(response: Response<AddComment>): Action<Response<AddComment>> {
  return {
    type: types.ADD_COMMENT_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddCommentFail(): Action<Response<AddComment>> {
  return {
    type: types.ADD_COMMENT_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetCommentRequest(token: Token, id: string): Action<GetCommentRequest> {
  return {
    type: types.GET_COMMENT_REQUEST,
    payload: {
      token: token,
      id: id,
    },
  };
}

export function onGetCommentResponse(response: Response<GetComment>): Action<Response<GetComment>> {
  return {
    type: types.GET_COMMENT_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetCommentFail(): Action<Response<GetComment>> {
  return {
    type: types.GET_COMMENT_FAIL,
    payload: {
      success: false,
      status: -1,
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
): Action<DeleteActivityResponse> {
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
