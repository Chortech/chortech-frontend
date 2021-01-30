import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddExpenseRequest,
  GetUserExpensesRequest,
  GetExpenseRequest,
  AddCommentRequest,
  GetExpenseCommentsRequest,
  EditExpenseRequest,
  DeleteExpenseRequest,
  GetGroupExpensesRequest,
} from "../../models/requests/axios/user";
import { AddExpense, ExpenseComments, GroupExpenses } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { ExpenseAPI } from "../../services/api/axios/expenseApi";
import { Response } from "../../models/responses/axios/response";
import * as expenseActions from "../actions/expenseActions";
import * as friendActions from "../actions/friendActions";
import * as friendSaga from "./friendSaga";
import messages from "../../assets/resources/messages";
import { Expense } from "../../models/other/axios/Expense";

export function* getUserExpensesAsync(action: Action<GetUserExpensesRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<Expense[]> = {
    success: false,
    status: -1,
  };
  yield call(friendSaga.getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getUserExpenses();

  if (response.success) {
    yield put(expenseActions.onGetUserExpensesResponse(response));
  } else {
    if (response.status == 404) {
      ToastAndroid.show(messages.noExpenses, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getUserExpenseAsync(action: Action<GetExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<Expense> = {
    success: false,
    status: -1,
  };

  yield call(friendSaga.getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getUserExpense(id);

  if (response.success) {
    yield put(expenseActions.onGetUserExpenseResponse(response));
  } else {
    if (response.status == 404) {
      ToastAndroid.show(messages.noExpense, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getExpenseCommentsAsync(action: Action<GetExpenseCommentsRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, expenseId } = action.payload;
  let response: Response<ExpenseComments> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getExpenseComments(expenseId);

  if (response.success) {
    yield put(expenseActions.onGetExpenseCommentsResponse(response));
  } else {
    if (response.status == 401) {
      ToastAndroid.show(messages.notAuthorized, ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show(messages.notAuthorized, ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show(messages.noExpense, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* addExpenseAsync(action: Action<AddExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const {
    token,
    description,
    total,
    paid_at,
    group,
    notes,
    participants,
    category,
  } = action.payload;
  let response: Response<AddExpense> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.addExpense(
    description,
    total,
    paid_at,
    participants,
    category,
    group,
    notes
  );

  if (response.success) {
    yield put(expenseActions.onAddExpenseResponse(response));
    yield call(getUserExpensesAsync, expenseActions.onGetUserExpensesRequest(token));
    navigationRef.current?.goBack();
    ToastAndroid.show(messages.expenseAddedSuccess, ToastAndroid.SHORT);
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* editExpenseAsync(action: Action<EditExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const payload = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(payload.token);
  response = yield api.updateExpense(
    payload.expenseId,
    payload.description,
    payload.total,
    payload.paid_at,
    payload.participants,
    payload.category,
    payload.group,
    payload.notes
  );

  if (response.success) {
    yield put(expenseActions.onEditExpenseResponse(response));
    yield call(
      getUserExpenseAsync,
      expenseActions.onGetUserExpenseRequest(payload.token, payload.expenseId)
    );
    yield call(getUserExpensesAsync, expenseActions.onGetUserExpensesRequest(payload.token));
    navigationRef.current?.goBack();
    navigationRef.current?.goBack();
    ToastAndroid.show(messages.expenseEditedSucess, ToastAndroid.SHORT);
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* deleteExpenseAsync(action: Action<DeleteExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { expenseId, token } = action.payload;

  let api: ExpenseAPI = new ExpenseAPI(token);
  let response: Response<null> = yield api.deleteExpense(expenseId);

  if (response.success) {
    yield put(expenseActions.onDeleteExpenseResponse(response));
    yield call(getUserExpensesAsync, expenseActions.onGetUserExpensesRequest(token));
    ToastAndroid.show(messages.expenseDeletedSucces, ToastAndroid.SHORT);
    navigationRef.current?.goBack();
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* addExpenseCommentAsync(action: Action<AddCommentRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, text, created_at, id } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.addComment(text, created_at, id);

  if (response.success) {
    yield put(expenseActions.onAddCommentResponse(response));
    yield call(getExpenseCommentsAsync, expenseActions.onGetExpenseCommentsRequest(token, id));
    navigationRef.current?.goBack();
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.notExpenseParticipant, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show(messages.noExpense, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getGroupsExpensesAsync(action: Action<GetGroupExpensesRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { groupId, token } = action.payload;
  let api: ExpenseAPI = new ExpenseAPI(token);
  let response: Response<GroupExpenses> = yield api.getGroupExpenses(groupId);

  if (response.success) {
    yield put(expenseActions.onGetGroupExpensesResponse(response));
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }

  yield put(expenseActions.onLoadingDisable());
}
