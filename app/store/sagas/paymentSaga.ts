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
import {
    EditPayment,
    AddPayment,
    UserPayment,
} from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { PaymentAPI } from "../../services/api/axios/paymentApi";
import { Response } from "../../models/responses/axios/response";
import * as paymentActions from "../actions/paymentActions";

export function* getUserPaymentAsync(action: Action<GetPaymentRequest>) {
    yield put(paymentActions.onLoadingEnable());
    const { token, id } = action.payload;
    let response: Response<UserPayment> = {
        success: false,
        status: -1,
    };

    let api: PaymentAPI = new PaymentAPI(token);
    response = yield api.getPayment(id);

    if (response.success) {
        yield put(paymentActions.onGetUserPaymentResponse(response));
    } else {
        yield put(paymentActions.onGetUserPaymentFail());
        if (response.status == 404) {
            ToastAndroid.show("پرداخت وجود ندارد", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
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
        ToastAndroid.show("پرداخت با موفقیت اضافه شد", ToastAndroid.SHORT);
    } else {
        yield put(paymentActions.onAddPaymentFail());
        ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
    yield put(paymentActions.onLoadingDisable());
}

export function* editPaymentAsync(action: Action<EditPaymentRequest>) {
    yield put(paymentActions.onLoadingEnable());
    const { token, id, amount, paid_at, group, notes } = action.payload;
    let response: Response<EditPayment> = {
        success: false,
        status: -1,
    };

    let api: PaymentAPI = new PaymentAPI(token);
    response = yield api.editPayment(id, amount, paid_at, group, notes);

    if (response.success) {
        yield put(paymentActions.onEditPaymentResponse(response));
        navigationRef.current?.goBack();
        ToastAndroid.show("پرداخت با موفقیت ویرایش شد", ToastAndroid.SHORT);
    } else {
        yield put(paymentActions.onEditPaymentFail());
        ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
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
        ToastAndroid.show("پرداخت با موفقیت حذف شد", ToastAndroid.SHORT);
        navigationRef.current?.goBack();
    } else {
        yield put(paymentActions.onDeletePaymentFail());
        ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
    yield put(paymentActions.onLoadingDisable());
}

export function* addCommentAsync(action: Action<AddCommentRequest>) {
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
        ToastAndroid.show("یادداشت با موفقیت اضافه شد", ToastAndroid.SHORT);
        navigationRef.current?.goBack();
    } else {
        yield put(paymentActions.onAddCommentFail());
    }
    yield put(paymentActions.onLoadingDisable());
}
