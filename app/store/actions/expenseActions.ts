import { Action } from "../../models/actions/action";
import { Participant } from "../../models/other/axios/Participant";
import { Token } from "../../models/other/axios/Token";
import {
  GetUserExpensesRequest,
  AddExpenseRequest,
  GetExpenseRequest,
  AddCommentRequest,
  GetCommentRequest,
} from "../../models/requests/axios/user";
import {
  UserExpenses,
  AddExpense,
  UserExpense,
  AddComment,
  GetComment,
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

export function onAddExpenseRequest(
  token: Token,
  description: string,
  total: number,
  paid_at: number,
  participants: Array<Participant>,
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

export function onAddCommentResponse(response: Response<AddComment>): Action<Response<AddComment>> {
  return {
    type: types.ADD_COMMENT_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onAddCommentFail(): Action<Response<AddComment>> {
  return {
    type: types.ADD_COMMENT_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onGetCommentRequest(token: Token, id: string): Action<GetCommentRequest> {
  return {
    type: types.GET_COMMENT_REQUEST,
    payload: {
      token: token,
      id: id,
    },
  };
}

export function onGetCommentResponse(response: Response<GetComment>): Action<Response<GetComment>> {
  return {
    type: types.GET_COMMENT_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onGetCommentFail(): Action<Response<GetComment>> {
  return {
    type: types.GET_COMMENT_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

// export function onDeleteExpenseRequest(id: string): Action<DeleteExpenseRequest> {
//   return {
//     type: types.DELETE_EXPENSE_REQUEST,
//     payload: {
//       id: id,
//     },
//   };
// }

// export function onDeleteExpenseResponse(
//   response: DeleteExpenseResponse
// ): Action<DeleteExpenseResponse> {
//   return {
//     type: types.DELETE_EXPENSE_RESPONSE,
//     payload: {
//       id: response.id,
//       success: response.success,
//     },
//   };
// }

// export function onDeleteExpenseFail(): Action<DeleteExpenseResponse> {
//   return {
//     type: types.DELETE_EXPENSE_FAIL,
//     payload: {
//       id: "-1",
//       success: false,
//     },
//   };
// }

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
