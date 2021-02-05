import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_NOTIFICATIONS_URL } from "../../../../local_env_vars";
import { notificationApi } from "../../../models/api/axios-api/notification";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";

export class NotificationAPI implements notificationApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_NOTIFICATIONS_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (token != undefined && token != null) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async pushNotification(FCMToken: string): Promise<Response<null>> {
    let result: Response<UserActivities> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("", {
        token: FCMToken,
      });

      if (response.status == 204) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("push notification api result");
      log(result);
    } catch (e) {
      log("push notification api error");
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

  async remindMember(message: string, contactId: string): Promise<Response<any>> {
    let result: Response<any> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/remind", {
        message: message,
        contactId: contactId,
      });

      if (response.status == 204) {
        result = {
          success: true,
          status: response.status,
          response: null,
        };
      }
      log("remind member api result");
      log(result, false);
    } catch (e) {
      log("remind member api error");
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
