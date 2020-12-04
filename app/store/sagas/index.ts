/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import * as friendSaga from "./friendSaga";
import * as userSaga from "./userSaga";
import * as activitySaga from "./activitySaga";
import * as groupSaga from "./groupSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.IDENTIFY_ACCOUNT_REQUEST, authSaga.identifyAccountAsync),
    takeLatest(types.GENERATE_CODE_REQUEST, authSaga.generateCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, authSaga.resetPasswordAsync),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.GET_USER_FRIENDS_REQUEST, friendSaga.getUserFriendsAsync),
    takeLatest(types.ADD_FRIEND_REQUEST, friendSaga.addFriendAsync),
    takeLatest(types.DELETE_USER_FRIEND_REQUEST, friendSaga.deleteFriendAsync),
    takeLatest(types.GET_USER_REQUEST, userSaga.fetchUserAsync),
    takeLatest(types.UPDATE_USER_REQUEST, userSaga.updateUserAsync),
    takeLatest(types.ADD_GROUP_REQUEST, groupSaga.addGroupAsync),
    takeLatest(types.UPDATE_GROUP_REQUEST, groupSaga.updateGroupAsync),
    takeLatest(types.DELETE_GROUP_REQUEST, groupSaga.deleteGroupAsync),
    takeLatest(types.GET_GROUP_BY_ID_REQUEST, groupSaga.getGroupByIdAsync),
    takeLatest(types.GET_USER_GROUPS_REQUEST, groupSaga.getUserGroups),
    takeLatest(types.ADD_ACTIVITY_REQUEST, activitySaga.addActivityAsync),
    takeLatest(types.ADD_EXPENSE_REQUEST, activitySaga.addExpenseAsync),
    takeLatest(types.ADD_DEBT_REQUEST, activitySaga.addDebtAsync),
    takeLatest(types.ADD_PARTICIPANT_REQUEST, activitySaga.addParticipantAsync),
    takeLatest(types.DELETE_ACTIVITY_REQUEST, activitySaga.deleteActivityAsync),
    takeLatest(types.DELETE_EXPENSE_REQUEST, activitySaga.deleteExpenseAsync),
    takeLatest(types.DELETE_DEBT_REQUEST, activitySaga.deleteDebtAsync),
    takeLatest(
      types.DELETE_PARTICIPANT_REQUEST,
      activitySaga.deleteParticipantAsync
    ),
    takeLatest(
      types.GET_USER_ACTIVITIES_REQUEST,
      userSaga.getUserActivitiesAsync
    ),
  ]);
}
