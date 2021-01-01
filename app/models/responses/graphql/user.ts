import { User } from "../../other/graphql/User";
import { Activity } from "../../other/graphql/Activity";
import { Friend } from "../../other/graphql/Friend";
import { Expense } from "../../other/axios/Expense";

export interface GetUserResponse {
  success: boolean;
  user?: User;
}

export interface GetUserActivitiesResponse {
  userId: string;
  success: boolean;
  activities: Array<Expense>;
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
