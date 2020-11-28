import createReducer from "../../lib/createReducer";
import * as types from "../actions/types";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import {
  AddActivityRequest,
  AddExpenseRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteParticipantRequest,
} from "../../models/requests/activity";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/activity";
import { InputType } from "../../utils/inputTypes";

const initialState: IUserState = {
  isLoggedIn: true,
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

export const activityReducer = createReducer(initialState, {
  [types.ADD_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<AddActivityRequest>
  ) {
    return state;
  },
  [types.ADD_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return state;
  },
  [types.ADD_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<AddActivityResponse>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_REQUEST](
    state: IUserState,
    action: Action<AddExpenseRequest>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return state;
  },
  [types.ADD_EXPENSE_FAIL](
    state: IUserState,
    action: Action<AddExpenseResponse>
  ) {
    return state;
  },
  [types.ADD_DEBT_REQUEST](state: IUserState, action: Action<AddDebtRequest>) {
    return state;
  },
  [types.ADD_DEBT_RESPONSE](
    state: IUserState,
    action: Action<AddDebtResponse>
  ) {
    return state;
  },
  [types.ADD_DEBT_FAIL](state: IUserState, action: Action<AddDebtResponse>) {
    return state;
  },
  [types.ADD_PARTICIPANT_REQUEST](
    state: IUserState,
    action: Action<AddParticipantRequest>
  ) {
    return state;
  },
  [types.ADD_PARTICIPANT_RESPONSE](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
    return state;
  },
  [types.ADD_PARTICIPANT_FAIL](
    state: IUserState,
    action: Action<AddParticipantResponse>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_REQUEST](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_RESPONSE](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
  },
  [types.DELETE_ACTIVITY_FAIL](
    state: IUserState,
    action: Action<DeleteActivityRequest>
  ) {
    return state;
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
  [types.DELETE_EXPENSE_FAIL](
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
  [types.DELETE_DEBT_FAIL](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
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
  [types.DELETE_PARTICIPANT_FAIL](
    state: IUserState,
    action: Action<DeleteDebtResponse>
  ) {
    return state;
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
