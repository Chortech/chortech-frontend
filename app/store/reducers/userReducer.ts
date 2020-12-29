import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  AddFriendRequest,
  DeleteFriendRequest,
  GetUserFriendsRequest,
  GetUserProfileRequest,
  InviteFriendsRequest,
  AddExpenseRequest,
  GetUserExpensesRequest,
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
  UserExpenses,
  UserExpense,
  GetComment,
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
import { log } from "../../utils/logger";
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
};

export const userReducer = createReducer(initialState, {
  [types.GET_USER_PROFILE_REQUEST](
    state: IUserState,
    action: Action<GetUserProfileRequest>
  ): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_PROFILE_RESPONSE](
    state: IUserState,
    action: Action<Response<UserProfileResponse>>
  ): IUserState {
    return {
      ...state,
      name: action.payload.response!.name,
      email: action.payload.response!.email,
      phone: action.payload.response!.phone,
      picture: action.payload.response!.picture,
    };
  },
  [types.GET_USER_PROFILE_FAIL](
    state: IUserState,
    action: Action<Response<UserProfileResponse>>
  ): IUserState {
    return state;
  },
  [types.GET_USER_EXPENSES_REQUEST](
    state: IUserState,
    action: Action<GetUserExpensesRequest>
  ): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_EXPENSES_RESPONSE](
    state: IUserState,
    action: Action<Response<UserExpenses>>
  ): IUserState {
    return {
      ...state,
      activities: action.payload.response!.expenses,
    };
  },
  [types.GET_USER_EXPENSES_FAIL](
    state: IUserState,
    action: Action<Response<UserExpenses>>
  ): IUserState {
    return state;
  },
  [types.ADD_GROUP_REQUEST](state: IUserState, action: Action<AddGroupRequest>): IUserState {
    return state;
  },
  [types.ADD_GROUP_RESPONSE](state: IUserState, action: Action<AddGroupResponse>): IUserState {
    return state;
  },
  [types.ADD_GROUP_FAIL](state: IUserState, action: Action<AddGroupResponse>): IUserState {
    return state;
  },
  [types.UPDATE_GROUP_REQUEST](state: IUserState, action: Action<UpdateGroupRequest>): IUserState {
    return state;
  },
  [types.UPDATE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<UpdateGroupResponse>
  ): IUserState {
    return state;
  },
  [types.UPDATE_GROUP_FAIL](state: IUserState, action: Action<UpdateGroupResponse>): IUserState {
    return state;
  },
  [types.DELETE_GROUP_REQUEST](state: IUserState, action: Action<DeleteGroupRequest>): IUserState {
    return state;
  },
  [types.DELETE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<DeleteGroupResponse>
  ): IUserState {
    return state;
  },
  [types.DELETE_GROUP_FAIL](state: IUserState, action: Action<DeleteGroupResponse>): IUserState {
    return state;
  },
  [types.GET_GROUP_BY_ID_REQUEST](
    state: IUserState,
    action: Action<GetGroupByIdRequest>
  ): IUserState {
    return state;
  },
  [types.GET_GROUP_BY_ID_RESPONSE](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ): IUserState {
    return state;
  },
  [types.GET_GROUP_BY_ID_FAIL](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ): IUserState {
    return state;
  },
  [types.GET_USER_GROUPS_RESPONSE](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ): IUserState {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_GROUPS_FAIL](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ): IUserState {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_FRIENDS_REQUEST](
    state: IUserState,
    action: Action<GetUserFriendsRequest>
  ): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_FRIENDS_RESPONSE](
    state: IUserState,
    action: Action<Response<GetUserFriends>>
  ): IUserState {
    return {
      ...state,
      friends: action.payload.response!.friends,
    };
  },
  [types.GET_USER_FRIENDS_FAIL](
    state: IUserState,
    action: Action<Response<GetUserFriends>>
  ): IUserState {
    return state;
  },
  [types.ADD_FRIEND_REQUEST](state: IUserState, action: Action<AddFriendRequest>): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_FRIEND_RESPONSE](state: IUserState, action: Action<Response<AddFriend>>): IUserState {
    return {
      ...state,
      friends: action.payload.response!.friends,
    };
  },
  [types.ADD_FRIEND_FAIL](state: IUserState, action: Action<Response<AddFriend>>): IUserState {
    return state;
  },
  [types.DELETE_USER_FRIEND_REQUEST](
    state: IUserState,
    action: Action<DeleteFriendRequest>
  ): IUserState {
    return state;
  },
  [types.DELETE_USER_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<Response<DeleteFriend>>
  ): IUserState {
    return {
      ...state,
      friends: action.payload.response!.friends,
    };
  },
  [types.DELETE_USER_FRIEND_FAIL](
    state: IUserState,
    action: Action<Response<DeleteFriend>>
  ): IUserState {
    return state;
  },
  [types.INVITE_FRIEND_REQUEST](
    state: IUserState,
    action: Action<InviteFriendsRequest>
  ): IUserState {
    return state;
  },
  [types.INVITE_FRIEND_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.INVITE_FRIEND_FAIL](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.ADD_EXPENSE_REQUEST](state: IUserState, action: Action<AddExpenseRequest>): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<Response<AddExpense>>
  ): IUserState {
    return state;
  },
  [types.ADD_EXPENSE_FAIL](state: IUserState, action: Action<Response<AddExpense>>): IUserState {
    return state;
  },

  [types.GET_USER_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<GetExpenseRequest>
  ): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_USER_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<Response<UserExpense>>
  ): IUserState {
    state.activities.push(action.payload.response!.expense);
    return state;
  },
  [types.GET_USER_EXPENSE_FAIL](
    state: IUserState,
    action: Action<Response<UserExpense>>
  ): IUserState {
    return state;
  },

  [types.ADD_COMMENT_REQUEST](state: IUserState, action: Action<AddCommentRequest>): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.ADD_COMMENT_RESPONSE](
    state: IUserState,
    action: Action<Response<AddComment>>
  ): IUserState {
    return state;
  },
  [types.ADD_COMMENT_FAIL](state: IUserState, action: Action<Response<AddComment>>): IUserState {
    return state;
  },

  [types.GET_COMMENT_REQUEST](state: IUserState, action: Action<GetCommentRequest>): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.GET_COMMENT_RESPONSE](
    state: IUserState,
    action: Action<Response<GetComment>>
  ): IUserState {
    return {
      ...state,
      comments: action.payload.response!.comments,
    };
  },
  [types.GET_COMMENT_FAIL](state: IUserState, action: Action<Response<GetComment>>): IUserState {
    return state;
  },
  [types.DELETE_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ): IUserState {
    return state;
  },
  [types.DELETE_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ): IUserState {
    return state;
  },
  [types.DELETE_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ): IUserState {
    return state;
  },
  [types.DELETE_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<DeleteExpenseRequest>
  ): IUserState {
    return state;
  },
  [types.DELETE_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<DeleteExpenseResponse>
  ): IUserState {
    return state;
  },
  [types.DELETE_EXPENSE_FAIL](
    state: IUserState,
    action: Action<DeleteExpenseResponse>
  ): IUserState {
    return state;
  },
  [types.CLEAR_TOKEN_REQUEST](state: IUserState, action: Action<any>): IUserState {
    return {
      ...state,
      token: {
        access: "",
        created: -1,
        expires: -1,
      },
    };
  },
  [types.LOADING_ENABLED](state: IUserState, action: Action<any>): IUserState {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOADING_DISABLED](state: IUserState, action: Action<any>): IUserState {
    return {
      ...state,
      loading: false,
    };
  },
});
