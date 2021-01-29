import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import messages from "../../assets/resources/messages";
import { Action } from "../../models/actions/action";
import { GroupBalance } from "../../models/other/axios/Balance";
import {
  GetGroupMembersBalancesRequest,
  GetGroupsBalancesRequest,
} from "../../models/requests/axios/group";
import {
  GetFriendsBalanceRequest,
  GetFriendBalanceRequest,
} from "../../models/requests/axios/user";
import { GroupMembersBalances } from "../../models/responses/axios/group";
import { Response } from "../../models/responses/axios/response";
import { FriendBalance } from "../../models/responses/axios/user";
import { navigationRef } from "../../navigation/navigationService";
import { BalanceAPI } from "../../services/api/axios/balanceApi";
import * as balanceActions from "../actions/balanceActions";

export function* getFriendsBalanceAsync(action: Action<GetFriendsBalanceRequest>) {
  let api: BalanceAPI = new BalanceAPI(action.payload.token);
  let response: Response<FriendBalance[]> = yield api.getFriendsBalance();

  if (response.success) {
    yield put(balanceActions.onGetFriendsBalanceResponse(response));
  } else {
    yield put(balanceActions.onGetFriendsBalanceFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}

export function* getFriendBalanceAsync(action: Action<GetFriendBalanceRequest>) {
  yield put(balanceActions.onLoadingEnable());
  const { token, friendId, friendName, balance } = action.payload;
  let api: BalanceAPI = new BalanceAPI(token);
  let response: Response<FriendBalance> = yield api.getFriendBalance(friendId);

  if (response.success) {
    yield put(balanceActions.onGetFriendBalanceResponse(response));
    yield navigationRef.current?.navigate("Friend", {
      id: friendId,
      name: friendName,
      balance: balance,
      balances: response.response?.balances != undefined ? response.response.balances : [],
    });
  } else {
    yield put(balanceActions.onGetFriendBalanceFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
  yield put(balanceActions.onLoadingDisable());
}

export function* getGroupsBalancesAsync(action: Action<GetGroupsBalancesRequest>) {
  yield put(balanceActions.onLoadingEnable());
  const { token } = action.payload;
  let api: BalanceAPI = new BalanceAPI(token);
  let response: Response<GroupBalance[]> = yield api.getGroupsBalances();

  if (response.success) {
    yield put(balanceActions.onGetGroupsBalanceResponse(response));
  } else {
    yield put(balanceActions.onGetGroupsBalanceFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}

export function* getGroupMembersBalancesAsync(action: Action<GetGroupMembersBalancesRequest>) {
  yield put(balanceActions.onLoadingEnable());
  const { token, groupId } = action.payload;
  let api: BalanceAPI = new BalanceAPI(token);
  let response: Response<GroupMembersBalances> = yield api.getGroupMembersBalances(groupId);

  if (response.success) {
    yield put(balanceActions.onGetGroupMembersBalancesResponse(response));
  } else {
    yield put(balanceActions.onGetGroupMembersBalancesFail());
    ToastAndroid.show(messages.serverError, ToastAndroid.SHORT);
  }
}
