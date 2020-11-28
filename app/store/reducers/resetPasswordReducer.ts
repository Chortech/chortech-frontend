import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

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

export const resetPasswordReducer = createReducer(initialState, {
  [types.RESET_PASSWORD_REQUEST](
    state: IUserState,
    action: Action<ResetPasswordRequest>
  ) {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  },
  [types.RESET_PASSWORD_RESPONSE](
    state: IUserState,
    action: Action<ResetPasswordResponse>
  ) {
    return {
      ...state,
      id: action.payload.id,
    };
  },
  [types.RESET_PASSWORD_FAIL](
    state: IUserState,
    action: Action<ResetPasswordResponse>
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
