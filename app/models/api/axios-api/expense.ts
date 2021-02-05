import { Participant } from "../../other/axios/Participant";
import {
  AddExpense,
  EditExpense,
  FriendRelations,
  ExpenseComments,
  GroupExpenses,
} from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";
import { Expense } from "../../other/axios/Expense";

export interface expenseApi {
  getUserExpenses(): Promise<Response<Expense[]>>;
  getUserExpense(expenseId: string): Promise<Response<Expense>>;
  getFriendRelations(): Promise<Response<FriendRelations>>;
  getExpenseComments(expenseId: string): Promise<Response<ExpenseComments>>;
  addExpense(
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    category: number,
    group?: string,
    notes?: string
  ): Promise<Response<AddExpense>>;
  updateExpense(
    expenseId: string,
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    category: number,
    group?: string,
    notes?: string
  ): Promise<Response<EditExpense>>;
  deleteExpense(expenseId: string): Promise<Response<null>>;
  addComment(text: string, created_at: number, expenseId: string): Promise<Response<null>>;
  getGroupExpenses(groupId: string): Promise<Response<GroupExpenses>>;
}
