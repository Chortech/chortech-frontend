import { Activity } from "../../other/axios/Activity";
import { Response } from "../../responses/axios/response";

export interface activityApi {
  getActivities(): Promise<Response<Activity[]>>;
}
