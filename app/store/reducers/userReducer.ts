import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  AddFriendRequest,
  DeleteFriendRequest,
  EditProfileRequest,
  GetUserFriendsRequest,
  GetUserProfileRequest,
  InviteFriendsRequest,
  AddExpenseRequest,
  GetExpensesRequest,
  AddCommentRequest,
  GetExpenseRequest,
  GetCommentRequest,
  UploadImageRequest,
} from "../../models/requests/axios/user";
import {
  AddActivityRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
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
  UploadImageResponse,
  EditProfileResponse,
} from "../../models/responses/axios/user";
import {
  AddActivityResponse,
  AddDebtResponse,
  AddParticipantResponse,
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
import { GetUserActivitiesResponse } from "../../models/responses/graphql/user";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

const initialState: IUserState = {
  isLoggedIn: true,
  loading: false,
  id: "-1",
  token: {
    access: "",
    created: 0,
    expires: 0,
  },
  name: "",
  password: "",
  email: "",
  phone: "",
  picture: "",
  authInputType: InputType.None,
  friends: [],
  groups: [],
  activities: [],
  comments: [],
  myCreditCards: [],
  otherCreditCards: [],
  imageUri: "",
};

export const userReducer = createReducer(initialState, {
  [types.EDIT_PROFILE_REQUEST](state: IUserState, action: Action<EditProfileRequest>) {
    return {
      ...state,
      picture: action.payload.picture,
      newName: action.payload.newName,
    };
  },
  [types.EDIT_PROFILE_RESPONSE](
    state: IUserState,
    action: Action<Response<EditProfileResponse>>
  ) {
    return {
      ...state
    };
  },
  [types.UPLOAD_IMAGE_REQUEST](state: IUserState, action: Action<UploadImageRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.UPLOAD_IMAGE_RESPONSE](
    state: IUserState,
    action: Action<Response<UploadImageResponse>>
  ) {
    return {
      ...state
    };
  },
  [types.GET_USER_PROFILE_REQUEST](state: IUserState, action: Action<GetUserProfileRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_PROFILE_RESPONSE](
    state: IUserState,
    action: Action<Response<UserProfileResponse>>
  ) {
    return {
      ...state,
      name: action.payload.response?.name,
      email: action.payload.response?.email,
      phone: action.payload.response?.phone,
      picture: action.payload.response?.picture,
    };
  },
  [types.GET_USER_PROFILE_FAIL](state: IUserState, action: Action<Response<UserProfileResponse>>) {
    return state;
  },
  [types.GET_USER_ACTIVITIES_REQUEST](state: IUserState, action: Action<GetUserActivitiesRequest>) {
    return {
      ...state,
      id: action.payload.userId,
    };
  },
  [types.GET_USER_ACTIVITIES_RESPONSE](
    state: IUserState,
    action: Action<GetUserActivitiesResponse>
  ) {
    return {
      ...state,
      id: action.payload.userId,
      activities: action.payload.activities,
    };
  },
  [types.GET_USER_ACTIVITIES_FAIL](state: IUserState, action: Action<GetUserActivitiesResponse>) {
    return state;
  },
  [types.UPDATE_USER_REQUEST](state: IUserState, action: Action<UpdateUserRequest>) {
    return {
      id: action.payload.user?.id,
      name: action.payload.user?.name,
      password: action.payload.user?.password,
      email: action.payload.user?.email,
      phone: action.payload.user?.phone,
      credit: action.payload.user?.credit,
      balance: action.payload.user?.balance,
      friends: action.payload.user?.friends,
      groups: action.payload.user?.groups,
      activities: action.payload.user?.activities,
    };
  },
  [types.UPDATE_USER_RESPONSE](state: IUserState, action: Action<UpdateUserRequest>) {
    return {
      id: action.payload.user?.id,
      name: action.payload.user?.name,
      password: action.payload.user?.password,
      email: action.payload.user?.email,
      phone: action.payload.user?.phone,
      credit: action.payload.user?.credit,
      balance: action.payload.user?.balance,
      friends: action.payload.user?.friends,
      groups: action.payload.user?.groups,
      activities: action.payload.user?.activities,
    };
  },
  [types.UPDATE_USER_FAIL](state: IUserState, action: Action<UpdateUserRequest>) {
    return {
      id: action.payload.user?.id,
      name: action.payload.user?.name,
      password: action.payload.user?.password,
      email: action.payload.user?.email,
      phone: action.payload.user?.phone,
      credit: action.payload.user?.credit,
      balance: action.payload.user?.balance,
      friends: action.payload.user?.friends,
      groups: action.payload.user?.groups,
      activities: action.payload.user?.activities,
    };
  },
  [types.ADD_GROUP_REQUEST](state: IUserState, action: Action<AddGroupRequest>) {
    return state;
  },
  [types.ADD_GROUP_RESPONSE](state: IUserState, action: Action<AddGroupResponse>) {
    return state;
  },
  [types.ADD_GROUP_FAIL](state: IUserState, action: Action<AddGroupResponse>) {
    return state;
  },
  [types.UPDATE_GROUP_REQUEST](state: IUserState, action: Action<UpdateGroupRequest>) {
    return state;
  },
  [types.UPDATE_GROUP_RESPONSE](state: IUserState, action: Action<UpdateGroupResponse>) {
    return state;
  },
  [types.UPDATE_GROUP_FAIL](state: IUserState, action: Action<UpdateGroupResponse>) {
    return state;
  },
  [types.DELETE_GROUP_REQUEST](state: IUserState, action: Action<DeleteGroupRequest>) {
    return state;
  },
  [types.DELETE_GROUP_RESPONSE](state: IUserState, action: Action<DeleteGroupResponse>) {
    return state;
  },
  [types.DELETE_GROUP_FAIL](state: IUserState, action: Action<DeleteGroupResponse>) {
    return state;
  },
  [types.GET_GROUP_BY_ID_REQUEST](state: IUserState, action: Action<GetGroupByIdRequest>) {
    return state;
  },
  [types.GET_GROUP_BY_ID_RESPONSE](state: IUserState, action: Action<GetGroupByIdResponse>) {
    return state;
  },
  [types.GET_GROUP_BY_ID_FAIL](state: IUserState, action: Action<GetGroupByIdResponse>) {
    return state;
  },
  [types.GET_USER_GROUPS_REQUEST](state: IUserState, action: Action<GetUserGroupsRequest>) {
    return {
      ...state,
      userId: action.payload.userId,
    };
  },
  [types.GET_USER_GROUPS_RESPONSE](state: IUserState, action: Action<GetUserGroupsResponse>) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_GROUPS_FAIL](state: IUserState, action: Action<GetUserGroupsResponse>) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_FRIENDS_REQUEST](state: IUserState, action: Action<GetUserFriendsRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_FRIENDS_RESPONSE](state: IUserState, action: Action<Response<GetUserFriends>>) {
    return {
      ...state,
      friends: action.payload.response?.friends,
    };
  },
  [types.GET_USER_FRIENDS_FAIL](state: IUserState, action: Action<Response<GetUserFriends>>) {
    return state;
  },
  [types.ADD_FRIEND_REQUEST](state: IUserState, action: Action<AddFriendRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_FRIEND_RESPONSE](state: IUserState, action: Action<Response<AddFriend>>) {
    return {
      ...state,
      friends: action.payload.response?.friends,
    };
  },
  [types.ADD_FRIEND_FAIL](state: IUserState, action: Action<Response<AddFriend>>) {
    return state;
  },
  [types.DELETE_USER_FRIEND_REQUEST](state: IUserState, action: Action<DeleteFriendRequest>) {
    return state;
  },
  [types.DELETE_USER_FRIEND_RESPONSE](state: IUserState, action: Action<Response<DeleteFriend>>) {
    return {
      ...state,
      friends: action.payload.response?.friends,
    };
  },
  [types.DELETE_USER_FRIEND_FAIL](state: IUserState, action: Action<Response<DeleteFriend>>) {
    return state;
  },
  [types.INVITE_FRIEND_REQUEST](state: IUserState, action: Action<InviteFriendsRequest>) {
    return state;
  },
  [types.INVITE_FRIEND_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.INVITE_FRIEND_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.ADD_ACTIVITY_REQUEST](state: IUserState, action: Action<AddActivityRequest>) {
    return state;
  },
  [types.ADD_ACTIVITY_RESPONSE](state: IUserState, action: Action<AddActivityResponse>) {
    return state;
  },
  [types.ADD_ACTIVITY_FAIL](state: IUserState, action: Action<AddActivityResponse>) {
    return state;
  },

  [types.ADD_EXPENSE_REQUEST](state: IUserState, action: Action<AddExpenseRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_EXPENSE_RESPONSE](state: IUserState, action: Action<Response<AddExpense>>) {
    state.activities.push({
      id: action.payload.response!.id,
      description: action.payload.response!.description,
      total: action.payload.response!.total,
      paid_at: action.payload.response!.paid_at,
      group: action.payload.response?.group,
      notes: action.payload.response?.notes,
      participants: action.payload.response!.participants
    })
    return state;
  },
  [types.ADD_EXPENSE_FAIL](state: IUserState, action: Action<Response<AddExpense>>) {
    return state;
  },

  [types.GET_EXPENSES_REQUEST](state: IUserState, action: Action<GetExpensesRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_EXPENSES_RESPONSE](state: IUserState, action: Action<Response<GetExpenses>>) {
    return {
      ...state,
      activities: action.payload.response?.expenses,
    }; 
  },
  [types.GET_EXPENSES_FAIL](state: IUserState, action: Action<Response<GetExpenses>>) {
    return state;
  },

  [types.GET_EXPENSE_REQUEST](state: IUserState, action: Action<GetExpenseRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_EXPENSE_RESPONSE](state: IUserState, action: Action<Response<GetExpense>>) {
    return {
      ...state,
      activities: action.payload.response?.expense
    }  
  },
  [types.GET_EXPENSE_FAIL](state: IUserState, action: Action<Response<GetExpense>>) {
    return state;
  },

  [types.ADD_COMMENT_REQUEST](state: IUserState, action: Action<AddCommentRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_COMMENT_RESPONSE](state: IUserState, action: Action<Response<AddComment>>) {
    return state;
  },
  [types.ADD_COMMENT_FAIL](state: IUserState, action: Action<Response<AddComment>>) {
    return state;
  },

  [types.GET_COMMENT_REQUEST](state: IUserState, action: Action<GetCommentRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_COMMENT_RESPONSE](state: IUserState, action: Action<Response<GetComment>>) {
    return {
      ...state,
      comments: action.payload.response?.comments,
    };   
  },
  [types.GET_COMMENT_FAIL](state: IUserState, action: Action<Response<GetComment>>) {
    return state;
  },

  [types.ADD_DEBT_REQUEST](state: IUserState, action: Action<AddDebtRequest>) {
    return state;
  },
  [types.ADD_DEBT_RESPONSE](state: IUserState, action: Action<AddDebtResponse>) {
    return state;
  },
  [types.ADD_DEBT_FAIL](state: IUserState, action: Action<AddDebtResponse>) {
    return state;
  },
  [types.ADD_PARTICIPANT_REQUEST](state: IUserState, action: Action<AddParticipantRequest>) {
    return state;
  },
  [types.ADD_PARTICIPANT_RESPONSE](state: IUserState, action: Action<AddParticipantResponse>) {
    return state;
  },
  [types.ADD_PARTICIPANT_FAIL](state: IUserState, action: Action<AddParticipantResponse>) {
    return state;
  },
  [types.DELETE_ACTIVITY_REQUEST](state: IUserState, action: Action<DeleteActivityRequest>) {
    return state;
  },
  [types.DELETE_ACTIVITY_RESPONSE](state: IUserState, action: Action<DeleteActivityRequest>) {
    return state;
  },
  [types.DELETE_ACTIVITY_FAIL](state: IUserState, action: Action<DeleteActivityRequest>) {
    return state;
  },
  [types.DELETE_EXPENSE_REQUEST](state: IUserState, action: Action<DeleteExpenseRequest>) {
    return state;
  },
  [types.DELETE_EXPENSE_RESPONSE](state: IUserState, action: Action<DeleteExpenseResponse>) {
    return state;
  },
  [types.DELETE_EXPENSE_FAIL](state: IUserState, action: Action<DeleteExpenseResponse>) {
    return state;
  },
  [types.DELETE_DEBT_REQUEST](state: IUserState, action: Action<DeleteDebtResponse>) {
    return state;
  },
  [types.DELETE_DEBT_RESPONSE](state: IUserState, action: Action<DeleteDebtResponse>) {
    return state;
  },
  [types.DELETE_DEBT_FAIL](state: IUserState, action: Action<DeleteDebtResponse>) {
    return state;
  },
  [types.DELETE_PARTICIPANT_REQUEST](state: IUserState, action: Action<DeleteParticipantRequest>) {
    return state;
  },
  [types.DELETE_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<DeleteParticipantResponse>
  ) {
    return state;
  },
  [types.DELETE_PARTICIPANT_FAIL](state: IUserState, action: Action<DeleteDebtResponse>) {
    return state;
  },
  [types.CLEAR_TOKEN_REQUEST](state: IUserState, action: Action<any>) {
    return {
      ...state,
      token: {
        access: "",
        created: 0,
        expired: 0,
      },
    };
  },
  [types.LOADING_ENABLED](state: IUserState, action: Action<any>) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOADING_DISABLED](state: IUserState, action: Action<any>) {
    return {
      ...state,
      loading: false,
    };
  },
});
