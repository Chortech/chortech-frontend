import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { GroupApi } from "../../../models/api/group";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import { DefaultResponse } from "../../../models/responses/default"
import { USER_BY_EMAIL, USER_BY_PHONE, GET_GROUP_BY_ID } from "./queries";
import { UPDATE_USER_PASSWORD, ADD_USER, ADD_Group } from "./mutations";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../../models/responses/identify";
import { ToastAndroid } from "react-native";
import { ResetPasswordResponse } from "../../../models/responses/resetPassword";
import { DELETE_GTOUP_REQUEST, UPDATE_GROUP_REQUEST } from "../../../store/actions/types";

class GraphQLApi implements AuthApi,GroupApi {
  endpoint: string = API_URL;
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  }

//#region auth
  async login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse> {
    let data: any;
    if (inputType == InputType.Email) {
      data = await this.client.request(USER_BY_EMAIL, { emailTxt: email });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(USER_BY_PHONE, { phonestring: phone });
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
    let data = await this.client.request(ADD_USER, {
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

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
//#endregion auth
//#region group
async addGroup(
  name: string,
  creator: string,
  members: Array<string>,
): Promise<DefaultResponse> {
  console.log(creator)
  console.log(members)
  let data = await this.client.request(ADD_Group, {
    name: name,
    creator: creator,
    members: members,
  });
  data = JSON.parse(JSON.stringify(data));
  data = data.findGroupByID;

  return {
    id: data != null ? data._id.toString() : "-1",
    success: data != null,
    data: data,
  };
}

async updateGroup(
  groupId: string,
  name: string,
  creator: string,
  members: Array<string>,
): Promise<DefaultResponse> {
  let data = await this.client.request(UPDATE_GROUP_REQUEST, {
    groupId: groupId,
    name: name,
    creator: creator,
    members: members,
  });
  data = JSON.parse(JSON.stringify(data));
  data = data.findGroupByID;

  return {
    id: data != null ? data._id.toString() : "-1",
    success: data != null,
    data: data,
  };
}
async deleteGroup(
  groupId: string,
): Promise<DefaultResponse> {
  let data = await this.client.request(DELETE_GTOUP_REQUEST, {
    groupId: groupId,
  });
  data = JSON.parse(JSON.stringify(data));
  data = data.findGroupByID;

  return {
    id: data != null ? data._id.toString() : "-1",
    success: data != null,
    data: data,
  };
}

async getGroupById(
  groupId: string,
): Promise<DefaultResponse> {
  let data = await this.client.request(GET_GROUP_BY_ID, {
    groupId: groupId,
  });
  data = JSON.parse(JSON.stringify(data));
  data = data.findGroupByID;

  return {
    id: data != null ? data._id.toString() : "-1",
    success: data != null,
    data: data,
  };
}
//#endregion group
}
export const Api = new GraphQLApi();
