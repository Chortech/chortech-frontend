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
  category?: number;
}

export interface You {
  role: PRole;
  amount: number;
}
