import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import {
  AddGroupRequest,
  DeleteGroupRequest,
  GetGroupByIdRequest,
  GetUserGroupsRequest,
  UpdateGroupRequest,
} from "../../models/requests/graphql/group";
import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../../models/responses/graphql/group";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as groupActions from "../actions/groupActions";

export function* addGroupAsync(action: Action<AddGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { name, creator, members } = action.payload;
  let response: AddGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.addGroup(name, creator, members);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(groupActions.onLoadingDisable());

  if (response.success) {
    yield put(groupActions.onAddGroupResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(groupActions.onAddGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* updateGroupAsync(action: Action<UpdateGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId, name, creator, members } = action.payload;
  let response: UpdateGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.updateGroup(groupId, name, creator, members);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(groupActions.onLoadingDisable());
  if (response.success) {
    yield put(groupActions.onUpdateGroupResponse(response));
  } else {
    yield put(groupActions.onUpdateGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteGroupAsync(action: Action<DeleteGroupRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId } = action.payload;
  let response: DeleteGroupResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.deleteGroup(groupId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(groupActions.onLoadingDisable());
  if (response.success) {
    yield put(groupActions.onDeleteGroupResponse(response));
    navigationRef.current?.goBack();
  } else {
    yield put(groupActions.onDeleteGroupFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getGroupByIdAsync(action: Action<GetGroupByIdRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { groupId } = action.payload;
  let response: GetGroupByIdResponse = {
    id: "-1",
    success: false,
    group: {
      id: "-1,",
      name: "",
      creatorId: "-1",
      membersIds: [],
      activitiesIds: [],
    },
  };

  try {
    response = yield Api.getGroupById(groupId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
  yield put(groupActions.onLoadingDisable());
  if (response.success) {
    yield put(groupActions.onGetGroupByIdResponse(response));
  } else {
    yield put(groupActions.onGetGroupByIdFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserGroups(action: Action<GetUserGroupsRequest>) {
  yield put(groupActions.onLoadingEnable());
  const { userId } = action.payload;
  let response: GetUserGroupsResponse = {
    userId: "-1",
    success: false,
    groups: [],
  };

  try {
    response = yield Api.getUserGroups(userId);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }

  yield put(groupActions.onLoadingDisable());
  if (response.success) {
    yield put(groupActions.onGetUserGroupsResponse(response));
  } else {
    yield put(groupActions.onGetUserGroupsFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
