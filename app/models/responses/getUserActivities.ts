import { Activity } from "../other/Activity";

export interface GetUserActivitiesResponse {
  userId: string;
  success: boolean;
  activities: Array<Activity>;
}
