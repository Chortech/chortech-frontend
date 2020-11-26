import { Debt } from "./Debt";
import { Expense } from "./Expense";

export type Activity = {
  id: string;
  type: string;
  expense?: Expense;
  debt?: Debt;
};
