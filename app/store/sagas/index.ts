/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";

import * as authSaga from "./authSaga";
import identifyAccountSaga from "./identifyAccountSaga";
import { generateCodeAsync } from "./codeVerificationSaga";
import resetPasswordSaga from "./resetPasswordSaga";

import * as groupSaga from "./groupSaga"


export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.IDENTIFY_REQUEST, identifyAccountSaga),
    takeLatest(types.GENERATE_CODE_REQUEST, generateCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordSaga),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    takeLatest(types.ADD_GROUP_REQUEST, groupSaga.addGroupAsync),
    takeLatest(types.UPDATE_GROUP_REQUEST, groupSaga.updateGroupAsync),
    takeLatest(types.DELETE_GTOUP_REQUEST, groupSaga.deleteGroupAsync),
    takeLatest(types.GET_GROUP_BY_ID, groupSaga.getGroupByIdAsync),
  ]);
}
