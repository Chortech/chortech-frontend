import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { ResetPasswordRequest } from "../../models/requests/resetPassword";
import { ResetPasswordResponse } from "../../models/responses/resetPassword";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

const initialState: ILoginState = {
  isLoggedIn: false,
  loading: false,
  id: "-1",
  name: "",
  email: "",
  phone: "",
  inputType: InputType.None,
  password: "",
};

export const resetPasswordReducer = createReducer(initialState, {
  [types.RESET_PASSWORD_REQUEST](
    state: ILoginState,
    action: Action<ResetPasswordRequest>
  ) {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  },
  [types.RESET_PASSWORD_RESPONSE](
    state: ILoginState,
    action: Action<ResetPasswordResponse>
  ) {
    return {
      ...state,
      id: action.payload.id,
    };
  },
  [types.RESET_PASSWORD_FAIL](
    state: ILoginState,
    action: Action<ResetPasswordRequest>
  ) {
    return {
      ...state,
      id: "-1",
      password: action.payload.password,
    };
  },
  [types.LOADING_ENABLED](state: ILoginState, action: Action<any>) {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOADING_DISABLED](state: ILoginState, action: Action<any>) {
    return {
      ...state,
      loading: false,
    };
  },
});
