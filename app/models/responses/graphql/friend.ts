import { Friend } from "../../other/graphql/Friend";

export interface AddFriendResponse {
  success: boolean;
  friend: Friend;
}

export interface DeleteFriendResponse {
  success: boolean;
  id: string;
}
