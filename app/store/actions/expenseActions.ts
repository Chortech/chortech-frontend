import { Action } from "../../models/actions/action";
import { Participant } from "../../models/other/axios/Participant";
import { Token } from "../../models/other/axios/Token";
import {
  GetUserExpensesRequest,
  AddExpenseRequest,
  GetExpenseRequest,
  AddCommentRequest,
  GetExpenseCommentsRequest,
  EditExpenseRequest,
  DeleteExpenseRequest,
  GetGroupExpensesRequest,
} from "../../models/requests/axios/user";
import { AddExpense, ExpenseComments, GroupExpenses } from "../../models/responses/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";
import { Expense } from "../../models/other/axios/Expense";

export function onGetUserExpensesRequest(token: Token): Action<GetUserExpensesRequest> {
  return {
    type: types.GET_USER_EXPENSES_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserExpensesResponse(
  response: Response<Expense[]>
): Action<Response<Expense[]>> {
  return {
    type: types.GET_USER_EXPENSES_RESPONSE,
    payload: response,
  };
}

export function onGetUserExpenseRequest(token: Token, id: string): Action<GetExpenseRequest> {
  return {
    type: types.GET_USER_EXPENSE_REQUEST,
    payload: {
      token: token,
      id: id,
    },
  };
}

export function onGetUserExpenseResponse(response: Response<Expense>): Action<Response<Expense>> {
  return {
    type: types.GET_USER_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onGetExpenseCommentsRequest(
  token: Token,
  expenseId: string
): Action<GetExpenseCommentsRequest> {
  return {
    type: types.GET_EXPENSE_COMMENTS_REQUEST,
    payload: {
      token: token,
      expenseId: expenseId,
    },
  };
}

export function onGetExpenseCommentsResponse(
  response: Response<ExpenseComments>
): Action<Response<ExpenseComments>> {
  return {
    type: types.GET_EXPENSE_COMMENTS_RESPONSE,
    payload: response,
  };
}

export function onAddExpenseRequest(
  token: Token,
  description: string,
  total: number,
  paid_at: number,
  participants: Array<Participant>,
  category: number,
  group?: string,
  notes?: string
): Action<AddExpenseRequest> {
  return {
    type: types.ADD_EXPENSE_REQUEST,
    payload: {
      token: token,
      description: description,
      total: total,
      paid_at: paid_at,
      participants: participants,
      category: category,
      group: group,
      notes: notes,
    },
  };
}

export function onAddExpenseResponse(response: Response<AddExpense>): Action<Response<AddExpense>> {
  return {
    type: types.ADD_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onEditExpenseRequest(
  expenseId: string,
  token: Token,
  description: string,
  total: number,
  paid_at: number,
  participants: Array<Participant>,
  category: number,
  group?: string,
  notes?: string
): Action<EditExpenseRequest> {
  return {
    type: types.EDIT_EXPENSE_REQUEST,
    payload: {
      expenseId: expenseId,
      token: token,
      description: description,
      total: total,
      paid_at: paid_at,
      participants: participants,
      category: category,
      group: group,
      notes: notes,
    },
  };
}

export function onEditExpenseResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.EDIT_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onDeleteExpenseRequest(
  token: Token,
  expenseId: string
): Action<DeleteExpenseRequest> {
  return {
    type: types.DELETE_EXPENSE_REQUEST,
    payload: {
      expenseId: expenseId,
      token: token,
    },
  };
}

export function onDeleteExpenseResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.DELETE_EXPENSE_RESPONSE,
    payload: response,
  };
}

export function onAddCommentRequest(
  token: Token,
  text: string,
  created_at: number,
  id: string
): Action<AddCommentRequest> {
  return {
    type: types.ADD_EXPENSE_COMMENT_REQUEST,
    payload: {
      token: token,
      text: text,
      created_at: created_at,
      id: id,
    },
  };
}

export function onAddCommentResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.ADD_EXPENSE_COMMENT_RESPONSE,
    payload: response,
  };
}

export function onGetGroupExpensesRequest(
  token: Token,
  groupId: string
): Action<GetGroupExpensesRequest> {
  return {
    type: types.GET_GROUP_EXPENSES_REQUEST,
    payload: {
      token: token,
      groupId: groupId,
    },
  };
}

export function onGetGroupExpensesResponse(
  response: Response<GroupExpenses>
): Action<Response<GroupExpenses>> {
  return {
    type: types.GET_GROUP_EXPENSES_RESPONSE,
    payload: response,
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
