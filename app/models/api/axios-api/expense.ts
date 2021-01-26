import { Participant } from "../../other/axios/Participant";
import {
  AddExpense,
  EditExpense,
  FriendRelations,
  ExpenseComments,
  UserExpense,
  UserExpenses,
} from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";

export interface expenseApi {
  getExpenses(): Promise<Response<UserExpenses>>;
  getExpense(expenseId: string): Promise<Response<UserExpense>>;
  getFriendRelations(): Promise<Response<FriendRelations>>;
  getExpenseComments(expenseId: string): Promise<Response<ExpenseComments>>;
  addExpense(
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    group?: string,
    notes?: string
  ): Promise<Response<AddExpense>>;
  updateExpense(
    expenseId: string,
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    group?: string,
    notes?: string
  ): Promise<Response<EditExpense>>;
  deleteExpense(expenseId: string): Promise<Response<null>>;
  addComment(text: string, created_at: number, expenseId: string): Promise<Response<null>>;
}
