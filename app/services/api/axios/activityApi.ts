import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_ACTIVITY_URL } from "../../../../local_env_vars";
import { activityApi } from "../../../models/api/axios-api/activity";
import { Participant } from "../../../models/other/axios/Participant";
import { Token } from "../../../models/other/axios/Token";
import { IUserState } from "../../../models/reducers/default";
import { Response } from "../../../models/responses/axios/response";
import { UserActivities } from "../../../models/responses/axios/user";
import configureStore from "../../../store";
import { log } from "../../../utils/logger";
import { validateToken } from "../../../utils/tokenValidator";

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

    async getActivities(): Promise<Response<UserActivities>> {
        let result: Response<UserActivities> = {
            success: false,
            status: -1,
        };

        return result;
    }
}
