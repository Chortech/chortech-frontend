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
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, authSaga.resetPasswordAsync),
    takeLatest(types.CHANGE_PASSWORD_REQUEST, authSaga.changePasswordAsync),
    takeLatest(types.CHANGE_EMAIL_OR_PHONE_REQUEST, authSaga.changeEmailOrPhoneAsync),
    takeLatest(types.GENERATE_CODE_REQUEST, verificationSaga.generateCodeAsync),
    takeLatest(types.VERIFY_CODE_REQUEST, verificationSaga.verifyCodeAsync),
    takeLatest(types.CANCEL_CODE_REQUEST, verificationSaga.cancelCodeAsync),
    takeLatest(types.GET_USER_PROFILE_REQUEST, userSaga.getUserProfileAsync),
    takeLatest(types.EDIT_USER_PROFILE_REQUEST, userSaga.editUserProfileAsync),
    takeLatest(types.GET_USER_FRIENDS_REQUEST, friendSaga.getUserFriendsAsync),
    takeLatest(types.ADD_FRIEND_REQUEST, friendSaga.addFriendAsync),
    takeLatest(types.DELETE_USER_FRIEND_REQUEST, friendSaga.deleteFriendAsync),
    takeLatest(types.INVITE_FRIEND_REQUEST, friendSaga.inviteFriendAsync),
    takeLatest(types.GET_USER_EXPENSES_REQUEST, expenseSaga.getUserExpensesAsync),
    takeLatest(types.GET_USER_EXPENSE_REQUEST, expenseSaga.getUserExpenseAsync),
    takeLatest(types.ADD_EXPENSE_REQUEST, expenseSaga.addExpenseAsync),
    takeLatest(types.EDIT_EXPENSE_REQUEST, expenseSaga.editExpenseAsync),
    takeLatest(types.DELETE_EXPENSE_REQUEST, expenseSaga.deleteExpenseAsync),
    takeLatest(types.ADD_COMMENT_REQUEST, expenseSaga.addCommentAsync),
    takeLatest(types.GET_COMMENTS_REQUEST, expenseSaga.getExpenseCommentsAsync),
    takeLatest(types.GET_FRIENDS_BALANCE_REQUEST, expenseSaga.getFriendsBalanceRequest),
    takeLatest(types.GET_FRIEND_BALANCE_REQUEST, expenseSaga.getFriendBalanceRequest),
    takeLatest(types.UPLOAD_IMAGE_REQUEST, userSaga.uploadImageAsync),
    takeLatest(types.ADD_GROUP_REQUEST, groupSaga.createGroupAsync),
    takeLatest(types.GET_USER_GROUPS_REQUEST, groupSaga.GetUserGroupsAsync),
    takeLatest(types.DELETE_GROUP_REQUEST, groupSaga.DeleteGroupAsync),
    takeLatest(types.GET_GROUP_BY_ID_REQUEST, groupSaga.GetGroupInfoAsync),
    takeLatest(types.EDIT_GROUP_REQUEST, groupSaga.EditGroupAsync),
    takeLatest(types.LEAVE_GROUP_REQUEST, groupSaga.LeaveGroupAsync),
    takeLatest(types.REMOVE_MEMBER_REQUEST, groupSaga.RemoveMemberAsync),
    takeLatest(types.ADD_FRIEND_TO_GROUP_REQUEST, groupSaga.AddFriendToGroupAsync),
  ]);
}
