import { UserActivities } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";

export interface activityApi {
    getActivities(): Promise<Response<UserActivities>>;
}