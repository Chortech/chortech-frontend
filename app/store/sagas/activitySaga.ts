import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { GetUserActivitiesRequest } from "../../models/requests/axios/user";
import { UserActivities } from "../../models/responses/axios/user";
import { ActivityAPI } from "../../services/api/axios/activityApi";
import { Response } from "../../models/responses/axios/response";
import * as activityActions from "../actions/activityActions";

export function* getUserActivitiesAsync(action: Action<GetUserActivitiesRequest>) {
    yield put(activityActions.onLoadingEnable());
    const { token } = action.payload;
    let response: Response<UserActivities> = {
        success: false,
        status: -1,
    };

    let api: ActivityAPI = new ActivityAPI(token);
    response = yield api.getActivities();

    if (response.success) {
        yield put(activityActions.onGetUserActivitiesResponse(response));
    } else {
        yield put(activityActions.onGetUserActivitiesFail());
        if (response.status == 404) {
            ToastAndroid.show("فعالیتی وجود ندارد", ToastAndroid.SHORT);
        } else {
            ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
        }
    }
    yield put(activityActions.onLoadingDisable());
}
