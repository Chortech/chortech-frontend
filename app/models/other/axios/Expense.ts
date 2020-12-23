import { Comment } from "./Comment";
import { Participant } from "./Participant";

export interface Expense {
  description: string;
  participants: Array<Participant>;
  total: number;
  comments?: Array<Comment>;
  group?: string;
  notes?: string;
  paid_at: number;
  created_at: number;
  modified_at: number;
}
