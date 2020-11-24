import { put } from "redux-saga/effects";
import { Alert, ToastAndroid } from "react-native";
// import { delay } from 'redux-saga';

import { Action } from "../../models/actions/action";
import { Api } from "../../services/api/graphQL/graphqlApi";
import { navigationRef } from "../../navigation/navigationService";

import * as authActions from "../actions/authActions";
import { LoginResponse } from "../../models/responses/login";
import { AddGroupRequest } from "../../models/requests/group";

export function* addGroupAsync(action: Action<AddGroupRequest>) {
    // yield put(authActions.onLoadingEnable());
    const { name, creator, members } = action.payload;
    let response: LoginResponse = {
      id: "-1",
      success: false,
    };
  
    try {
      response = yield Api.addGroup(name, creator, members);
      console.log("add group reponse: " + response);
    } catch (error) {
      console.log(JSON.stringify(error, undefined, 2));
    }
  
    // yield put(authActions.onLoadingDisable());
  
    if (response.success) {
    //   yield navigationRef.current?.navigate("CodeVerification", {
    //     parentScreen: "SignUp",
// });
    console.log("should i do something here!!!")
    } else {
    //   yield put(authActions.onSignUpFail());
      ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
    }
  }
  