import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_ACTIVITY_URL } from "../../../../local_env_vars";
import { activityApi } from "../../../models/api/axios-api/activity";
import { Activity } from "../../../models/other/axios/Activity";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";

export class ActivityAPI implements activityApi {
    client: AxiosInstance;

    constructor(token: Token) {
        this.client = axios.create({
            baseURL: SERVER_ACTIVITY_URL,
        });

        this.client.interceptors.request.use(function (config) {
            if (token != undefined && token != null) {
                config.headers["Authorization"] = `Bearer ${token.access}`;
            }
            return config;
        });
    }

    async getActivities(): Promise<Response<Activity[]>> {
        let result: Response<Activity[]> = {
            success: false,
            status: -1,
        };

        try {
            let response: AxiosResponse = await this.client.get("");

            if (response.status == 200) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            }
            log("get activities api result");
            log(result);
        } catch (e) {
            log("get activities api error");
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
