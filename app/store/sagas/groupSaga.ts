import { ToastAndroid } from "react-native";
import { call, put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { Group } from "../../models/other/axios/Group";
import {
  GetUserGroupsRequest,
  GetGroupInfoRequest,
  AddGroupRequest,
  EditGroupRequest,
  DeleteGroupRequest,
  AddFriendToGroupRequest,
  LeaveGroupRequest,
  RemoveMemberRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { RemoveGroupMember } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { GroupAPI } from "../../services/api/axios/groupApi";
import {UploadImage} from "../../models/responses/axios/user";
import {UploadImageRequest} from "../../models/requests/axios/user";
import * as groupActions from "../actions/groupActions";
import * as balanceActions from "../actions/balanceActions";
import * as balanceSaga from "./balanceSaga";
import messages from "../../assets/resources/messages";

export function* getUserGroupsAsync(action: Action<GetUserGroupsRequest>) {
  yield put(groupActions.onLoadingEnable());
  const token = action.payload.token;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<Group[]> = yield api.getUserGroups();

  if (response.success) {
    yield put(groupActions.onGetUserGroupsResponse(response));
    yield call(
      balanceSaga.getGroupsBalancesAsync,
      balanceActions.onGetGroupsBalancesRequest(token)
    );
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* getGroupInfoAsync(action: Action<GetGroupInfoRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId, token } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<Group> = yield api.getGroupInfo(groupId);

  if (response.success) {
    yield put(groupActions.onGetGroupInfoResponse(response));

    yield navigationRef?.current?.navigate("Group", {group: response.response})
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* addGroupAsync(action: Action<AddGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { token, name, picture } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<Group> = yield api.addGroup(name, picture);

  if (response.success) {
    yield put(groupActions.onAddGroupResponse(response));
    yield call(getUserGroupsAsync, groupActions.onGetUserGroupsRequest(token));
    navigationRef.current?.navigate("GroupList");
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* EditGroupAsync(action: Action<EditGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { token, groupId, name, picture } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<Group> = yield api.editGroup(groupId, name, picture);

  if (response.success) {
    yield put(groupActions.onEditGroupResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* DeleteGroupAsync(action: Action<DeleteGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId, token } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<null> = yield api.deleteGroup(groupId);

  if (response.success) {
    yield put(groupActions.onDeleteGroupResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* AddFriendToGroupAsync(action: Action<AddFriendToGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { token, groupId, members } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<Group> = yield api.addFriendToGroup(groupId, members);

  if (response.success) {
    yield put(groupActions.onAddFriendToGroupResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* LeaveGroupAsync(action: Action<LeaveGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId, token } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<null> = yield api.leaveGroup(groupId);

  if (response.success) {
    yield put(groupActions.onLeaveGroupResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* RemoveMemberAsync(action: Action<RemoveMemberRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { token, groupId, memberId } = action.payload;
  const api: GroupAPI = new GroupAPI(token);
  let response: Response<RemoveGroupMember> = yield api.removeMember(groupId, memberId);

  if (response.success) {
    yield put(groupActions.onRemoveMemberResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
  yield put(groupActions.onLoadingDisable());
}

export function* uploadImageAsync(action: Action<UploadImageRequest>) {
  // yield put(userActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<UploadImage> = {
    success: false,
    status: -1,
  };
  const api: GroupAPI = new GroupAPI(token);
  response = yield api.uploadImageRequest("image/jpeg", action.payload.data);

  // yield put(userActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onUploadImageResponse(response));
  } else {
    if (response.status == 400) {
      ToastAndroid.show(messages.unkownServerError, ToastAndroid.SHORT);
    } else {
      ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
    }
  }
}