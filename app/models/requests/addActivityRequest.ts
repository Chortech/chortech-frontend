import { Debt } from "../other/Debt";
import { Expense } from "../other/Expense";

export interface AddActivityRequest {
  id: string;
  type: string;
  expense?: Expense;
  debt?: Debt;
}
