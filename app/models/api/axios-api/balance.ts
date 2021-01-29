import { FriendBalance } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";
import { GroupBalance, MemberBalance } from "../../other/axios/Balance";
import { GroupExpenses, GroupMembersBalances } from "../../responses/axios/group";

export interface balanceApi {
  getFriendsBalance(): Promise<Response<FriendBalance[]>>;
  getFriendBalance(friendId: string): Promise<Response<FriendBalance>>;
  getGroupsBalances(): Promise<Response<GroupBalance[]>>;
  getGroupMembersBalances(groupId: string): Promise<Response<GroupMembersBalances>>;
}
