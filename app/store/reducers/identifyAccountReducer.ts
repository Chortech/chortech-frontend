import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { IdentifyAccountRequest } from "../../models/requests/identify";
import { IdentifyAccountResponse } from "../../models/responses/identify";

const initialState: ILoginState = {
  isLoggedIn: false,
  loading: false,
  id: 0,
  email: "",
  phone: "",
  password: "",
};

export const IdentifyAccountReducer = createReducer(initialState, {
  [types.IDENTIFY_REQUEST](
    state: ILoginState,
    action: Action<IdentifyAccountRequest>
  ) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
    };
  },
  [types.IDENTIFY_RESPONSE](
    state: ILoginState,
    action: Action<IdentifyAccountResponse>
  ) {
    return {
      ...state,
      id: action.payload.id,
    };
  },
  [types.IDENTIFY_FAIL](
    state: ILoginState,
    action: Action<IdentifyAccountResponse>
  ) {
    return {
      ...state,
      id: 0,
    };
  },
});
