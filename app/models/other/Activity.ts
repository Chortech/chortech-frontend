import { Debt } from "./Debt";
import { Expense } from "./Expense";
import { User } from "./User";

export type Activity = {
  id: string;
  user: User;
  type: string;
  expense?: Expense;
  debt?: Debt;
};
