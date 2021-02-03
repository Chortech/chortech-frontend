import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import { PushNotificationRequest } from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";

export function onPushNotificationRequest(token: Token, FCMToken: string): Action<PushNotificationRequest> {
    return {
        type: types.PUSH_NOTIFICATION_REQUEST,
        payload: {
            token: token,
            FCMToken: FCMToken,
        }
    };
}

export function onPushNotificationResponse(
    response: Response<null>
): Action<Response<null>> {
    return {
        type: types.PUSH_NOTIFICATION_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response,
        },
    };
}

export function onPushNotificationFail(): Action<Response<null>> {
    return {
        type: types.PUSH_NOTIFICATION_FAIL,
        payload: {
            success: false,
            status: -1,
        },
    };
}
