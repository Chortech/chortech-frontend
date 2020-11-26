import { Debt } from "../other/Debt";
import { Expense } from "../other/Expense";

export interface ActivityApi {
    addActivity(
        id: string,
        type: string,
        expense?: Expense,
        debt?: Debt,
    )
}