import { Comment } from "../../other/axios/Comment";
import { Expense, ExpenseBalance } from "../../other/axios/Expense";
import { Friend } from "../../other/axios/Friend";
import { Participant, PRole } from "../../other/axios/Participant";
import { Token } from "../../other/axios/Token";
import { User } from "../../other/axios/User";

export interface GetUserFriends {
  friends: Array<Friend>;
}

export interface AddFriend {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  friends: Array<Friend>;
}

export interface DeleteFriend {
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

export interface UserExpenses {
  expenses: Array<Expense>;
}

export interface UserExpense {
  expense: Expense;
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
  self?: User;
  other?: User;
  balance?: number;
  expenses?: ExpenseBalance[];
}
