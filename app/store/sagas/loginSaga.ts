/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put } from "redux-saga/effects";
// import { delay } from 'redux-saga';

import { Alert } from "react-native";
// import loginUser from 'app/services/loginUser';
import { Action } from "../../models/actions/action";
import { LoginRequest } from "../../models/requests/login";
import * as loginActions from "../actions/loginActions";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { LoginResponse } from "../../models/responses/login";

// Our worker Saga that logins the user
export default function* loginAsync(action: Action<LoginRequest>) {
  //   yield put(loginActions.enableLoader());
  //how to call api
  const { email, phone, password, inputType } = action.payload;
  let response: LoginResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.login(email, phone, password, inputType);
    console.log("data: " + JSON.stringify(response, undefined, 2));
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
    console.log("success");
    yield put(loginActions.onLoginResponse(response));
  } else {
    console.error("failed");
  }

  // const response = yield call(loginUser, action.username, action.password);
  //mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };

  // if (response.success) {
  // 	yield put(loginActions.onLoginResponse(response.data));
  // yield put(loginActions.disableLoader());

  // no need to call navigate as this is handled by redux store with SwitchNavigator
  //yield call(navigationActions.navigateToHome);
  // } else {
  // 	yield put(loginActions.loginFailed());
  // yield put(loginActions.disableLoader());
  // setTimeout(() => {
  // 	Alert.alert('test_user', response.message);
  // }, 200);
}
