import { put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as activityActions from "../actions/activityActions";
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
import { navigationRef } from "../../navigation/navigationService";

export function* addActivityAsync(action: Action<AddActivityRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { userId, type, groupId, expenseId, debtId } = action.payload;
  let response: AddActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addActivity(userId, type, groupId, expenseId, debtId);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddActivityResponse(response));
  } else {
    yield put(activityActions.onAddActivityFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addExpenseAsync(action: Action<AddExpenseRequest>) {
  yield put(activityActions.onLoadingEnable());
  const {
    userId,
    activityName,
    description,
    category,
    totalPrice,
  } = action.payload;
  let response: AddExpenseResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addExpense(
      userId,
      activityName,
      description,
      category,
      totalPrice
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddExpenseResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show("فعالیت با موفقیت اضافه شد.", ToastAndroid.SHORT);
  } else {
    yield put(activityActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addDebtAsync(action: Action<AddDebtRequest>) {
  yield put(activityActions.onLoadingEnable());
  const {
    userId,
    activityName,
    description,
    category,
    debt,
    creditorId,
  } = action.payload;
  let response: AddDebtResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addDebt(
      userId,
      activityName,
      description,
      category,
      debt,
      creditorId
    );
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddDebtResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show("فعالیت با موفقیت اضافه شد.", ToastAndroid.SHORT);
  } else {
    yield put(activityActions.onAddDebtFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addParticipantAsync(action: Action<AddParticipantRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { expenseId, userId, share } = action.payload;
  let response: AddParticipantResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addParticipant(expenseId, userId, share);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddParticipantResponse(response));
  } else {
    yield put(activityActions.onAddParticipantFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteActivityAsync(action: Action<DeleteActivityRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteActivity(id);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onDeleteActivityResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(activityActions.onDeleteActivityFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteExpenseAsync(action: Action<DeleteExpenseRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteExpenseResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteExpense(id);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onDeleteExpenseResponse(response));
  } else {
    yield put(activityActions.onDeleteExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteDebtAsync(action: Action<DeleteDebtRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteDebtResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteDebt(id);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onDeleteDebtResponse(response));
  } else {
    yield put(activityActions.onDeleteDebtFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteParticipantAsync(
  action: Action<DeleteParticipantRequest>
) {
  yield put(activityActions.onLoadingEnable());
  const { id } = action.payload;
  let response: DeleteParticipantResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteParticipant(id);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onDeleteParticipantResponse(response));
  } else {
    yield put(activityActions.onDeleteParticipantFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
