import { User } from "../../other/graphql/User";

export interface GetUserRequest {
  id: string;
}

export interface GetUserActivitiesRequest {
  userId: string;
}

export interface GetUserFriendsRequest {
  userId: string;
}

export interface UpdateUserRequest {
  user: User;
}
