import { FriendsResponse } from "../responses/getFriends";

export interface FriendsApi {
  getUserFriends(userId: string): Promise<FriendsResponse>;
}
