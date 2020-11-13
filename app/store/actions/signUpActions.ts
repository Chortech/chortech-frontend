import { Action } from "../../models/actions/action";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { InputType } from "../../utils/inputTypes";
import * as types from "./types";

export function requestSignUp(
  name: string,
  email: string,
  phone: string,
  password: string,
  inputType: InputType
): Action<SignUpRequest> {
  return {
    type: types.SIGNUP_REQUEST,
    payload: {
      name,
      email,
      phone,
      password,
      inputType,
    },
  };
}

export function onSignUpResponse(
  response: SignUpResponse
): Action<SignUpResponse> {
  return {
    type: types.SIGNUP_RESPONSE,
    payload: response,
  };
}

export function onSignUpFail(): Action<SignUpResponse> {
  return {
    type: types.SIGNUP_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}
