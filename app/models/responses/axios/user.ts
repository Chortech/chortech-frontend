import { Comment } from "../../other/axios/Comment";
import { Expense } from "../../other/axios/Expense";
import { Friend } from "../../other/axios/Friend";
import { Participant, PRole } from "../../other/axios/Participant";
import { Token } from "../../other/axios/Token";

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

export interface UserProfileResponse {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

export interface EditProfileResponse {
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
}

export interface EditExpense {
  id?: string;
  description?: string;
  total?: number;
  paid_at?: number;
  group?: string;
  notes?: string;
  participants?: Array<Participant>;
}

export interface DeleteExpenseRequest {
  expenseId: string;
  token: Token;
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

export interface GetComment {
  comments: Array<Comment>;
}
