import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddExpenseRequest,
  GetUserExpensesRequest,
  GetExpenseRequest,
  AddCommentRequest,
  GetCommentRequest,
} from "../../models/requests/axios/user";
import {
  AddExpense,
  UserExpenses,
  UserExpense,
  AddComment,
  GetComment,
} from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { ExpenseAPI } from "../../services/api/axios/expenseApi";
import { Response } from "../../models/responses/axios/response";
import * as expenseActions from "../actions/expenseActions";

export function* addExpenseAsync(action: Action<AddExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, description, total, paid_at, group, notes, participants } = action.payload;
  let response: Response<AddExpense> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.addExpense(description, total, paid_at, participants, group, notes);

  if (response.success) {
    yield put(expenseActions.onAddExpenseResponse(response));
    yield put(expenseActions.onGetUserExpensesRequest(token));
    navigationRef.current?.goBack();
    ToastAndroid.show("هزینه با موفقیت اضافه شد", ToastAndroid.SHORT);
  } else {
    yield put(expenseActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getUserExpensesAsync(action: Action<GetUserExpensesRequest>) {
  const { token } = action.payload;
  let response: Response<UserExpenses> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getExpenses();

  if (response.success) {
    yield put(expenseActions.onGetUserExpensesResponse(response));
  } else {
    yield put(expenseActions.onGetUserExpensesFail());
    if (response.status == 404) {
      ToastAndroid.show("فعالیتی وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* getUserExpenseAsync(action: Action<GetExpenseRequest>) {
  const { token, id } = action.payload;
  let response: Response<UserExpense> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getExpense(id);

  if (response.success) {
    yield put(expenseActions.onGetUserExpenseResponse(response));
  } else {
    yield put(expenseActions.onGetUserExpenseFail());
    if (response.status == 404) {
      ToastAndroid.show("فعالیت وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* addCommentAsync(action: Action<AddCommentRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, text, created_at, id } = action.payload;
  let response: Response<AddComment> = {
    success: false,
    status: -1,
  };

  try {
    let api: ExpenseAPI = new ExpenseAPI(token);
    response = yield api.addComment(text, created_at, id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(expenseActions.onLoadingDisable());

  if (response.success) {
    yield put(expenseActions.onAddCommentResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show("یادداشت با موفقیت اضافه شد", ToastAndroid.SHORT);
  } else {
    yield put(expenseActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getCommentAsync(action: Action<GetCommentRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<GetComment> = {
    success: false,
    status: -1,
  };

  try {
    let api: ExpenseAPI = new ExpenseAPI(token);
    response = yield api.getComment(id);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(expenseActions.onLoadingDisable());

  if (response.success) {
    yield put(expenseActions.onGetCommentResponse(response));
  } else {
    yield put(expenseActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
