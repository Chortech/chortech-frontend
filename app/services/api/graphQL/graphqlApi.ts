import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import { USER_BY_EMAIL, USER_BY_PHONE } from "./queries";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { InputType } from "../../../utils/inputTypes";

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
    let responsePassword: string = "";
    let repsonse: LoginResponse = {
      id: "-1",
      success: false,
    };

    if (inputType == InputType.Email) {
      data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
      responsePassword =
        data.UserByEmail != null ? data.UserByEmail.password : responsePassword;
      repsonse = {
        id: data.UserByEmail != null ? data.UserByEmail._id.toString() : "-1",
        success: password === responsePassword,
      };
    } else {
      data = await this.client.request(USER_BY_PHONE, { phoneNumber: phone });
      responsePassword =
        data.UserByPhone != null ? data.UserByPhone.password : responsePassword;
      repsonse = {
        id: data.UserByPhone != null ? data.UserByPhone._id.toString() : "-1",
        success: password === responsePassword,
      };
    }

    return repsonse;
  }

  async signUp(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<SignUpResponse> {
    return {
      id: "1",
      name: "",
      token: {
        access: "",
        expires: 0,
        created: 0,
      },
    };
  }

  async verifyCode(email: string, phone: string, code: string): Promise<void> {}

  async resetPassword(
    email: string,
    phone: string,
    password: string
  ): Promise<void> {}

  async generateCode(email: string, phone: string): Promise<void> {}

  async cancelCode(email: string, phone: string): Promise<void> {}
}

export const Api = new GraphQLApi();
