import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import { USER_BY_EMAIL } from "./queries";
import { API_URL, API_KEY } from "../../../../local_env_vars";

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
    password: string
  ): Promise<LoginResponse> {
    const data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
    console.log(data.UserByEmail);
    return {
      id: data.UserByEmail._id.toString(),
      token: {
        access: "",
        expires: 0,
        created: 0,
      },
    };
  }

  async signUp(
    email: string,
    phone: string,
    password: string
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

console.log("abcd" + Api.endpoint);
