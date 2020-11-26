import * as types from "./types";
import { Action } from "../../models/actions/action";
import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";
import { Participant } from "../../models/other/Participant";
import { AddExpenseRequest } from "../../models/requests/addExpenseRequest";
import { AddExpenseResponse } from "../../models/responses/addExpenseResponse";
import { AddParticipantResponse } from "../../models/responses/addParticipantResponse";
import { AddParticipantRequest } from "../../models/requests/addParticipantRequest";
import { AddDebtRequest } from "../../models/requests/addDebtRequest";
import { AddDebtResponse } from "../../models/responses/addDebtResponse";

export function requestAddActivity(
  userId: string,
  type: string,
  groupId?: string,
  expenseId?: string,
  debtId?: string,
): Action<AddActivityRequest> {
  return {
    type: types.ADD_ACTIVITY_REQUEST,
    payload: {
      userId,
      type,
      groupId,
      expenseId,
      debtId,
    },
  };
}

export function onAddActivityResponse(
  response: AddActivityResponse,
): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_RESPONSE,
    payload: response,
  };
}

export function onAddActivityFail(): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function requestAddExpense(
  description: string,
  category: string,
  totalPrice: string,
): Action<AddExpenseRequest> {
  return {
    type: types.ADD_EXPENSE_REQUEST,
    payload: {
      description,
      category,
      totalPrice,
    },
  };
}

export function onAddExpenseResponse(
  response: AddExpenseResponse,
): Action<AddExpenseResponse> {
  return {
    type: types.ADD_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onAddExpenseFail(): Action<AddExpenseResponse> {
  return {
    type: types.ADD_EXPENSE_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function requestAddDebt(
  description: String,
  category: String,
  debt: number,
  creditorId: string,
): Action<AddDebtRequest> {
  return {
    type: types.ADD_DEBT_REQUEST,
    payload: {
      description,
      category,
      debt,
      creditorId,
    },
  };
}

export function onAddDebtResponse(
  response: AddDebtResponse,
): Action<AddDebtResponse> {
  return {
    type: types.ADD_DEBT_RESPONSE,
    payload: response,
  };
}

export function onAddDebtFail(): Action<AddDebtResponse> {
  return {
    type: types.ADD_DEBT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function requestAddParticipant(
  expenseId: string,
  userId: string,
  share: number,
): Action<AddParticipantRequest> {
  return {
    type: types.ADD_PARTICIPANT_REQUEST,
    payload: {
      expenseId,
      userId,
      share,
    },
  };
}

export function onAddParticipantResponse(
  response: AddParticipantResponse,
): Action<AddParticipantResponse> {
  return {
    type: types.ADD_PARTICIPANT_RESPONSE,
    payload: response,
  };
}

export function onAddParticipantFail(): Action<AddParticipantResponse> {
  return {
    type: types.ADD_PARTICIPANT_FAIL,
    payload: {
      id: "-1",
      success: false,
    },
  };
}

export function onLoadingEnable(): Action<any> {
  return {
    type: types.LOADING_ENABLED,
    payload: {},
  };
}

export function onLoadingDisable(): Action<any> {
  return {
    type: types.LOADING_DISABLED,
    payload: {},
  };
}