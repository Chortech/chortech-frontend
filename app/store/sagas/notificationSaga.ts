import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { PushNotificationRequest, RemindMemberRequest } from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as notificationActions from "../actions/notificationActions";
import { NotificationAPI } from "../../services/api/axios/notificationApi";
import messages from "../../assets/resources/messages";

export function* pushNotificationAsync(action: Action<PushNotificationRequest>) {
  const { token, FCMToken } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  let api: NotificationAPI = new NotificationAPI(token);
  response = yield api.pushNotification(FCMToken);

  if (response.success) {
    yield put(notificationActions.onPushNotificationResponse(response));
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}

export function* remindMemberAsync(action: Action<RemindMemberRequest>) {
  const { token, message, contactId } = action.payload;

  let api: NotificationAPI = new NotificationAPI(token);
  let resposne: Response<any> = yield api.remindMember(message, contactId);

  if (resposne.success) {
    ToastAndroid.show(messages.reminderSent, ToastAndroid.SHORT);
  } else {
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}
