import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddFriendToGroupRequest,
  CreateGroupRequest,
  DeleteGroupRequest,
  EditGroupRequest,
  GetGroupInfoRequest,
  GetUserGroupsRequest,
  LeaveGroupRequest,
  RemoveMemberRequest,
} from "../../models/requests/axios/group";
import {
  AddFriendToGroupResponse,
  DeleteGroupResponse,
  EditGroupResponse,
  GetGroupResponse,
  GetUserGroupsResponse,
  LeaveGroupResponse,
  RemoveMemberResponse,
} from "../../models/responses/axios/group";
import { Response } from "../../models/responses/axios/response";
import { navigationRef } from "../../navigation/navigationService";
import { GroupAPI } from "../../services/api/axios/groupApi";
import * as groupActions from "../actions/groupActions";

export function* createGroupAsync(action: Action<CreateGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<null> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.createGroup();

  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onGetUserProfileResponse(response));
  } else {
    yield put(groupActions.onGetUserProfileFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}
