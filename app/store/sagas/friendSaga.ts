import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { FriendsRequest } from "../../models/requests/getFriends";
import { FriendsResponse } from "../../models/responses/getFriends";
import * as friendActions from "../actions/friendActions";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { ToastAndroid } from "react-native";
import { Friend } from "../../models/other/Friend";

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
    let fetchedFriends: Array<Friend> = [];
    response.friends.forEach((element) => {
      let friend: Friend = {
        id: element._id.toString(),
        friendId: element.friendId,
        friendName: element.friendName,
      };
      fetchedFriends.push(friend);
      console.log("friend: " + JSON.stringify(friend, undefined, 2));
    });
    response.friends = fetchedFriends;
    console.log("friends: " + JSON.stringify(response.friends, undefined, 1));
    yield put(friendActions.onUserFriendsResponse(response));
  } else {
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
