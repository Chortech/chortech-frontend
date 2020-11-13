import { ToastAndroid } from "react-native";
import { put } from "redux-saga/effects";
import { Action } from "../../models/actions/action";
import { SignUpRequest } from "../../models/requests/signUp";
import { SignUpResponse } from "../../models/responses/signUp";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";
import * as signUpActions from "../actions/signUpActions";

export default function* signUpAsync(action: Action<SignUpRequest>) {
  const { name, email, phone, password } = action.payload;
  let response: SignUpResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.signUp(name, email, phone, password);
    console.log("sign up reponse: " + response);
  } catch (error) {
    console.log(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
    // yield put(signUpActions.onSignUpResponse(response));
    yield navigationRef.current?.navigate("CodeVerification", {
      parentScreen: "SignUp",
    });
  } else {
    yield put(signUpActions.onSignUpFail());
    ToastAndroid.show("خطا در ارتباط با سرور", ToastAndroid.SHORT);
  }
}
