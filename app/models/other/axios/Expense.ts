import { Comment } from "./Comment";
import { Participant, PRole } from "./Participant";

export interface Expense {
  id: string;
  description: string;
  total: number;
  paid_at: number;
  group?: string;
  notes?: string;
  participants?: Array<Participant>;
  comments?: Array<Comment>;
  creator?: string;
  you?: You;
}

export interface You {
  role: PRole;
  amount: number;
}

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
}
