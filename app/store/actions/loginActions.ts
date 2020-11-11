import * as types from "./types";
import { Action } from "../../models/actions/action";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";

export function requestLogin(
  email: string,
  phone: string,
  password: string
): Action<LoginRequest> {
  return {
    type: types.LOGIN_REQUEST,
    payload: {
      email,
      phone,
      password,
    },
  };
}

export function loginFailed(): Action<any> {
  return {
    type: types.LOGIN_FAILED,
    payload: {},
  };
}

export function onLoginResponse(
  response: LoginResponse
): Action<LoginResponse> {
  return {
    type: types.LOGIN_RESPONSE,
    payload: response,
  };
}

// export function enableLoader() {
//   return {
//     type: types.LOGIN_ENABLE_LOADER,
//   };
// }

// export function disableLoader() {
//   return {
//     type: types.LOGIN_DISABLE_LOADER,
//   };
// }

export function logOut(): Action<any> {
  return {
    type: types.LOG_OUT,
    payload: {},
  };
}
