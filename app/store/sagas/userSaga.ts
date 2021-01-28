import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  EditProfileRequest,
  GetUserProfileRequest,
  UploadImageRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { EditProfile, UploadImage, UserProfile } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { UserAPI } from "../../services/api/axios/userApi";
import * as userActions from "../actions/userActions";

export function* getUserProfileAsync(action: Action<GetUserProfileRequest>) {
  yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UserProfile> = {
    success: false,
    status: -1,
  };

  const api: UserAPI = new UserAPI(token);
  response = yield api.getUserProfile();

  yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onGetUserProfileResponse(response));
  } else {
    yield put(userActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* editUserProfileAsync(action: Action<EditProfileRequest>) {
  yield put(userActions.onLoadingEnable());
  const { token, newName, picture } = action.payload;

  let api: UserAPI = new UserAPI(token);
  let response: Response<EditProfile> = yield api.editUserProfile(newName, picture);

  if (response.success) {
    yield put(userActions.onEditUserProfileResponse(response));
    ToastAndroid.show("ویرایش اطلاعات شما با موفقیت انجام شد", ToastAndroid.SHORT);
    yield navigationRef.current?.navigate("ProfileInfo");
  } else {
    yield put(userActions.onEditUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سیستم رخ داده‌است", ToastAndroid.SHORT);
    } else if (response.status == 401 || response.status == 403) {
      ToastAndroid.show("خطای اجازه دسترسی به سرور", ToastAndroid.SHORT);
    }
  }

  yield put(userActions.onLoadingDisable());
}

export function* uploadImageAsync(action: Action<UploadImageRequest>) {
  // yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UploadImage> = {
    success: false,
    status: -1,
  };
  const api: UserAPI = new UserAPI(token);
  response = yield api.uploadImageRequest("image/jpeg", action.payload.data);

  // yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(userActions.onUploadImageResponse(response));
  } else {
    yield put(userActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      console.log(response);
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}
