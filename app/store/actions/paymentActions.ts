import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
    AddCommentRequest,
    GetPaymentRequest,
    AddPaymentRequest,
    DeletePaymentRequest,
    EditPaymentRequest,
} from "../../models/requests/axios/user";
import {
    UserPayment,
    AddPayment,
    EditPayment,
} from "../../models/responses/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";

export function onGetUserPaymentRequest(token: Token, id: string): Action<GetPaymentRequest> {
    return {
        type: types.GET_USER_PAYMENT_REQUEST,
        payload: {
            token: token,
            id: id,
        },
    };
}

export function onGetUserPaymentResponse(
    response: Response<UserPayment>
): Action<Response<UserPayment>> {
    return {
        type: types.GET_USER_PAYMENT_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response,
        },
    };
}

export function onGetUserPaymentFail(): Action<Response<UserPayment>> {
    return {
        type: types.GET_USER_PAYMENT_FAIL,
        payload: {
            success: false,
            status: -1,
        },
    };
}

export function onAddPaymentRequest(
    token: Token,
    from: string,
    to: string,
    amount: number,
    paid_at: number,
    group?: string,
    notes?: string
): Action<AddPaymentRequest> {
    return {
        type: types.ADD_PAYMENT_REQUEST,
        payload: {
            token: token,
            from: from,
            to: to,
            amount: amount,
            paid_at: paid_at,
            group: group,
            notes: notes,
        },
    };
}

export function onAddPaymentResponse(response: Response<AddPayment>): Action<Response<AddPayment>> {
    return {
        type: types.ADD_PAYMENT_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response,
        },
    };
}

export function onAddPaymentFail(): Action<Response<AddPayment>> {
    return {
        type: types.ADD_PAYMENT_FAIL,
        payload: {
            success: false,
            status: -1,
        },
    };
}

export function onEditPaymentRequest(
    token: Token,
    id: string,
    amount?: number,
    paid_at?: number,
    group?: string,
    notes?: string
): Action<EditPaymentRequest> {
    return {
        type: types.EDIT_PAYMENT_REQUEST,
        payload: {
           token: token,
           id: id,
           amount: amount,
           paid_at: paid_at,
           group: group,
           notes: notes,
        },
    };
}

export function onEditPaymentResponse(response: Response<EditPayment>): Action<Response<EditPayment>> {
    return {
        type: types.EDIT_PAYMENT_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
        },
    };
}

export function onEditPaymentFail(): Action<Response<EditPayment>> {
    return {
        type: types.EDIT_PAYMENT_FAIL,
        payload: {
            success: false,
            status: -1,
        },
    };
}

export function onDeletePaymentRequest(
    token: Token,
    id: string
): Action<DeletePaymentRequest> {
    return {
        type: types.DELETE_PAYMENT_REQUEST,
        payload: {
            token: token,
            id: id,
        },
    };
}

export function onDeletePaymentResponse(response: Response<null>): Action<Response<null>> {
    return {
        type: types.DELETE_PAYMENT_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
        },
    };
}

export function onDeletePaymentFail(): Action<Response<null>> {
    return {
        type: types.DELETE_PAYMENT_FAIL,
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