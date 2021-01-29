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
  ChangeEmailOrPhoneRequest,
  ChangePasswordRequest,
  LoginRequest,
  ResetPasswordRequest,
  SignUpRequest,
} from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import {
  ChangeEmailOrPhone,
  ChangePassword,
  Login,
  SignUp,
} from "../../models/responses/axios/auth";
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
  imageUri: "",
  authInputType: InputType.None,
  friends: [],
  groups: [],
  activities: [],
  payment: {
    id: "",
    from: "",
    to: "",
    amount: 0,
    paid_at: 0,
  },
  expenses: [],
  myCreditCards: [],
  otherCreditCards: [],
};

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: IUserState, action: Action<LoginRequest>): IUserState {
    return state;
  },
  [types.LOGIN_RESPONSE](state: IUserState, action: Action<Response<Login>>): IUserState {
    return {
      ...state,
      isLoggedIn: true,
      id: action.payload.response!.id,
      token: action.payload.response!.token,
      email: action.payload.response!.email,
      phone: action.payload.response!.phone,
      password: action.payload.response!.password,
      authInputType: action.payload.response!.inputType,
    };
  },
  [types.LOGIN_FAIL](state: IUserState): IUserState {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      token: {
        access: "",
        created: 0,
        expires: 0,
      },
      email: "",
      phone: "",
      authInputType: InputType.None,
      password: "",
    };
  },
  [types.LOG_OUT](state: IUserState): IUserState {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      token: {
        access: "",
        created: 0,
        expires: 0,
      },
      name: "",
      email: "",
      phone: "",
      authInputType: InputType.None,
      password: "",
    };
  },
  [types.SIGNUP_REQUEST](state: IUserState, action: Action<SignUpRequest>): IUserState {
    return state;
  },
  [types.SIGNUP_RESPONSE](state: IUserState, action: Action<Response<SignUp>>): IUserState {
    return {
      ...state,
      isLoggedIn: true,
      id: action.payload.response!.id,
      token: action.payload.response!.token,
      name: action.payload.response!.name,
      email: action.payload.response!.email,
      phone: action.payload.response!.phone,
      password: action.payload.response!.password,
      authInputType: action.payload.response!.inputType,
    };
  },
  [types.SIGNUP_FAIL](state: IUserState, action: Action<Response<SignUp>>): IUserState {
    return {
      ...state,
      isLoggedIn: false,
      id: "-1",
      name: "",
      token: {
        access: "",
        created: 0,
        expires: 0,
      },
      email: "",
      phone: "",
      password: "",
      authInputType: InputType.None,
    };
  },
  [types.RESET_PASSWORD_REQUEST](
    state: IUserState,
    action: Action<ResetPasswordRequest>
  ): IUserState {
    return state;
  },
  [types.RESET_PASSWORD_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.RESET_PASSWORD_FAIL](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.CHANGE_EMAIL_OR_PHONE_REQUEST](
    state: IUserState,
    action: Action<ChangeEmailOrPhoneRequest>
  ): IUserState {
    return state;
  },
  [types.CHANGE_EMAIL_OR_PHONE_RESPONSE](
    state: IUserState,
    action: Action<Response<ChangeEmailOrPhone>>
  ): IUserState {
    const input = action.payload.response!.inputType;
    const newEmail = input == InputType.Email ? action.payload.response!.newEmail : "";
    const newPhone = input == InputType.Phone ? action.payload.response!.newPhone : "";
    return { ...state, email: newEmail, phone: newPhone, authInputType: input };
  },
  [types.CHANGE_EMAIL_OR_PHONE_FAIL](
    state: IUserState,
    action: Action<Response<ChangeEmailOrPhone>>
  ): IUserState {
    return state;
  },
  [types.CHANGE_PASSWORD_REQUEST](
    state: IUserState,
    action: Action<ChangePasswordRequest>
  ): IUserState {
    return {
      ...state,
      token: action.payload.token,
    };
  },
  [types.CHANGE_PASSWORD_RESPONSE](
    state: IUserState,
    action: Action<Response<ChangePassword>>
  ): IUserState {
    return { ...state, password: action.payload.response!.newPassword };
  },
  [types.CHANGE_PASSWORD_FAIL](
    state: IUserState,
    action: Action<Response<ChangePassword>>
  ): IUserState {
    return state;
  },
  [types.GENERATE_CODE_REQUEST](
    state: IUserState,
    action: Action<GenerateCodeRequest>
  ): IUserState {
    return state;
  },
  [types.GENERATE_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.GENERATE_CODE_FAIL](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.VERIFY_CODE_REQUEST](state: IUserState, action: Action<VerifyCodeRequest>): IUserState {
    return state;
  },
  [types.VERIFY_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.VERIFY_CODE_FAIL](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.CANCEL_CODE_REQUEST](state: IUserState, action: Action<CancelCodeRequest>): IUserState {
    return state;
  },
  [types.CANCEL_CODE_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.CANCEL_CODE_FAIL](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
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
