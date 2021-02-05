import { Comment } from "../../other/axios/Comment";
import { ExpenseBalance, GroupBalance, MemberBalance } from "../../other/axios/Balance";
import { Friend } from "../../other/axios/Friend";
import { Participant, PRole } from "../../other/axios/Participant";
import { Group } from "../../other/axios/Group";

export interface AddFriend {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  friends: Array<Friend>;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

export interface EditProfile {
  name: string;
  email?: string;
  phone?: string;
  picture: string;
}

export interface AddExpense {
  id: string;
  description: string;
  total: number;
  paid_at: number;
  group?: string;
  notes?: string;
  participants: Array<Participant>;
  category: number;
}

export interface EditExpense {
  id?: string;
  description?: string;
  total?: number;
  paid_at?: number;
  group?: string;
  notes?: string;
  category: number;
  participants?: Array<Participant>;
}

export interface FriendRelations {
  relations: Array<FriendRelation>;
}

export interface FriendRelation {
  to: {
    id: string;
    name: string;
  };
  amount: string;
  role: PRole;
}

export interface ExpenseComments {
  expenseId: string;
  comments: Array<Comment>;
}

export interface UploadImage {
  key: string;
  url: string;
}

export interface FriendBalance {
  other?: string;
  balance?: number;
  balances?: ExpenseBalance[];
}

export interface GetGroupInfo {
  group?: Group;
}

export interface RemoveGroupMember {
  group?: Group;
}

export interface GroupExpenses {
  group: GroupBalance;
  expenses: ExpenseBalance[];
}

export interface GroupMembersBalances {
  groupId: string;
  membersBalances: MemberBalance[];
}
