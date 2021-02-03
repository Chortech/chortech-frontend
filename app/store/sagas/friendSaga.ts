import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  GetUserFriendsRequest,
  AddFriendRequest,
  DeleteFriendRequest,
  InviteFriendsRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { AddFriend } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { UserAPI } from "../../services/api/axios/userApi";
import { InputType } from "../../utils/inputTypes";
import * as friendActions from "../actions/friendActions";
import * as balanceActions from "../actions/balanceActions";
import * as balanceSaga from "./balanceSaga";
import { Friend } from "../../models/other/axios/Friend";
import messages from "../../assets/resources/messages";

export function* getUserFriendsAsync(action: Action<GetUserFriendsRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { token } = action.payload;
  let response: Response<Friend[]> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  response = yield api.getUserFriends();

  if (response.success) {
    yield put(friendActions.onGetUserFriendsResponse(response));
    yield call(
      balanceSaga.getFriendsBalanceAsync,
      balanceActions.onGetFriendsBalanceRequest(token)
    );
  } else {
    if (response.status == 404) {
      ToastAndroid.show(messages.noUserWithThisInfo, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(friendActions.onLoadingDisable());
}

export function* addFriendAsync(action: Action<AddFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { token, email, phone, inputType } = action.payload;
  let response: Response<AddFriend> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  if (inputType == InputType.Email) {
    response = yield api.addUserFriendByEmail(email);
  } else if (inputType == InputType.Phone) {
    response = yield api.addUserFriendByPhone(phone);
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onAddFriendResponse(response));
    yield call(getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));
    navigationRef.current?.navigate("FriendList");
  } else {
    if (response.status == -3) {
      ToastAndroid.show(messages.invalidOperation, ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show(messages.operationError, ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show(messages.invalidInputInfo, ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show(messages.noUserWithThisInfo, ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show(messages.duplicateFriendError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
}

export function* deleteFriendAsync(action: Action<DeleteFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<Friend[]> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  response = yield api.deleteFriend(id);

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onDeleteFriendResponse(response));
    yield call(getUserFriendsAsync, friendActions.onGetUserFriendsRequest(token));
    yield navigationRef.current?.navigate("FriendList");
  } else {
    if (response.status == -2) {
      ToastAndroid.show(messages.operationError, ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show(messages.invalidOperation, ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show(messages.noUserWithThisInfo, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
}

export function* inviteFriendAsync(action: Action<InviteFriendsRequest>) {
  yield put(friendActions.onLoadingEnable());

  const { token, email, phone, inputType } = action.payload;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  if (inputType == InputType.Email) {
    response = yield api.inviteFriendRequestByEmail(email);
  } else if (inputType == InputType.Phone) {
    response = yield api.inviteFriendRequestByPhone(phone);
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onInviteFriendResponse(response));
    ToastAndroid.show("دعوت‌نامه برای ایمیل یا شماره موبایل واردشده ارسال شد", ToastAndroid.SHORT);
    navigationRef.current?.navigate("FriendList");
  } else {
    if (response.status == -2) {
      ToastAndroid.show("خطای ناشناخته در سیستم رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده تکراری است", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("ایمیل یا شماره موبایل واردشده نامعتبر است", ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show("این کاربر در حال حاضر در برنامه ثبت‌نام کرده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}
