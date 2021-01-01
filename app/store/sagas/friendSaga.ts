import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  GetUserFriendsRequest,
  AddFriendRequest,
  DeleteFriendRequest,
  InviteFriendsRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { GetUserFriends, AddFriend, DeleteFriend } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { UserAPI } from "../../services/api/axios/userApi";
import { InputType } from "../../utils/inputTypes";
import * as friendActions from "../actions/friendActions";

export function* getUserFriendsAsync(action: Action<GetUserFriendsRequest>) {
  const { token } = action.payload;
  let response: Response<GetUserFriends> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  response = yield api.getUserFriends();

  if (response.success) {
    yield put(friendActions.onGetUserFriendsResponse(response));
  } else {
    yield put(friendActions.onGetUserFriendsFail());
    if (response.status == 404) {
      ToastAndroid.show("اطلاعات کاربر وجود ندارد", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
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
    response = yield api.addUserFriendByEmail(phone);
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onAddFriendResponse(response));
  } else {
    yield put(friendActions.onAddFriendFail());
    if (response.status == -3) {
      ToastAndroid.show("این عملیات امکان‌پذیر نیست", ToastAndroid.SHORT);
    } else if (response.status == -2) {
      ToastAndroid.show("عملیات با خطا مواجه شد", ToastAndroid.SHORT);
    } else if (response.status == 400) {
      ToastAndroid.show("اطلاعات واردشده معتبر نیست", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("کاربر با این مشخصات وجود ندارد", ToastAndroid.SHORT);
    } else if (response.status == 409) {
      ToastAndroid.show(
        "امکان اضافه‌کردن دوباره این کاربر به دوستان شما وجود ندارد",
        ToastAndroid.SHORT
      );
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* deleteFriendAsync(action: Action<DeleteFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { token, id } = action.payload;
  let response: Response<DeleteFriend> = {
    success: false,
    status: -1,
  };

  let api: UserAPI = new UserAPI(token);
  response = yield api.deleteFriend(id);

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onDeleteFriendResponse(response));
    yield navigationRef.current?.navigate("FriendList");
  } else {
    yield put(friendActions.onDeleteFriendFail());
    if (response.status == -2) {
      ToastAndroid.show("عملیات با خطا مواجه شد", ToastAndroid.SHORT);
    } else if (response.status == -3) {
      ToastAndroid.show("امکان انجام این عملیات وجود ندارد", ToastAndroid.SHORT);
    } else if (response.status == 404) {
      ToastAndroid.show("کاربر مورد نظر دوست شما نیست", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
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
  } else {
    yield put(friendActions.onInviteFriendFail());
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
