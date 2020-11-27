import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";

import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";
import { IUserState } from "../../models/reducers/default";
import { AddExpenseRequest } from "../../models/requests/addExpenseRequest";
import { AddExpenseResponse } from "../../models/responses/addExpenseResponse";
import { AddParticipantRequest } from "../../models/requests/addParticipantRequest";
import { AddParticipantResponse } from "../../models/responses/addParticipantResponse";
import { AddDebtRequest } from "../../models/requests/addDebtRequest";
import { AddDebtResponse } from "../../models/responses/addDebtResponse";
import { DeleteFriendRequest } from "../../models/requests/deleteFriend";
import { DeleteActivityRequest } from "../../models/requests/deleteActivity";
import { DeleteActivityResponse } from "../../models/responses/deleteActivity";
import { DeleteExpenseRequest } from "../../models/requests/deleteExpense";
import { DeleteDebtResponse } from "../../models/responses/deleteDebt";
import { DeleteExpenseResponse } from "../../models/responses/deleteExpense";
import { DeleteParticipantRequest } from "../../models/requests/deleteParticipant";
import { DeleteParticipantResponse } from "../../models/responses/deleteParticipant";

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
  [types.ADD_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<AddActivityRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.DELETE_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.DELETE_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<DeleteExpenseRequest>
  ) {
    return state;
  },
  [types.DELETE_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<DeleteExpenseResponse>
  ) {
    return state;
  },
  [types.DELETE_DEBT_REQUEST](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
  },
  [types.DELETE_DEBT_RESPONSE](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<DeleteActivityResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.DELETE_PARTICIPANT_REQUEST](
    state: IUserState,
    action: Action<DeleteParticipantRequest>
  ) {
    return state;
  },
  [types.DELETE_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<DeleteParticipantResponse>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<AddExpenseRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_EXPENSE_FAIL](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_DEBT_REQUEST](state: IUserState, action: Action<AddDebtRequest>) {
    return {
      ...state,
    };
  },
  [types.ADD_DEBT_RESPONSE](
    state: IUserState,
    action: Action<AddDebtResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_DEBT_FAIL](state: IUserState, action: Action<AddDebtResponse>) {
    return {
      ...state,
    };
  },
  [types.ADD_PARTICIPANT_REQUEST](
    state: IUserState,
    action: Action<AddParticipantRequest>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
    return {
      ...state,
    };
  },
  [types.ADD_PARTICIPANT_FAIL](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
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
