import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { balanceApi } from "../../../models/api/axios-api/balance";
import { Token } from "../../../models/other/axios/Token";
import { FriendBalance } from "../../../models/responses/axios/user";
import { SERVER_BALANCES_URL } from "../../../../local_env_vars";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";

export class BalanceAPI implements balanceApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_BALANCES_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (token != undefined && token != null) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async getFriendsBalance(): Promise<Response<FriendBalance[]>> {
    let result: Response<FriendBalance[]> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("/friends");
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("get user friends balance api result");
      log(result);
    } catch (e) {
      log("get user friends balance api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }
  async getFriendBalance(friendId: string): Promise<Response<FriendBalance>> {
    let result: Response<FriendBalance> = {
      success: false,
      status: -1,
      response: {
        other: friendId,
        balances: [],
      },
    };

    try {
      let response: AxiosResponse = await this.client.get(`/friends/${friendId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            ...result.response,
            balances: response.data,
          },
        };
      } else {
        result.status = response.status;
      }
      log("get user friend balance api result");
      log(result.response);
    } catch (e) {
      log("get user friend balance api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }
}
