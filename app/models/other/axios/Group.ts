import { ExpenseBalance, MemberBalance } from "./Balance";
import { User } from "./User";

export interface Group {
  id: string;
  name: string;
  creator: Creator;
  members?: Array<Member>;
  balance?: number;
  expenses?: ExpenseBalance[];
}

export interface Creator {
  name: string;
  email: string;
  picture: string;
}

export interface Member {
  id?: string;
  name: string;
  email: string;
  picture: string;
  totalBalance: number;
  balances: User[];
}
