import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_USER_URL } from "../../../../local_env_vars";
import { userApi } from "../../../models/api/axios-api/user";
import { InviteeByEmail, InviteeByPhone } from "../../../models/other/axios/Invitee";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import * as authActions from "../../../store/actions/authActions";
import {
  AddFriend,
  GetUserFriends,
  DeleteFriend,
  UserProfile,
  UploadImage,
  EditProfile,
  FriendBalance,
} from "../../../models/responses/axios/user";
import configureStore from "../../../store";
import { log } from "../../../utils/logger";
import { validateToken } from "../../../utils/tokenValidator";
import { IUserState } from "../../../models/reducers/default";

import { Buffer } from "buffer";

export class UserAPI implements userApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_USER_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (validateToken(token)) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async getUserProfile(): Promise<Response<UserProfile>> {
    let result: Response<UserProfile> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("/profile");

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("get user profile api result");
      log(result, false);
    } catch (e) {
      log("get user profile api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async editUserProfile(newName: string, picture: string): Promise<Response<EditProfile>> {
    let result: Response<EditProfile> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/profile/edit", {
        newName: newName,
        picture: picture,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("edit profile api result");
      log(result, false);
    } catch (e) {
      log("edit profile api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response != undefined ? error.response.status : -1;
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async getUserFriends(): Promise<Response<GetUserFriends>> {
    let result: Response<GetUserFriends> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("/friends");

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            friends: response.data.friends,
          },
        };
      } else {
        result.status = response.status;
      }
      log("get user friends api result");
      log(result, false);
    } catch (e) {
      log("get user friends api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async addUserFriendByEmail(email: string): Promise<Response<AddFriend>> {
    let result: Response<AddFriend> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/friends", {
        email: email,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data.friends != undefined ? response.data.friends : [],
        };
      } else {
        result.status = response.status;
      }
      log("add user friend api(email) result");
      log(result, false);
    } catch (e) {
      log("add user friend api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";
        if (message == "You can't add your self as friend!") {
          result.status = -3;
        } else if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }
  async addUserFriendByPhone(phone: string): Promise<Response<AddFriend>> {
    let result: Response<AddFriend> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/friends", {
        phone: phone,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data.friends != undefined ? response.data.friends : [],
        };
      } else {
        result.status = response.status;
      }
      log("add user friend api(phone) result");
      log(result, false);
    } catch (e) {
      log("add user friend api (phone) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";
        if (message == "You can't add your self as friend!") {
          result.status = -3;
        } else if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async deleteFriend(friendId: string): Promise<Response<DeleteFriend>> {
    let result: Response<DeleteFriend> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/friends/${friendId}`);
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data.friends != undefined ? response.data.friends : [],
        };
      } else {
        result.status = response.status;
      }
      log("delete friend api result");
      log(result, false);
    } catch (e) {
      log("delete friend api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";
        if (message == "You can't remove your self as friend!") {
          result.status = -3;
        } else if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async inviteFriendRequestByEmail(email: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      log(email);
      let invitees: Array<InviteeByEmail> = [
        {
          name: "mySampleName",
          email: email,
        },
      ];
      let response: AxiosResponse = await this.client.post("/friends/invite", { invitees });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("invite friend api (email) result");
      log(result, false);
    } catch (e) {
      log("invite friend api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Found duplicate phone or email!") {
          result.status = -3;
        } else if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }
  async inviteFriendRequestByPhone(phone: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let invitees: Array<InviteeByPhone> = [
        {
          name: "sampleName",
          phone: phone,
        },
      ];
      let response: AxiosResponse = await this.client.post("/friends/invite", { invitees });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("invite friend api (email) result");
      log(result, false);
    } catch (e) {
      log("invite friend api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Found duplicate phone or email!") {
          result.status = -3;
        } else if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }
  async uploadImageRequest(image: string, data: any): Promise<Response<UploadImage>> {
    let result: Response<UploadImage> = {
      success: false,
      status: -1,
    };

    try {
      let contentType: String = image;
      let response: AxiosResponse = await this.client.get("/image/upload", {
        headers: {
          "X-Content-Type": contentType,
        },
      });
      const buff = Buffer.from(data.base64, "base64");

      let res = await axios.put(response.data.url, buff, {
        headers: {
          "x-amz-acl": "public-read",
          "Content-Length": data.base64.length,
          "Content-Type": data.type,
          "Content-Encoding": "base64",
        },
      });
      let lastRes: AxiosResponse = await this.client.put("/profile/edit", {
        picture: response.data.key,
      });
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("upload image api result");
      log(result, false);
    } catch (e) {
      log("upload image api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }
}
