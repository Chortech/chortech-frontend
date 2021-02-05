import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import * as verificationSaga from "./verificationSaga";
import * as userSaga from "./userSaga";
import * as groupSaga from "./groupSaga";
import * as friendSaga from "./friendSaga";
import * as expenseSaga from "./expenseSaga";
import * as balanceSaga from "./balanceSaga";
import * as paymentSaga from "./paymentSaga";
import * as activitySaga from "./activitySaga";
import * as notificationSaga from "./notificationSaga";

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
    takeLatest(types.ADD_EXPENSE_COMMENT_REQUEST, expenseSaga.addExpenseCommentAsync),
    takeLatest(types.GET_EXPENSE_COMMENTS_REQUEST, expenseSaga.getExpenseCommentsAsync),
    takeLatest(types.GET_GROUP_EXPENSES_REQUEST, expenseSaga.getGroupsExpensesAsync),
    takeLatest(types.GET_FRIENDS_BALANCE_REQUEST, balanceSaga.getFriendsBalanceAsync),
    takeLatest(types.GET_FRIEND_BALANCE_REQUEST, balanceSaga.getFriendBalanceAsync),
    takeLatest(types.GET_GROUPS_BALANCES_REQUEST, balanceSaga.getGroupsBalancesAsync),
    takeLatest(types.GET_GROUP_MEMBERS_BALANCES_REQUEST, balanceSaga.getGroupMembersBalancesAsync),
    takeLatest(types.UPLOAD_IMAGE_REQUEST, userSaga.uploadImageAsync),
    takeLatest(types.GET_USER_GROUPS_REQUEST, groupSaga.getUserGroupsAsync),
    takeLatest(types.GET_GROUP_INFO_REQUEST, groupSaga.getGroupInfoAsync),
    takeLatest(types.ADD_GROUP_REQUEST, groupSaga.addGroupAsync),
    takeLatest(types.EDIT_GROUP_REQUEST, groupSaga.EditGroupAsync),
    takeLatest(types.DELETE_GROUP_REQUEST, groupSaga.DeleteGroupAsync),
    takeLatest(types.ADD_FRIEND_TO_GROUP_REQUEST, groupSaga.AddFriendToGroupAsync),
    takeLatest(types.LEAVE_GROUP_REQUEST, groupSaga.LeaveGroupAsync),
    takeLatest(types.GROUP_UPLOAD_IMAGE_REQUEST, groupSaga.uploadImageAsync),
    takeLatest(types.REMOVE_MEMBER_REQUEST, groupSaga.RemoveMemberAsync),
    takeLatest(types.GET_USER_PAYMENT_REQUEST, paymentSaga.getUserPaymentAsync),
    takeLatest(types.ADD_PAYMENT_REQUEST, paymentSaga.addPaymentAsync),
    takeLatest(types.EDIT_PAYMENT_REQUEST, paymentSaga.editPaymentAsync),
    takeLatest(types.DELETE_PAYMENT_REQUEST, paymentSaga.deletePaymentAsync),
    takeLatest(types.ADD_PAYMENT_COMMENT_REQUEST, paymentSaga.addPaymentCommentAsync),
    takeLatest(types.GET_USER_ACTIVITIES_REQUEST, activitySaga.getUserActivitiesAsync),
    takeLatest(types.PUSH_NOTIFICATION_REQUEST, notificationSaga.pushNotificationAsync),
  ]);
}
