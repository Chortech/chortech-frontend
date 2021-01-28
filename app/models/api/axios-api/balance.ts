import { FriendBalance } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";

export interface balanceApi {
  getFriendsBalance(): Promise<Response<FriendBalance[]>>;
  getFriendBalance(friendId: string): Promise<Response<FriendBalance>>;
}
