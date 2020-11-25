import { Friend } from "../other/Friend";

export interface FriendsResponse {
  success: boolean;
  userId: string;
  friends: Array<Friend>;
}
