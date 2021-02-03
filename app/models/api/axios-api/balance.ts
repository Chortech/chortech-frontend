import { FriendBalance, GroupMembersBalances } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";
import { GroupBalance } from "../../other/axios/Balance";

export interface balanceApi {
  getFriendsBalance(): Promise<Response<FriendBalance[]>>;
  getFriendBalance(friendId: string): Promise<Response<FriendBalance>>;
  getGroupsBalances(): Promise<Response<GroupBalance[]>>;
  getGroupMembersBalances(groupId: string): Promise<Response<GroupMembersBalances>>;
}
