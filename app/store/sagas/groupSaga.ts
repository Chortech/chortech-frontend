import { put } from "redux-saga/effects";
import { Alert, ToastAndroid } from "react-native";
// import { delay } from 'redux-saga';

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";

import { LoginResponse } from "../../models/responses/login";
import { AddGroupRequest, UpdateGroupRequest, DeleteGroupRequest, GetGroupByIdRequest } from "../../models/requests/group";

export function* addGroupAsync(action: Action<AddGroupRequest>) {
  const { name, creator, members } = action.payload;
  let response: LoginResponse = {
    id: "-1",
    success: false,
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
  let response: LoginResponse = {
    id: "-1",
    success: false,
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
  let response: LoginResponse = {
    id: "-1",
    success: false,
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
  let response: LoginResponse = {
    id: "-1",
    success: false,
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