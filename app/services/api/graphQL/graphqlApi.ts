import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import { USER_BY_EMAIL, USER_BY_PHONE } from "./queries";
import { UPDATE_USER_PASSWORD, ADD_USER } from "./mutations";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../../models/responses/identify";
import { ToastAndroid } from "react-native";
import { ResetPasswordResponse } from "../../../models/responses/resetPassword";
import { supportsResultCaching } from "@apollo/client/cache/inmemory/entityStore";

class GraphQLApi implements AuthApi {
  endpoint: string = API_URL;
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  }

  async login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse> {
    let data: any;
    // let repsonse: LoginResponse = {
    //   id: "-1",
    //   success: false,
    // };

    if (inputType == InputType.Email) {
      data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
      data = data.UserByEmail;
      // responsePassword =
      //   data.UserByEmail != null ? data.UserByEmail.password : responsePassword;
      // repsonse = {
      //   id: data.UserByEmail != null ? data.UserByEmail._id.toString() : "-1",
      //   success: password === responsePassword,
      // };
    } else {
      data = await this.client.request(USER_BY_PHONE, { phoneNumber: phone });
      data = data.UserByPhone;
      // responsePassword =
      //   data.UserByPhone != null ? data.UserByPhone.password : responsePassword;
      // repsonse = {
      //   id: data.UserByPhone != null ? data.UserByPhone._id.toString() : "-1",
      //   success: password === responsePassword,
      // };
    }

    let responsePassword = data != null ? data.password : "";

    return {
      id: data != null ? data._id.toString() : "-1",
      success: password === responsePassword,
    };
  }

  async signUp(
    name: string,
    email: string,
    phone: string,
    password: string
  ): Promise<SignUpResponse> {
    let data = await this.client.request(ADD_USER, {
      name: name,
      password: password,
      email: email,
      phone: phone,
    });
    data = data.createUser;

    return {
      id: data != null ? data._id : "-1",
      success: data != null,
    };
  }

  async identifyAccount(
    email: string,
    phone: string,
    inputType: InputType
  ): Promise<IdentifyAccountResponse> {
    let data: any;
    // let response: IdentifyAccountResponse = {
    //   id: "-1",
    //   success: false,
    // };

    if (inputType == InputType.Email) {
      data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(USER_BY_PHONE, { phoneNumber: phone });
      data = data.UserByPhone;
    }

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
  async verifyCode(email: string, phone: string, code: string): Promise<void> {}

  generateCode(email: string, phone: string, inputType: InputType): void {
    ToastAndroid.show("کد فعال‌سازی: ۱۲۳۴۵", ToastAndroid.LONG);
  }

  async cancelCode(email: string, phone: string): Promise<void> {}

  async resetPassword(
    id: string,
    password: string
  ): Promise<ResetPasswordResponse> {
    let data = await this.client.request(UPDATE_USER_PASSWORD, {
      userId: id,
      password: password,
    });
    data = data.updateUser;

    console.log(
      "reset password response: " + JSON.stringify(data, undefined, 2)
    );
    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
}

export const Api = new GraphQLApi();
