import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { InputType } from "../../utils/inputTypes";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import { ChangePasswordRequest } from "../../models/requests/axios/auth";
import { Response } from "../../models/responses/axios/response";
import {
  ChangeEmailOrPhone,
  ChangePassword,
  Login,
  SignUp,
} from "../../models/responses/axios/auth";

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
  [types.RESET_PASSWORD_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
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
