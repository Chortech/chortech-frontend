import { User } from "./User";

export interface ExpenseBalance {
  id: string;
  type: string;
  balance: number;
  created_at: number;
  notes?: string;
  amount?: number;
  paid_at?: number;
  category?: number;
  description?: string;
  total?: number;
  from?: string;
  to?: string;
}

export interface GroupBalance {
  id: string;
  owner: string;
  name: string;
  balance?: number;
  memebers: any[];
}

export interface MemberBalance {
  id: string;
  balances: User[];
}
