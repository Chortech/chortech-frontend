/* Login Reducer
 * handles login states in the app
 */
import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { InputType } from "../../utils/inputTypes";

import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";

import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";

import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";

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

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state: ILoginState, action: Action<LoginRequest>) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      password: action.payload.password,
      inputType: action.payload.inputType,
    };
  },
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
      id: "-1",
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
      id: "-1",
      email: "",
      phone: "",
      inputType: InputType.None,
      password: "",
    };
  },
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

// const signUpReducer = createReducer(initialState, {
//     [types.SIGNUP_REQUEST](state: ILoginState, action: Action<SignUpRequest>) {
//       return {
//         ...state,
//         name: action.payload.name,
//         email: action.payload.email,
//         phone: action.payload.phone,
//         password: action.payload.password,
//         inputType: action.payload.inputType,
//       };
//     },
//     [types.SIGNUP_RESPONSE](state: ILoginState, action: Action<SignUpResponse>) {
//       return {
//         ...state,
//         id: action.payload.id,
//         isLoggedIn: true,
//       };
//     },
//     [types.SIGNUP_FAIL](state: ILoginState, action: Action<SignUpResponse>) {
//       return {
//         ...state,
//         id: "-1",
//         name: "",
//         email: "",
//         phone: "",
//         password: "",
//         inputType: InputType.None,
//       };
//     },
//   });

// export default {loginReducer, signUpReducer}
// export default authReducer;
