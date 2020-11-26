import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";

import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";
import { IUserState } from "../../models/reducers/default";

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

export const activityReducer = createReducer(initialState, {
  [types.ADD_ACTIVITY_REQUEST](state: IUserState, action: Action<AddActivityRequest>) {
    return {
      ...state,
    };
  },
  [types.ADD_ACTIVITY_RESPONSE](state: IUserState, action: Action<AddActivityResponse>) {
    return {
      ...state,
    };
  },
  [types.ADD_ACTIVITY_FAIL](state: IUserState, action: Action<AddActivityResponse>) {
    return {
      ...state,
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
