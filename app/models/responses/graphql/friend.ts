import { Friend } from "../../other/Friend";

export interface AddFriendResponse {
  success: boolean;
  friend: Friend;
}

export interface DeleteFriendResponse {
  success: boolean;
  id: string;
}
