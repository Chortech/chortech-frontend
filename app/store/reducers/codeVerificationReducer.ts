import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { ILoginState } from "../../models/reducers/login";
import { LoginRequest } from "../../models/requests/login";
import { LoginResponse } from "../../models/responses/login";
import { IdentifyAccountRequest } from "../../models/requests/identify";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { GenerateCodeRequest } from "../../models/requests/generateCode";
import { InputType } from "../../utils/inputTypes";

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

export const codeVerificationReducer = createReducer(initialState, {
  [types.GENERATE_CODE_REQUEST](
    state: ILoginState,
    action: Action<GenerateCodeRequest>
  ) {
    return {
      ...state,
      email: action.payload.email,
      phone: action.payload.phone,
      inputType: action.payload.inputType,
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
