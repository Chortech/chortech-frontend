import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { IdentifyAccountRequest } from "../../models/requests/identifyAccount";
import { IdentifyAccountResponse } from "../../models/responses/identifyAccount";
import { InputType } from "../../utils/inputTypes";
import { IUserState } from "../../models/reducers/default";

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

export const IdentifyAccountReducer = createReducer(initialState, {
  [types.IDENTIFY_ACCOUNT_REQUEST](
    state: IUserState,
    action: Action<IdentifyAccountRequest>
  ) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      authInputType: action.payload.inputType,
    };
  },
  [types.IDENTIFY_ACCOUNT_RESPONSE](
    state: IUserState,
    action: Action<IdentifyAccountResponse>
  ) {
    return {
      ...state,
      id: action.payload.id,
    };
  },
  [types.IDENTIFY_ACCOUNT_FAIL](
    state: IUserState,
    action: Action<IdentifyAccountResponse>
  ) {
    return {
      ...state,
      id: "-1",
      email: "",
      phone: "",
      authInputType: InputType.None,
      password: "",
    };
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
