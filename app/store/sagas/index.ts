/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import identifyAccountSaga from "./identifyAccountSaga";
import { generateCodeAsync } from "./codeVerificationSaga";
import resetPasswordSaga from "./resetPasswordSaga";
import * as friendSaga from "./friendSaga";
import * as userSaga from "./userSaga";
import * as activitySaga from "./activitySaga";
import * as groupSaga from "./groupSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.IDENTIFY_REQUEST, identifyAccountSaga),
    takeLatest(types.GENERATE_CODE_REQUEST, generateCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordSaga),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.USER_FRIENDS_REQUEST, friendSaga.userFriendsSaga),
    takeLatest(types.DELETE_USER_FRIEND_REQUEST, friendSaga.deleteUserFriend),
    takeLatest(types.FETCH_USER_REQUEST, userSaga.fetchUserAsync),
    takeLatest(types.UPDATE_USER_REQUEST, userSaga.updateUserAsync),
    takeLatest(types.ADD_GROUP_REQUEST, groupSaga.addGroupAsync),
    takeLatest(types.UPDATE_GROUP_REQUEST, groupSaga.updateGroupAsync),
    takeLatest(types.DELETE_GTOUP_REQUEST, groupSaga.deleteGroupAsync),
    takeLatest(types.GET_GROUP_BY_ID, groupSaga.getGroupByIdAsync),
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
  ]);
}
