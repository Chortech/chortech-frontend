import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddCommentRequest,
  AddPaymentRequest,
  DeletePaymentRequest,
  EditPaymentRequest,
  GetPaymentRequest,
} from "../../models/requests/axios/user";
import { AddPayment } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { PaymentAPI } from "../../services/api/axios/paymentApi";
import { Response } from "../../models/responses/axios/response";
import * as paymentActions from "../actions/paymentActions";
import messages from "../../assets/resources/messages";
import { Payment } from "../../models/other/axios/Payment";

export function* getUserPaymentAsync(action: Action<GetPaymentRequest>) {
  yield put(paymentActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<Payment> = {
    success: false,
    status: -1,
  };

  let api: PaymentAPI = new PaymentAPI(token);
  response = yield api.getPayment(id);

  if (response.success) {
    yield put(paymentActions.onGetUserPaymentResponse(response));
  } else {
    if (response.status == 404) {
      ToastAndroid.show(messages.noPayment, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(paymentActions.onLoadingDisable());
}

export function* addPaymentAsync(action: Action<AddPaymentRequest>) {
  yield put(paymentActions.onLoadingEnable());
  const { token, from, to, amount, paid_at, group, notes } = action.payload;
  let response: Response<AddPayment> = {
    success: false,
    status: -1,
  };

  let api: PaymentAPI = new PaymentAPI(token);
  response = yield api.addPayment(from, to, amount, paid_at, group, notes);

  if (response.success) {
    yield put(paymentActions.onAddPaymentResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show(messages.paymentAddedSuccess, ToastAndroid.SHORT);
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(paymentActions.onLoadingDisable());
}

export function* editPaymentAsync(action: Action<EditPaymentRequest>) {
  yield put(paymentActions.onLoadingEnable());
  const { token, id, amount, paid_at, group, notes } = action.payload;
  let response: Response<Payment> = {
    success: false,
    status: -1,
  };

  let api: PaymentAPI = new PaymentAPI(token);
  response = yield api.editPayment(id, amount, paid_at, group, notes);

  if (response.success) {
    yield put(paymentActions.onEditPaymentResponse(response));
    navigationRef.current?.goBack();
    ToastAndroid.show(messages.paymentEditedSuccess, ToastAndroid.SHORT);
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(paymentActions.onLoadingDisable());
}

export function* deletePaymentAsync(action: Action<DeletePaymentRequest>) {
  yield put(paymentActions.onLoadingEnable());
  const { token, id } = action.payload;

  let api: PaymentAPI = new PaymentAPI(token);
  let response: Response<null> = yield api.deletePayment(id);

  if (response.success) {
    yield put(paymentActions.onDeletePaymentResponse(response));
    ToastAndroid.show(messages.paymentDeletedSuccess, ToastAndroid.SHORT);
    navigationRef.current?.goBack();
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(paymentActions.onLoadingDisable());
}

export function* addPaymentCommentAsync(action: Action<AddCommentRequest>) {
  yield put(paymentActions.onLoadingEnable());
  const { token, text, created_at, id } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  let api: PaymentAPI = new PaymentAPI(token);
  response = yield api.addComment(text, created_at, id);

  if (response.success) {
    yield put(paymentActions.onAddCommentResponse(response));
    navigationRef.current?.goBack();
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(paymentActions.onLoadingDisable());
}
