import { Expense } from "./Expense";
import { User } from "./User";

export type Participant = {
  id: string;
  expense: Expense;
  user: User;
  share: number;
};
