import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import { FetchUserRequest } from "../../models/requests/getUser";
import * as types from "../actions/types";

const initialState: IUserState = {
  loading: false,
  id: "-1",
  name: "",
  password: "",
  email: "",
  phone: "",
  credit: 0,
  balance: 0,
  friends: [],
  groups: [],
  activities: [],
};

export const userReducer = createReducer(initialState, {
  [types.FETCH_USER_REQUEST](
    state: IUserState,
    action: Action<FetchUserRequest>
  ) {
    return {
      ...state,
      id: action.payload.id,
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
