import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import messages from "../../assets/resources/messages";
import { Action } from "../../models/actions/action";
import {
  GetFriendsBalanceRequest,
  GetFriendBalanceRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { FriendBalance } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { BalanceAPI } from "../../services/api/axios/balanceApi";
import * as balanceActions from "../actions/balanceActions";

export function* getFriendsBalanceRequest(action: Action<GetFriendsBalanceRequest>) {
  let api: BalanceAPI = new BalanceAPI(action.payload.token);
  let response: Response<FriendBalance[]> = yield api.getFriendsBalance();

  if (response.success) {
    yield put(balanceActions.onGetFriendsBalanceResponse(response));
  } else {
    yield put(balanceActions.onGetFriendsBalanceFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}

export function* getFriendBalanceRequest(action: Action<GetFriendBalanceRequest>) {
  yield put(balanceActions.onLoadingEnable());
  const { token, friendId, friendName } = action.payload;
  let api: BalanceAPI = new BalanceAPI(token);
  let response: Response<FriendBalance> = yield api.getFriendBalance(friendId);

  if (response.success) {
    yield put(balanceActions.onGetFriendBalanceResponse(response));
    yield navigationRef.current?.navigate("Friend", {
      id: friendId,
      name: friendName,
      balances: response.response?.balances != undefined ? response.response.balances : [],
    });
  } else {
    yield put(balanceActions.onGetFriendBalanceFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(balanceActions.onLoadingDisable());
}
