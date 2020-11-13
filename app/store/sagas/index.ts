/**
 *  Redux saga class init
 */
import { takeLatest, all } from "redux-saga/effects";
import * as types from "../actions/types";
import loginSaga from "./loginSaga";
import identifyAccountSaga from "./identifyAccountSaga";
import { generateCodeAsync } from "./codeVerificationSaga";

export default function* watch() {
  yield all([
    takeLatest(types.LOGIN_REQUEST, loginSaga),
    takeLatest(types.IDENTIFY_REQUEST, identifyAccountSaga),
    takeLatest(types.GENERATE_CODE_REQUEST, generateCodeAsync),
  ]);
}
