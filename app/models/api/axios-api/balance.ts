import { FriendBalance } from "../../responses/axios/user";

export interface balanceApi {
  getFriendsBalance(): Promise<FriendBalance[]>;
  getFriendBalance(friendId: string): Promise<FriendBalance>;
}
