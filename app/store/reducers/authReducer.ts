/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { InputType } from "../../utils/inputTypes";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import { GenerateCodeRequest } from "../../models/requests/graphql/codeVerification";
import {
  ChangeEmailOrPhone,
  ChangePasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  SignUpRequest,
} from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import { Login, SignUp } from "../../models/responses/axios/auth";
import { CancelCodeRequest, VerifyCodeRequest } from "../../models/requests/axios/verification";

const initialState: IUserState = {
  isLoggedIn: false,
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
  myCreditCards: [],
  otherCreditCards: [],
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
  [types.LOGIN_RESPONSE](state: IUserState, action: Action<Response<Login>>) {
    return {
      ...state,
      isLoggedIn: true,
      id: action.payload.response?.id,
      token: action.payload.response?.token,
    };
  },
  [types.LOGIN_FAIL](state: IUserState) {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      token: undefined,
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
      id: "-1",
      token: undefined,
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
  [types.SIGNUP_RESPONSE](state: IUserState, action: Action<Response<SignUp>>) {
    return {
      ...state,
      isLoggedIn: true,
      id: action.payload.response?.id,
      name: action.payload.response?.name,
      token: action.payload.response?.token,
    };
  },
  [types.SIGNUP_FAIL](state: IUserState, action: Action<Response<SignUp>>) {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      name: "",
      token: undefined,
      email: "",
      phone: "",
      password: "",
      authInputType: InputType.None,
    };
  },
  [types.GENERATE_CODE_REQUEST](state: IUserState, action: Action<GenerateCodeRequest>) {
    return state;
  },
  [types.GENERATE_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.GENERATE_CODE_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.VERIFY_CODE_REQUEST](state: IUserState, action: Action<VerifyCodeRequest>) {
    return {
      ...state,
      token: action.payload.token != undefined ? action.payload.token : undefined,
    };
  },
  [types.VERIFY_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.VERIFY_CODE_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CANCEL_CODE_REQUEST](state: IUserState, action: Action<CancelCodeRequest>) {
    return state;
  },
  [types.CANCEL_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CANCEL_CODE_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.RESET_PASSWORD_REQUEST](state: IUserState, action: Action<ResetPasswordRequest>) {
    return state;
  },
  [types.RESET_PASSWORD_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.RESET_PASSWORD_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CHANGE_PASSWORD_REQUEST](state: IUserState, action: Action<ChangePasswordRequest>) {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.CHANGE_PASSWORD_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CHANGE_PASSWORD_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CHANGE_EMAIL_OR_PHONE_REQUEST](state: IUserState, action: Action<ChangeEmailOrPhone>) {
    return state;
  },
  [types.CHANGE_EMAIL_OR_PHONE_RESPONSE](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.CHANGE_EMAIL_OR_PHONE_FAIL](state: IUserState, action: Action<Response<null>>) {
    return state;
  },
  [types.LOADING_ENABLED](state: IUserState, action: Action<any>) {
    return {
      ...state,
      loading: true,
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
