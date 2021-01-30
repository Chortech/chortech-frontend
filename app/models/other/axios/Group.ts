import { ExpenseBalance, MemberBalance } from "./Balance";
import { User } from "./User";

export interface Group {
  id: string;
  name: string;
  creator: Creator | string;
  picture: string;
  createdAt: number;
  updatedAt: number;
  members?: Member[];
  balance?: number;
  expenses?: ExpenseBalance[];
}

export interface Creator {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  picture?: string;
}

export interface Member {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  picture?: string;
  totalBalance?: number;
  balances?: User[];
}
