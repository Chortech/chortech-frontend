import { ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { GenerateCodeRequest } from "../../models/requests/generateCode";
import { IdentifyAccountRequest } from "../../models/requests/identify";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";

export function* generateCodeAsync(action: Action<GenerateCodeRequest>) {
  const { email, phone, inputType } = action.payload;
  try {
    yield Api.generateCode(email, phone, inputType);
  } catch (error) {
    console.log("failed");
  }
}
