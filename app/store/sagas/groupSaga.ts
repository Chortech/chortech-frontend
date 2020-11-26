import { put } from "redux-saga/effects";
import { Alert, ToastAndroid } from "react-native";
// import { delay } from 'redux-saga';

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";

import { DefaultResponse } from "../../models/responses/default";
import { AddGroupRequest, UpdateGroupRequest, DeleteGroupRequest,
   GetGroupByIdRequest, GetUserGroupsRequest } from "../../models/requests/group";
import { GetUserGroupsResponse } from "../../models/responses/group";
import * as groupActions from "../actions/groupActions"

export function* addGroupAsync(action: Action<AddGroupRequest>) {
  const { name, creator, members } = action.payload;
  let response: DefaultResponse = {
    id: "-1",
    success: false,
    data:null,
  };

  try {
    response = yield Api.addGroup(name, creator, members);
    console.log("add group reponse: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
  console.log("saga: add group")
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* updateGroupAsync(action: Action<UpdateGroupRequest>) {
  const { groupId, name, creator, members } = action.payload;
  let response: DefaultResponse = {
    id: "-1",
    success: false,
    data:null,
  };

  try {
    response = yield Api.updateGroup(groupId, name, creator, members);
    console.log("update group reponse: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
  console.log("saga: update group")
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
  
export function* deleteGroupAsync(action: Action<DeleteGroupRequest>) {
  const { groupId } = action.payload;
  let response: DefaultResponse = {
    id: "-1",
    success: false,
    data:null,
  };

  try {
    response = yield Api.deleteGroup(groupId);
    console.log("delete group reponse: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
  console.log("saga: group deleted")
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getGroupByIdAsync(action: Action<GetGroupByIdRequest>) {
  const { groupId } = action.payload;
  let response: DefaultResponse = {
    id: "-1",
    success: false,
    data:null,
  };

  try {
    response = yield Api.getGroupById(groupId);
    console.log("get group reponse: " + JSON.stringify(response));
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
  console.log("saga: group added")
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* getUserGroups(action: Action<GetUserGroupsRequest>) {
  const { userId } = action.payload;
  let response: GetUserGroupsResponse = {
    userId: "-1",
    success: false,
    groups: null,
  };

  try {
    response = yield Api.getUserGroups(userId);
    console.log("get group reponse: " + JSON.stringify(response));
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
    yield put(groupActions.getUserGroupsResponse(response))
    console.log("saga: get groups")
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}