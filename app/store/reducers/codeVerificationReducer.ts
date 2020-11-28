import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { GenerateCodeRequest } from "../../models/requests/codeVerification";
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

export const codeVerificationReducer = createReducer(initialState, {
  [types.GENERATE_CODE_REQUEST](
    state: IUserState,
    action: Action<GenerateCodeRequest>
  ) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      authInputType: action.payload.inputType,
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
