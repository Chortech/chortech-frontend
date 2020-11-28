import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  GetUserActivitiesRequest,
  GetUserRequest,
  UpdateUserRequest,
} from "../../models/requests/user";
import {
  GetUserActivitiesResponse,
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
