import { AddActivityResponse } from "../responses/addActivityResponse";
import { AddDebtResponse } from "../responses/addDebtResponse";
import { AddExpenseResponse } from "../responses/addExpenseResponse";
import { AddParticipantResponse } from "../responses/addParticipantResponse";

export interface ActivityApi {
    addActivity(
        userId: string,
        type: string,
        groupId?: string,
        expenseId?: string,
        debtId?: string,
    ): Promise<AddActivityResponse>;

    addExpense(
        description: string,
        category: string,
        totalPrice: string,
    ): Promise<AddExpenseResponse>;

    addDebt(
        description: string,
        category: string,
        debt: number,
        creditorId: string,
    ): Promise<AddDebtResponse>;

    addParticipant(
        expenseId: string,
        userId: string,
        share: number,
    ): Promise<AddParticipantResponse>;
}