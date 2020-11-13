import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { InputType } from "../../utils/inputTypes";
import * as types from "../actions/types";

const initialState: ILoginState = {
  isLoggedIn: false,
  loading: false,
  id: "-1",
  name: "",
  email: "",
  phone: "",
  password: "",
  inputType: InputType.None,
};

export const signUpReducer = createReducer(initialState, {
  [types.SIGNUP_REQUEST](state: ILoginState, action: Action<SignUpRequest>) {
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      inputType: action.payload.inputType,
    };
  },
  [types.SIGNUP_RESPONSE](state: ILoginState, action: Action<SignUpResponse>) {
    return {
      ...state,
      id: action.payload.id,
      isLoggedIn: true,
    };
  },
  [types.SIGNUP_FAIL](state: ILoginState, action: Action<SignUpResponse>) {
    return {
      ...state,
      id: "-1",
      name: "",
      email: "",
      phone: "",
      password: "",
      inputType: InputType.None,
    };
  },
});
