/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { InputType } from "../../utils/inputTypes";
import { Action } from "../../models/actions/action";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { IUserState } from "../../models/reducers/default";

const initialState: IUserState = {
  isLoggedIn: false,
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

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: IUserState, action: Action<LoginRequest>) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      authInputType: action.payload.inputType,
    };
  },
  [types.LOGIN_RESPONSE](state: IUserState, action: Action<LoginResponse>) {
    return {
      ...state,
      isLoggedIn: true,
      id: action.payload.user?.id,
      name: action.payload.user?.name,
      password: action.payload.user?.password,
      email: action.payload.user?.email,
      phone: action.payload.user?.phone,
      credit: action.payload.user?.credit,
      balance: action.payload.user?.balance,
    };
  },
  [types.LOGIN_FAIL](state: IUserState) {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      email: "",
      phone: "",
      authInputType: InputType.None,
      password: "",
    };
  },
  [types.LOG_OUT](state: IUserState) {
    return {
      ...state,
      isLoggedIn: false,
      loading: false,
      id: "-1",
      email: "",
      phone: "",
      authInputType: InputType.None,
      password: "",
    };
  },
  [types.SIGNUP_REQUEST](state: IUserState, action: Action<SignUpRequest>) {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      authInputType: action.payload.inputType,
    };
  },
  [types.SIGNUP_RESPONSE](state: IUserState, action: Action<SignUpResponse>) {
    return {
      ...state,
      isLoggedIn: true,
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
  [types.SIGNUP_FAIL](state: IUserState, action: Action<SignUpResponse>) {
    return {
      ...state,
      id: "-1",
      name: "",
      email: "",
      phone: "",
      password: "",
      authInputType: InputType.None,
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
