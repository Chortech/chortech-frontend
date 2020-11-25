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
import { UserByFilterResponse } from "../../../models/responses/userByFilter";
import { User } from "../../../models/other/User";
import { AddFriendResponse } from "../../../models/responses/addFriend";
import { DeleteFriendResponse } from "../../../models/responses/deleteFriend";
import { UserApi } from "../../../models/api/user";
import { FetchUserResponse } from "../../../models/responses/getUser";
import { UpdateUserResponse } from "../../../models/responses/updateUser";

class GraphQLApi implements AuthApi, FriendsApi, UserApi {
  endpoint: string = API_URL;
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  }

  async getUser(id: string): Promise<FetchUserResponse> {
    let data: any = await this.client.request(queries.COMPLETE_USER_BY_ID, {
      userId: id,
    });
    data = data.findUserByID;
    let successful: boolean = data != null;
    let user: User | undefined | null = undefined;
    if (successful) {
      user = {
        id: data._id.toString(),
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        credit: data.credit,
        balance: data.balance,
        friends: data.friends,
        groups: data.groups,
        activities: data.activities,
      };
    }

    return {
      success: successful,
      user: user,
    };
  }

  async updateUser(user: User): Promise<UpdateUserResponse> {
    let data: any = await this.client.request(mutations.UPDATE_USER, {
      userId: user.id,
      name: user.name,
      password: user.password,
      email: user.email,
      phone: user.phone,
    });
    data = data.updateUser;
    let successful: boolean = data != null;
    let updatedUser: User | undefined | null = undefined;
    if (successful) {
      updatedUser = {
        id: data._id.toString(),
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        credit: data.credit,
        balance: data.balance,
        friends: data.friends,
        groups: data.groups,
        activities: data.activities,
      };
    }
    return {
      success: successful,
      user: updatedUser,
    };
  }

  async getUserFriends(userId: string): Promise<FriendsResponse> {
    let data: any = await this.client.request(queries.USER_FRIENDS, {
      userId: userId,
    });
    data = data.findUserByID;
    const successful = data != null;
    const id = successful ? data._id.toString() : "-1";
    let friends: Array<Friend> = [];
    if (successful) {
      let friend: Friend;
      data.friends.data.forEach((element: any) => {
        friend = {
          id: element._id.toString(),
          friendId: element.friendId,
          friendName: element.friendName,
        };
        friends.push(friend);
      });
    }

    return {
      success: successful,
      userId: id,
      friends: friends,
    };
  }

  async getFilteredUser(
    emailOrPhone: string,
    inputType: InputType
  ): Promise<UserByFilterResponse> {
    let data: any;
    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: emailOrPhone,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: emailOrPhone,
      });
      data = data.UserByPhone;
    }
    let successful: boolean = data != null;
    let fetchedUser: User = {
      id: "-1",
      name: "",
      email: "",
      phone: "",
      password: "",
      credit: 0,
      balance: 0,
      friends: [],
      groups: [],
      activities: [],
    };
    if (successful) {
      fetchedUser = {
        ...fetchedUser,
        id: data._id.toString(),
        name: data.name,
      };
    }

    return {
      success: successful,
      user: fetchedUser,
    };
  }

  async addFriend(
    friendId: string,
    friendName: string,
    userId: string
  ): Promise<AddFriendResponse> {
    let data: any = await this.client.request(mutations.ADD_FRIEND, {
      friendId: friendId,
      friendName: friendName,
      userId: userId,
    });
    data = data.createFriend;
    let successful: boolean = data != null;
    let fetchedFriend: Friend = {
      id: "-1",
      friendId: "-1",
      friendName: "",
    };
    if (successful) {
      fetchedFriend = {
        id: data._id.toString(),
        friendId: data.friendId,
        friendName: data.friendName,
      };
    }

    return {
      success: successful,
      friend: fetchedFriend,
    };
  }

  async deleteFriend(id: string): Promise<DeleteFriendResponse> {
    let data: any = await this.client.request(mutations.DELETE_FRIEND, {
      id: id,
    });
    data = data.deleteFriend;
    let successful: boolean = data != null;
    let deleteId: string = successful ? data._id.toString() : "-1";

    return {
      success: successful,
      id: deleteId,
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
