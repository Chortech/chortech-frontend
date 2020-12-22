import axios, { AxiosInstance, AxiosResponse } from "axios";
import { SERVER_USER_URL } from "../../../../local_env_vars";
import { userApi } from "../../../models/api/axios-api/user";
import { IUserState } from "../../../models/reducers/default";
import { Response } from "../../../models/responses/axios/response";
import { UserProfileResponse } from "../../../models/responses/axios/user";
import configureStore from "../../../store";
import { log } from "../../../utils/logger";

export class UserAPI implements userApi {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: SERVER_USER_URL,
    });

    this.client.interceptors.request.use(function (config) {
      const state: IUserState = configureStore().store.getState()["authReducer"];
      log("token");
      log(state.token);
      if (state.token != undefined) {
        config.headers["Authorization"] = `Bearer ${state.token?.access}`;
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
    } catch (error) {
      log("get user profile error");
      log(error);
    }

    return result;
  }
}

export const userAPI = new UserAPI();
