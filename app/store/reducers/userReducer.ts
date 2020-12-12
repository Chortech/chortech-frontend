import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  AddActivityRequest,
  AddExpenseRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteParticipantRequest,
} from "../../models/requests/activity";
import {
  AddFriendRequest,
  DeleteFriendRequest,
} from "../../models/requests/friend";
import {
  AddGroupRequest,
  UpdateGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
} from "../../models/requests/group";
import {
  GetUserActivitiesRequest,
  GetUserRequest,
  UpdateUserRequest,
} from "../../models/requests/user";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/activity";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../models/responses/friend";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/group";
import {
  GetUserActivitiesResponse,
  GetUserFriendsResponse,
  GetUserResponse,
} from "../../models/responses/user";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

const initialState: IUserState = {
  isLoggedIn: true,
  loading: false,
  id: "-1",
  name: "",
  password: "",
  email: "",
  phone: "",
  authInputType: InputType.None,
  credit: 0,
  balance: 0,
  friends: [],
  groups: [],
  activities: [],
};

export const userReducer = createReducer(initialState, {
  [types.GET_USER_REQUEST](state: IUserState, action: Action<GetUserRequest>) {
    return {
      ...state,
      id: action.payload.id,
    };
  },
  [types.GET_USER_RESPONSE](
    state: IUserState,
    action: Action<GetUserResponse>
  ) {
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
  [types.GET_USER_FAIL](state: IUserState, action: Action<GetUserResponse>) {
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
  [types.GET_USER_ACTIVITIES_REQUEST](
    state: IUserState,
    action: Action<GetUserActivitiesRequest>
  ) {
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
  [types.GET_USER_ACTIVITIES_FAIL](
    state: IUserState,
    action: Action<GetUserActivitiesResponse>
  ) {
    return state;
  },
  [types.UPDATE_USER_REQUEST](
    state: IUserState,
    action: Action<UpdateUserRequest>
  ) {
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
  [types.UPDATE_USER_RESPONSE](
    state: IUserState,
    action: Action<UpdateUserRequest>
  ) {
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
  [types.UPDATE_USER_FAIL](
    state: IUserState,
    action: Action<UpdateUserRequest>
  ) {
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
  [types.ADD_GROUP_REQUEST](
    state: IUserState,
    action: Action<AddGroupRequest>
  ) {
    return state;
  },
  [types.ADD_GROUP_RESPONSE](
    state: IUserState,
    action: Action<AddGroupResponse>
  ) {
    return state;
  },
  [types.ADD_GROUP_FAIL](state: IUserState, action: Action<AddGroupResponse>) {
    return state;
  },
  [types.UPDATE_GROUP_REQUEST](
    state: IUserState,
    action: Action<UpdateGroupRequest>
  ) {
    return state;
  },
  [types.UPDATE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<UpdateGroupResponse>
  ) {
    return state;
  },
  [types.UPDATE_GROUP_FAIL](
    state: IUserState,
    action: Action<UpdateGroupResponse>
  ) {
    return state;
  },
  [types.DELETE_GROUP_REQUEST](
    state: IUserState,
    action: Action<DeleteGroupRequest>
  ) {
    return state;
  },
  [types.DELETE_GROUP_RESPONSE](
    state: IUserState,
    action: Action<DeleteGroupResponse>
  ) {
    return state;
  },
  [types.DELETE_GROUP_FAIL](
    state: IUserState,
    action: Action<DeleteGroupResponse>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_REQUEST](
    state: IUserState,
    action: Action<GetGroupByIdRequest>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_RESPONSE](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ) {
    return state;
  },
  [types.GET_GROUP_BY_ID_FAIL](
    state: IUserState,
    action: Action<GetGroupByIdResponse>
  ) {
    return state;
  },
  [types.GET_USER_GROUPS_REQUEST](
    state: IUserState,
    action: Action<GetUserGroupsRequest>
  ) {
    return {
      ...state,
      userId: action.payload.userId,
    };
  },
  [types.GET_USER_GROUPS_RESPONSE](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_GROUPS_FAIL](
    state: IUserState,
    action: Action<GetUserGroupsResponse>
  ) {
    return {
      ...state,
      groups: action.payload.groups,
    };
  },
  [types.GET_USER_FRIENDS_REQUEST](
    state: IUserState,
    action: Action<GetUserGroupsRequest>
  ) {
    return {
      ...state,
      id: action.payload.userId,
    };
  },
  [types.GET_USER_FRIENDS_RESPONSE](
    state: IUserState,
    action: Action<GetUserFriendsResponse>
  ) {
    return {
      ...state,
      friends: action.payload.friends,
    };
  },
  [types.GET_USER_FRIENDS_FAIL](
    state: IUserState,
    action: Action<GetUserFriendsResponse>
  ) {
    return {
      ...state,
      friends: action.payload.friends,
    };
  },
  [types.ADD_FRIEND_REQUEST](
    state: IUserState,
    action: Action<AddFriendRequest>
  ) {
    return state;
  },
  [types.ADD_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<AddFriendResponse>
  ) {
    return state;
  },
  [types.ADD_FRIEND_FAIL](
    state: IUserState,
    action: Action<AddFriendResponse>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_REQUEST](
    state: IUserState,
    action: Action<DeleteFriendRequest>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<DeleteFriendResponse>
  ) {
    return state;
  },
  [types.DELETE_USER_FRIEND_FAIL](
    state: IUserState,
    action: Action<DeleteFriendResponse>
  ) {
    return state;
  },
  [types.ADD_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<AddActivityRequest>
  ) {
    return state;
  },
  [types.ADD_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return state;
  },
  [types.ADD_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<AddExpenseRequest>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_FAIL](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return state;
  },
  [types.ADD_DEBT_REQUEST](state: IUserState, action: Action<AddDebtRequest>) {
    return state;
  },
  [types.ADD_DEBT_RESPONSE](
    state: IUserState,
    action: Action<AddDebtResponse>
  ) {
    return state;
  },
  [types.ADD_DEBT_FAIL](state: IUserState, action: Action<AddDebtResponse>) {
    return state;
  },
  [types.ADD_PARTICIPANT_REQUEST](
    state: IUserState,
    action: Action<AddParticipantRequest>
  ) {
    return state;
  },
  [types.ADD_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
    return state;
  },
  [types.ADD_PARTICIPANT_FAIL](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
  },
  [types.DELETE_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<DeleteExpenseRequest>
  ) {
    return state;
  },
  [types.DELETE_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<DeleteExpenseResponse>
  ) {
    return state;
  },
  [types.DELETE_EXPENSE_FAIL](
    state: IUserState,
    action: Action<DeleteExpenseResponse>
  ) {
    return state;
  },
  [types.DELETE_DEBT_REQUEST](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
  },
  [types.DELETE_DEBT_RESPONSE](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
  },
  [types.DELETE_DEBT_FAIL](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
  },
  [types.DELETE_PARTICIPANT_REQUEST](
    state: IUserState,
    action: Action<DeleteParticipantRequest>
  ) {
    return state;
  },
  [types.DELETE_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<DeleteParticipantResponse>
  ) {
    return state;
  },
  [types.DELETE_PARTICIPANT_FAIL](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
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
