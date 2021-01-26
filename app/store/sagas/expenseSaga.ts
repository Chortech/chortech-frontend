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
  GetUserActivitiesRequest,
  GetUserActivityRequest,
  AddActivityRequest,
  DeleteActivityRequest,
  EditActivityRequest,
} from "../../models/requests/axios/user";
import {
  AddExpense,
  UserExpenses,
  UserExpense,
  ExpenseComments,
  EditExpense,
  UserActivities,
  UserActivity,
  AddActivity,
  DeleteActivity,
  EditActivity,
} from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { ExpenseAPI } from "../../services/api/axios/expenseApi";
import { Response } from "../../models/responses/axios/response";
import * as expenseActions from "../actions/expenseActions";
import * as friendActions from "../actions/friendActions";
import * as friendSaga from "./friendSaga";

export function* getUserActivitiesAsync(action: Action<GetUserActivitiesRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<UserActivities> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getActivities();

  if (response.success) {
    yield put(expenseActions.onGetUserActivitiesResponse(response));
  } else {
    yield put(expenseActions.onGetUserActivitiesFail());
    if (response.status == 404) {
      ToastAndroid.show("فعالیتی وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getUserActivityAsync(action: Action<GetUserActivityRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<UserActivity> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.getActivity();

  if (response.success) {
    yield put(expenseActions.onGetUserActivityResponse(response));
  } else {
    yield put(expenseActions.onGetUserActivityFail());
    if (response.status == 404) {
      ToastAndroid.show("فعالیت وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* addActivityAsync(action: Action<AddActivityRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<AddActivity> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.addActivity();

  if (response.success) {
    yield put(expenseActions.onAddActivityResponse(response));
  } else {
    yield put(expenseActions.onAddActivityFail());
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* deleteActivityAsync(action: Action<DeleteActivityRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<DeleteActivity> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.deleteActivity();

  if (response.success) {
    yield put(expenseActions.onDeleteActivityResponse(response));
  } else {
    yield put(expenseActions.onDeleteActivityFail());
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* editActivityAsync(action: Action<EditActivityRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<EditActivity> = {
    success: false,
    status: -1,
  };

  let api: ExpenseAPI = new ExpenseAPI(token);
  response = yield api.editActivity();

  if (response.success) {
    yield put(expenseActions.onEditActivityResponse(response));
  } else {
    yield put(expenseActions.onEditActivityFail());
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* getUserExpensesAsync(action: Action<GetUserExpensesRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<UserExpenses> = {
    success: false,
    status: -1,
  };
  yield call(friendSaga.getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));

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
  yield put(expenseActions.onLoadingDisable());
}

export function* getUserExpenseAsync(action: Action<GetExpenseRequest>) {
  yield put(expenseActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<UserExpense> = {
    success: false,
    status: -1,
  };

  yield call(friendSaga.getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));

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
    yield put(expenseActions.onAddExpenseFail());
    if (response.status == 401) {
      ToastAndroid.show("خطای اجازه دسترسی به سرور", ToastAndroid.SHORT);
    } else if (response.status == 403) {
      ToastAndroid.show("خطای اجازه دسترسی به سرور", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("هزینه با این مشخصات وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}

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
    ToastAndroid.show("هزینه با موفقیت ویرایش شد", ToastAndroid.SHORT);
  } else {
    yield put(expenseActions.onEditExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
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
    ToastAndroid.show("هزینه با موفقیت حذف شد", ToastAndroid.SHORT);
    navigationRef.current?.goBack();
  } else {
    yield put(expenseActions.onDeleteExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(expenseActions.onLoadingDisable());
}

export function* addCommentAsync(action: Action<AddCommentRequest>) {
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
    ToastAndroid.show("یادداشت با موفقیت اضافه شد", ToastAndroid.SHORT);
    navigationRef.current?.goBack();
  } else {
    yield put(expenseActions.onAddExpenseFail());
    if (response.status == -2) {
      ToastAndroid.show("شما جزو اعضای این هزینه نیستید", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سیستم رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("این هزینه وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  yield put(expenseActions.onLoadingDisable());
}
