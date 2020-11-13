import { ToastAndroid } from "react-native";
import { Action } from "../../models/actions/action";
import { IdentifyAccountRequest } from "../../models/requests/identify";
import { IdentifyAccountResponse } from "../../models/responses/identify";
import { navigationRef } from "../../navigation/navigationService";
import { Api } from "../../services/api/graphQL/graphqlApi";

export default function* identifyAccountAsync(
  action: Action<IdentifyAccountRequest>
) {
  const { email, phone, inputType } = action.payload;
  let response: IdentifyAccountResponse = {
    id: "-1",
    success: false,
  };

  try {
    response = yield Api.identifyAccount(email, phone, inputType);
    console.log("data: " + JSON.stringify(response, undefined, 2));
  } catch (error) {
    console.error(JSON.stringify(error, undefined, 2));
  }

  if (response.success) {
    console.log("success");
    yield navigationRef.current?.navigate("CodeVerification", {
      parentScreen: "AccountIdentification",
    });
  } else {
    ToastAndroid.show("اطلاعات وارد شده نادرست است", ToastAndroid.SHORT);
  }
}
