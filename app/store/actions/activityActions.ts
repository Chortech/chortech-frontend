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
import { DeleteActivityRequest } from "../../models/requests/deleteActivity";
import { DeleteActivityResponse } from "../../models/responses/deleteActivity";
import { DeleteFriendResponse } from "../../models/responses/deleteFriend";
import { DeleteExpenseRequest } from "../../models/requests/deleteExpense";
import { DeleteExpenseResponse } from "../../models/responses/deleteExpense";
import { DeleteDebtRequest } from "../../models/requests/deleteDebt";
import { DeleteDebtResponse } from "../../models/responses/deleteDebt";
import { DeleteParticipantRequest } from "../../models/requests/deleteParticipant";
import { DeleteParticipantResponse } from "../../models/responses/deleteParticipant";

export function requestAddActivity(
  userId: string,
  type: string,
  groupId?: string,
  expenseId?: string,
  debtId?: string
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
  response: AddActivityResponse
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

export function onDeleteActivityRequest(
  id: string
): Action<DeleteActivityRequest> {
  return {
    type: types.DELETE_ACTIVITY_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteActivityResponse(
  response: DeleteActivityResponse
): Action<DeleteFriendResponse> {
  return {
    type: types.DELETE_ACTIVITY_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteExpenseRequest(
  id: string
): Action<DeleteExpenseRequest> {
  return {
    type: types.DELETE_EXPENSE_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteExpenseResponse(
  response: DeleteExpenseResponse
): Action<DeleteExpenseResponse> {
  return {
    type: types.DELETE_EXPENSE_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteDebtRequest(id: string): Action<DeleteDebtRequest> {
  return {
    type: types.DELETE_DEBT_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteDebtResponse(
  response: DeleteDebtResponse
): Action<DeleteDebtResponse> {
  return {
    type: types.DELETE_DEBT_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function onDeleteParticipantRequest(
  id: string
): Action<DeleteParticipantRequest> {
  return {
    type: types.DELETE_PARTICIPANT_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onDeleteParticipantResponse(
  response: DeleteParticipantResponse
): Action<DeleteParticipantResponse> {
  return {
    type: types.DELETE_PARTICIPANT_RESPONSE,
    payload: {
      id: response.id,
      success: response.success,
    },
  };
}

export function requestAddExpense(
  description: string,
  category: string,
  totalPrice: string
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
  response: AddExpenseResponse
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
  description: string,
  category: string,
  debt: number,
  creditorId: string
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
  response: AddDebtResponse
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
  share: number
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
  response: AddParticipantResponse
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
