import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import * as queries from "./queries";
import * as mutations from "./mutations";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../../models/responses/identify";
import { ToastAndroid } from "react-native";
import { ResetPasswordResponse } from "../../../models/responses/resetPassword";
import { supportsResultCaching } from "@apollo/client/cache/inmemory/entityStore";
import { FriendsApi } from "../../../models/api/friend";
import { FriendsResponse } from "../../../models/responses/getFriends";
import { Friend } from "../../../models/other/Friend";
import { FriendsRequest } from "../../../models/requests/getFriends";

class GraphQLApi implements AuthApi, FriendsApi {
  endpoint: string = API_URL;
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  }

  async getUserFriends(userId: string): Promise<FriendsResponse> {
    let data: any = await this.client.request(queries.USER_FRIENDS, {
      userId: userId,
    });
    data = data.findUserByID;
    const result = data != null;
    const id = result ? data._id.toString() : "-1";
    const friendsIds = result ? data.friends.data : [];

    console.log("friends data: \n" + JSON.stringify(data, undefined, 2));

    return {
      success: result,
      userId: id,
      friends: friendsIds,
    };
  }

  async login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse> {
    let data: any;
    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: email,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: phone,
      });
      data = data.UserByPhone;
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
    password: string,
    inputType: InputType
  ): Promise<SignUpResponse> {
    let data = await this.client.request(mutations.ADD_USER, {
      name: name,
      password: password,
      email: inputType == InputType.Email ? email : null,
      phone: inputType == InputType.Phone ? phone : null,
    });
    data = data.createUser;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }

  async identifyAccount(
    email: string,
    phone: string,
    inputType: InputType
  ): Promise<IdentifyAccountResponse> {
    let data: any;

    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: email,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: phone,
      });
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
    let data = await this.client.request(mutations.UPDATE_USER_PASSWORD, {
      userId: id,
      password: password,
    });
    data = data.updateUser;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
}

export const Api = new GraphQLApi();
