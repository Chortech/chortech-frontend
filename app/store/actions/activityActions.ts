import * as types from "./types";
import { Action } from "../../models/actions/action";
import {
  AddActivityRequest,
  AddExpenseRequest,
  AddDebtRequest,
  AddParticipantRequest,
  DeleteActivityRequest,
  DeleteExpenseRequest,
  DeleteDebtRequest,
  DeleteParticipantRequest,
} from "../../models/requests/activity";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteDebtResponse,
  DeleteParticipantResponse,
} from "../../models/responses/activity";
import { DeleteFriendResponse } from "../../models/responses/friend";

export function onAddActivityRequest(
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

export function onAddExpenseRequest(
  userId: string,
  activityName: string,
  description: string,
  category: string,
  totalPrice: string
): Action<AddExpenseRequest> {
  return {
    type: types.ADD_EXPENSE_REQUEST,
    payload: {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      totalPrice: totalPrice,
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

export function onAddDebtRequest(
  userId: string,
  activityName: string,
  description: string,
  category: string,
  debt: number,
  creditorId: string
): Action<AddDebtRequest> {
  return {
    type: types.ADD_DEBT_REQUEST,
    payload: {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      debt: debt,
      creditorId: creditorId,
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

export function onAddParticipantRequest(
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

export function onDeleteActivityFail(): Action<DeleteActivityResponse> {
  return {
    type: types.DELETE_ACTIVITY_FAIL,
    payload: {
      id: "-1",
      success: false,
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

export function onDeleteExpenseFail(): Action<DeleteExpenseResponse> {
  return {
    type: types.DELETE_EXPENSE_FAIL,
    payload: {
      id: "-1",
      success: false,
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

export function onDeleteDebtFail(): Action<DeleteDebtResponse> {
  return {
    type: types.DELETE_DEBT_FAIL,
    payload: {
      id: "-1",
      success: false,
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

export function onDeleteParticipantFail(): Action<DeleteParticipantResponse> {
  return {
    type: types.DELETE_PARTICIPANT_FAIL,
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
