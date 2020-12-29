/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import * as verificationSaga from "./verificationSaga";
import * as userSaga from "./userSaga";
import * as groupSaga from "./groupSaga";
import * as friendSaga from "./friendSaga";
import * as expenseSaga from "./expenseSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.GENERATE_CODE_REQUEST, verificationSaga.generateCodeAsync),
    takeLatest(types.VERIFY_CODE_REQUEST, verificationSaga.verifyCodeAsync),
    takeLatest(types.CANCEL_CODE_REQUEST, verificationSaga.cancelCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, authSaga.resetPasswordAsync),
    takeLatest(types.CHANGE_PASSWORD_REQUEST, authSaga.changePasswordAsync),
    takeLatest(types.CHANGE_EMAIL_OR_PHONE_REQUEST, authSaga.changeEmailOrPhoneAsync),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.GET_USER_FRIENDS_REQUEST, friendSaga.getUserFriendsAsync),
    takeLatest(types.ADD_FRIEND_REQUEST, friendSaga.addFriendAsync),
    takeLatest(types.DELETE_USER_FRIEND_REQUEST, friendSaga.deleteFriendAsync),
    takeLatest(types.INVITE_FRIEND_REQUEST, friendSaga.inviteFriendAsync),
    takeLatest(types.GET_USER_PROFILE_REQUEST, userSaga.getUserProfileAsync),
    // takeLatest(types.UPDATE_USER_REQUEST, userSaga.updateUserAsync),
    // takeLatest(types.ADD_GROUP_REQUEST, groupSaga.addGroupAsync),
    // takeLatest(types.UPDATE_GROUP_REQUEST, groupSaga.updateGroupAsync),
    // takeLatest(types.DELETE_GROUP_REQUEST, groupSaga.deleteGroupAsync),
    // takeLatest(types.GET_GROUP_BY_ID_REQUEST, groupSaga.getGroupByIdAsync),
    // takeLatest(types.GET_USER_GROUPS_REQUEST, groupSaga.getUserGroups),
    takeLatest(types.GET_USER_EXPENSES_REQUEST, expenseSaga.getUserExpenseAsync),
    takeLatest(types.GET_USER_EXPENSE_REQUEST, expenseSaga.getUserExpenseAsync),
    takeLatest(types.ADD_COMMENT_REQUEST, expenseSaga.addCommentAsync),
    takeLatest(types.GET_COMMENT_REQUEST, expenseSaga.getCommentAsync),
  ]);
}
