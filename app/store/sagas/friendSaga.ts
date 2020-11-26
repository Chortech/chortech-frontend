import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { FriendsRequest } from "../../models/requests/getFriends";
import { FriendsResponse } from "../../models/responses/getFriends";
import * as friendActions from "../actions/friendActions";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { ToastAndroid } from "react-native";
import { Friend } from "../../models/other/Friend";
import { DeleteFriendRequest } from "../../models/requests/deleteFriend";
import { DeleteFriendResponse } from "../../models/responses/deleteFriend";
import { resetApolloContext } from "@apollo/client";
import { navigationRef } from "../../navigation/navigationService";

export function* userFriendsSaga(action: Action<FriendsRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { userId } = action.payload;
  let response: FriendsResponse = {
    success: false,
    userId: "-1",
    friends: [],
  };

  try {
    response = yield Api.getUserFriends(userId);
    console.log(
      "friend saga repsonse: " + JSON.stringify(response, undefined, 2)
    );
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    console.log("friends: " + JSON.stringify(response.friends, undefined, 1));
    yield put(friendActions.onUserFriendsResponse(response));
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteUserFriend(action: Action<DeleteFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const id = action.payload.id;
  let response: DeleteFriendResponse = { success: false, id: "-1" };

  try {
    response = yield Api.deleteFriend(id);
    console.log(JSON.stringify(response, undefined, 2));
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onDeleteFriendResponse(response));
    yield navigationRef.current?.navigate("FriendList");
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
