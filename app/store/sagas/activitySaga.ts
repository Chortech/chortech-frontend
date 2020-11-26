import { put } from "redux-saga/effects";
import { ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as activityActions from "../actions/activityActions";
import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";
import { AddExpenseRequest } from "../../models/requests/addExpenseRequest";
import { AddExpenseResponse } from "../../models/responses/addExpenseResponse";
import { AddParticipantRequest } from "../../models/requests/addParticipantRequest";
import { AddParticipantResponse } from "../../models/responses/addParticipantResponse";
import { AddDebtRequest } from "../../models/requests/addDebtRequest";
import { AddDebtResponse } from "../../models/responses/addDebtResponse";

export function* addActivityAsync(action: Action<AddActivityRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { userId, type, groupId, expenseId, debtId } = action.payload;
  let response: AddActivityResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addActivity(userId, type, groupId, expenseId, debtId);
    console.log("add activity response: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
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
  const { description, category, totalPrice } = action.payload;
  let response: AddExpenseResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addExpense(description, category, totalPrice);
    console.log("add expense response: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddExpenseResponse(response));
  } else {
    yield put(activityActions.onAddExpenseFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addDebtAsync(action: Action<AddDebtRequest>) {
  yield put(activityActions.onLoadingEnable());
  const { description, category, debt, creditorId } = action.payload;
  let response: AddDebtResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addDebt(description, category, debt, creditorId);
    console.log("add debt response: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddDebtResponse(response));
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
    console.log("add Participant response: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(activityActions.onLoadingDisable());

  if (response.success) {
    yield put(activityActions.onAddParticipantResponse(response));
  } else {
    yield put(activityActions.onAddParticipantFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
