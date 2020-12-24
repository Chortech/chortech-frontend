import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_USER_URL } from "../../../../local_env_vars";
import { userApi } from "../../../models/api/axios-api/user";
import { Token } from "../../../models/other/axios/Token";
import { IUserState } from "../../../models/reducers/default";
import { Response } from "../../../models/responses/axios/response";
import { GetUserFriends, UserProfileResponse } from "../../../models/responses/axios/user";
import configureStore from "../../../store/index";
import { log } from "../../../utils/logger";

export class UserAPI implements userApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_USER_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (token != undefined && token != null) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async getUserProfile(): Promise<Response<UserProfileResponse>> {
    let result: Response<UserProfileResponse> = {
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
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
      } else {
        log("get user profile api error");
        log(e.message);
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
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
      } else {
        log("get user friends api error");
        log(e.message);
      }
    }
    return result;
  }
}
