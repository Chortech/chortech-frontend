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
  GetGroupInfoResponse,
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
  const name = action.payload.name;
  const picture = action.payload.picture;

  let response: Response<null> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.createGroup(name, picture);

  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onCreateGroupResponse(response));
  } else {
    // yield put(groupActions.onCreateGroupFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* GetUserGroupsAsync(action: Action<GetUserGroupsRequest>) {
  yield put(groupActions.onLoadingEnable());
  const token = action.payload.token;
  let response: Response<GetUserGroupsResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.getUserGroups();
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onGetUserGroupsResponse(response));
  } else {
    // yield put(groupActions.onGetUserGroupsFail());
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* DeleteGroupAsync(action: Action<DeleteGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const id = action.payload.id;
  const token = action.payload.token;

  let response: Response<DeleteGroupResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.deleteGroup(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onDeleteGroupResponse(response.response));
  } else {
    yield put(groupActions.onDeleteGroupFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* GetGroupInfoAsync(action: Action<GetGroupInfoRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const id = action.payload.id;
  const token = action.payload.token;

  let response: Response<GetGroupInfoResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.getGroupInfo(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onGetGroupByIdResponse(response.response));
  } else {
    yield put(groupActions.onGetGroupByIdFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* EditGroupAsync(action: Action<EditGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const id = action.payload.id;
  const token = action.payload.token;

  let response: Response<EditGroupResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.editGroup(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onEditGroupResponse(response.response));
  } else {
    // yield put(groupActions.onEditGroupFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* AddFriendToGroupAsync(action: Action<AddFriendToGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const id = action.payload.id;
  const token = action.payload.token;

  let response: Response<AddFriendToGroupResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.addFriendToGroup(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onAddFriendToGroupResponse(response.response));
  } else {
    // yield put(groupActions.onAddFriendToGroupFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* LeaveGroupAsync(action: Action<LeaveGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const id = action.payload.id;
  const token = action.payload.token;

  let response: Response<LeaveGroupResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.leaveGroup(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onLeaveGroupResponse(response.response));
  } else {
    // yield put(groupActions.onLeaveGroupFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}

export function* RemoveMemberAsync(action: Action<RemoveMemberRequest>) {
  yield put(groupActions.onLoadingEnable());
  
  const token = action.payload.token;
  const id = action.payload.memberId;

  let response: Response<RemoveMemberResponse> = {
    success: false,
    status: -1,
  };

  const api: GroupAPI = new GroupAPI(token);
  response = yield api.removeMember(id);
  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onRemoveMemberResponse(response.response));
  } else {
    // yield put(groupActions.onRemoveMemberFail(response.response));
    if (response.status == 400) {
      ToastAndroid.show("خطای ناشناخته در سرور رخ داده‌است", ToastAndroid.SHORT);
    } else {
      ToastAndroid.show("خطا در برقراری ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
}