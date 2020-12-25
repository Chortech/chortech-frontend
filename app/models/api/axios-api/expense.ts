import { Participant } from "../../other/axios/Participant";
import { AddComment, AddExpense, GetComment, GetExpense, GetExpenses } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";

export interface expenseApi {
    getExpenses(): Promise<Response<GetExpenses>>;
    getExpense(expenseId: string): Promise<Response<GetExpense>>;
    addExpense(
        description: string,
        total: number,
        paid_at: number,
        participants: Array<Participant>,
        group?: string,
        notes?: string,
    ): Promise<Response<AddExpense>>;
    addComment(text: string, created_at: number, expenseId: string): Promise<Response<AddComment>>;
    getComment(expenseId: string): Promise<Response<GetComment>>;
}