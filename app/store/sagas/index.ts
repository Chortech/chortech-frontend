/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import * as userSaga from "./userSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.GENERATE_CODE_REQUEST, authSaga.generateCodeAsync),
    takeLatest(types.VERIFY_CODE_REQUEST, authSaga.verifyCodeAsync),
    takeLatest(types.CANCEL_CODE_REQUEST, authSaga.cancelCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, authSaga.resetPasswordAsync),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.GET_USER_FRIENDS_REQUEST, userSaga.getUserFriendsAsync),
    takeLatest(types.ADD_FRIEND_REQUEST, userSaga.addFriendAsync),
    takeLatest(types.DELETE_USER_FRIEND_REQUEST, userSaga.deleteFriendAsync),
    takeLatest(types.INVITE_FRIEND_REQUEST, userSaga.inviteFriendAsync),
    takeLatest(types.GET_USER_PROFILE_REQUEST, userSaga.getUserProfileAsync),
    takeLatest(types.UPDATE_USER_REQUEST, userSaga.updateUserAsync),
    takeLatest(types.ADD_GROUP_REQUEST, userSaga.addGroupAsync),
    takeLatest(types.UPDATE_GROUP_REQUEST, userSaga.updateGroupAsync),
    takeLatest(types.DELETE_GROUP_REQUEST, userSaga.deleteGroupAsync),
    takeLatest(types.GET_GROUP_BY_ID_REQUEST, userSaga.getGroupByIdAsync),
    takeLatest(types.GET_USER_GROUPS_REQUEST, userSaga.getUserGroups),
    takeLatest(types.ADD_ACTIVITY_REQUEST, userSaga.addActivityAsync),
    takeLatest(types.ADD_EXPENSE_REQUEST, userSaga.addExpenseAsync),
    takeLatest(types.ADD_DEBT_REQUEST, userSaga.addDebtAsync),
    takeLatest(types.ADD_PARTICIPANT_REQUEST, userSaga.addParticipantAsync),
    takeLatest(types.DELETE_ACTIVITY_REQUEST, userSaga.deleteActivityAsync),
    takeLatest(types.DELETE_EXPENSE_REQUEST, userSaga.deleteExpenseAsync),
    takeLatest(types.DELETE_DEBT_REQUEST, userSaga.deleteDebtAsync),
    takeLatest(types.DELETE_PARTICIPANT_REQUEST, userSaga.deleteParticipantAsync),
    takeLatest(types.GET_USER_ACTIVITIES_REQUEST, userSaga.getUserActivitiesAsync),
    takeLatest(types.UPLOAD_IMAGE_REQUEST, userSaga.UploadImageAsync),
    // takeLatest(types.EDIT_PROFILE_REQUEST, userSaga.EditProfileAsync),
  ]);
}
