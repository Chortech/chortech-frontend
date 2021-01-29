import { FriendBalance } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";
import { GroupBalance, MemberBalance } from "../../other/axios/Balance";
import { GroupExpenses } from "../../responses/axios/group";

export interface balanceApi {
  getFriendsBalance(): Promise<Response<FriendBalance[]>>;
  getFriendBalance(friendId: string): Promise<Response<FriendBalance>>;
  getGroupsBalances(): Promise<Response<GroupBalance>>;
  getGroupExpenses(groupId: string): Promise<Response<GroupExpenses>>;
  getGroupMembersBalances(groupId: string): Promise<Response<MemberBalance[]>>;
}
