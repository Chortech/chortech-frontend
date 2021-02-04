import { Comment } from "./Comment";
import { Group } from "./Group";
import { User } from "./User";

export interface Payment {
  id: string;
  from: User;
  to: User;
  amount: number;
  paid_at: number;
  group?: Group;
  notes?: string;
  comments?: Array<Comment>;
}
