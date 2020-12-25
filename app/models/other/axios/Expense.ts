import { Comment } from "./Comment";
import { Participant } from "./Participant";

export interface Expense {
  id: string;
  description: string;
  total: number;
  paid_at: number;
  group?: string;
  notes?: string;
  participants: Array<Participant>
}
