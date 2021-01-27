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
  GetFriendBalanceRequest,
  GetFriendsBalanceRequest,
} from "../../models/requests/axios/user";
import {
  UserExpenses,
  AddExpense,
  UserExpense,
  ExpenseComments,
  EditExpense,
  FriendBalance,
} from "../../models/responses/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";

export function onGetUserExpensesRequest(token: Token): Action<GetUserExpensesRequest> {
  return {
    type: types.GET_USER_EXPENSES_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserExpensesResponse(
  response: Response<UserExpenses>
): Action<Response<UserExpenses>> {
  return {
    type: types.GET_USER_EXPENSES_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetUserExpensesFail(): Action<Response<UserExpenses>> {
  return {
    type: types.GET_USER_EXPENSES_FAIL,
    payload: {
      success: false,
      status: -1,
    },
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

export function onGetUserExpenseResponse(
  response: Response<UserExpense>
): Action<Response<UserExpense>> {
  return {
    type: types.GET_USER_EXPENSE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetUserExpenseFail(): Action<Response<UserExpense>> {
  return {
    type: types.GET_USER_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetExpenseCommentsRequest(
  token: Token,
  expenseId: string
): Action<GetExpenseCommentsRequest> {
  return {
    type: types.GET_COMMENTS_REQUEST,
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
    type: types.GET_COMMENTS_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetExpenseCommentsFail(): Action<Response<ExpenseComments>> {
  return {
    type: types.GET_COMMENTS_FAIL,
    payload: {
      success: false,
      status: -1,
    },
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
      group: group,
      notes: notes,
      participants: participants,
      category: category,
    },
  };
}

export function onAddExpenseResponse(response: Response<AddExpense>): Action<Response<AddExpense>> {
  return {
    type: types.ADD_EXPENSE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddExpenseFail(): Action<Response<AddExpense>> {
  return {
    type: types.ADD_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
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
      group: group,
      notes: notes,
      participants: participants,
      category: category,
    },
  };
}

export function onEditExpenseResponse(response: Response<null>): Action<Response<null>> {
  return {
    type: types.EDIT_EXPENSE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
    },
  };
}

export function onEditExpenseFail(): Action<Response<EditExpense>> {
  return {
    type: types.EDIT_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
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
    payload: {
      success: response.success,
      status: response.status,
    },
  };
}

export function onDeleteExpenseFail(): Action<Response<null>> {
  return {
    type: types.DELETE_EXPENSE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onAddCommentRequest(
  token: Token,
  text: string,
  created_at: number,
  id: string
): Action<AddCommentRequest> {
  return {
    type: types.ADD_COMMENT_REQUEST,
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
    type: types.ADD_COMMENT_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
    },
  };
}

export function onAddCommentFail(): Action<Response<null>> {
  return {
    type: types.ADD_COMMENT_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetFriendsBalanceRequest(token: Token): Action<GetFriendsBalanceRequest> {
  return {
    type: types.GET_FRIENDS_BALANCE_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetFriendsBalanceResponse(
  response: Response<FriendBalance[]>
): Action<Response<FriendBalance[]>> {
  return {
    type: types.GET_FRIENDS_BALANCE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetFriendsBalanceFail(): Action<Response<FriendBalance[]>> {
  return {
    type: types.GET_FRIENDS_BALANCE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetFriendBalanceRequest(
  token: Token,
  friendId: string
): Action<GetFriendBalanceRequest> {
  return {
    type: types.GET_FRIEND_BALANCE_REQUEST,
    payload: {
      token: token,
      friendId: friendId,
    },
  };
}

export function onGetFriendBalanceResponse(
  response: Response<FriendBalance>
): Action<Response<FriendBalance>> {
  return {
    type: types.GET_FRIEND_BALANCE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetFriendBalanceFail(): Action<Response<FriendBalance>> {
  return {
    type: types.GET_FRIEND_BALANCE_FAIL,
    payload: {
      success: false,
      status: -1,
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
