import { User } from "../other/User";
import { Activity } from "../other/Activity";
import { Friend } from "../other/Friend";

export interface GetUserResponse {
  success: boolean;
  user?: User;
}

export interface GetUserActivitiesResponse {
  userId: string;
  success: boolean;
  activities: Array<Activity>;
}

export interface GetUserFriendsResponse {
  success: boolean;
  userId: string;
  friends: Array<Friend>;
}

export interface UpdateUserResponse {
  success: boolean;
  user?: User;
}

export interface UserByFilterResponse {
  success: boolean;
  user: User;
}
