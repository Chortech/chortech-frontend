/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { InputType } from "../../utils/inputTypes";

const initialState: ILoginState = {
  isLoggedIn: false,
  loading: false,
  id: 0,
  email: "",
  phone: "",
  inputType: InputType.None,
  password: "",
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: Action<LoginRequest>) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      inputType: action.payload.inputType,
    };
  },
  //   [types.LOGIN_LOADING_ENDED](state: ILoginState) {
  //     return { ...state };
  //   },
  [types.LOGIN_RESPONSE](state: ILoginState, action: Action<LoginResponse>) {
    return {
      ...state,
      id: action.payload.id,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state: ILoginState) {
    return {
      ...state,
      isLoggedIn: false,
      id: 0,
      email: "",
      phone: "",
      inputType: InputType.None,
      password: "",
    };
  },
  [types.LOG_OUT](state: ILoginState) {
    return {
      isLoggedIn: false,
      loading: false,
      id: 0,
      email: "",
      phone: "",
      inputType: InputType.None,
      password: "",
    };
  },
});
