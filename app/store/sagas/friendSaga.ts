import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import * as friendActions from "../actions/friendActions";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { ToastAndroid } from "react-native";
import { navigationRef } from "../../navigation/navigationService";
import {
  AddFriendRequest,
  DeleteFriendRequest,
} from "../../models/requests/friend";
import { GetUserFriendsRequest } from "../../models/requests/user";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../models/responses/friend";
import { GetUserFriendsResponse } from "../../models/responses/user";

export function* getUserFriendsAsync(action: Action<GetUserFriendsRequest>) {
  const { userId } = action.payload;
  let response: GetUserFriendsResponse = {
    success: false,
    userId: "-1",
    friends: [],
  };

  try {
    response = yield Api.getUserFriends(userId);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
    yield put(friendActions.onGetUserFriendsResponse(response));
  } else {
    yield put(friendActions.onGetUserFriendsFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* addFriendAsync(action: Action<AddFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const { userId, friendId, friendName } = action.payload;
  let response: AddFriendResponse = {
    success: false,
    friend: {
      id: "-1",
      friendId: "-1",
      friendName: "",
    },
  };

  try {
    response = yield Api.addFriend(friendId, friendName, userId);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onAddFriendResponse(response));
    ToastAndroid.show(
      `${response.friend.friendName} به دوستان شما افزوده‌شد.`,
      ToastAndroid.SHORT
    );
  } else {
    yield put(friendActions.onAddFriendFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}

export function* deleteFriendAsync(action: Action<DeleteFriendRequest>) {
  yield put(friendActions.onLoadingEnable());
  const id = action.payload.id;
  let response: DeleteFriendResponse = { success: false, id: "-1" };

  try {
    response = yield Api.deleteFriend(id);
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  yield put(friendActions.onLoadingDisable());

  if (response.success) {
    yield put(friendActions.onDeleteFriendResponse(response));
    yield navigationRef.current?.navigate("FriendList");
  } else {
    yield put(friendActions.onDeleteFriendFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
