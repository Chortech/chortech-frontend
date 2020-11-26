/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import * as authSaga from "./authSaga";
import identifyAccountSaga from "./identifyAccountSaga";
import { generateCodeAsync } from "./codeVerificationSaga";
import resetPasswordSaga from "./resetPasswordSaga";
// import signUpSaga from "./signUpSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, authSaga.loginAsync),
    takeLatest(types.IDENTIFY_REQUEST, identifyAccountSaga),
    takeLatest(types.GENERATE_CODE_REQUEST, generateCodeAsync),
    takeLatest(types.RESET_PASSWORD_REQUEST, resetPasswordSaga),
    takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
    // takeLatest(types.SIGNUP_REQUEST, authSaga.signUpAsync),
  ]);
}
