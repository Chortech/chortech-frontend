import { DeleteDebtRequest } from "../requests/deleteDebt";
import { AddActivityResponse } from "../responses/addActivityResponse";
import { AddDebtResponse } from "../responses/addDebtResponse";
import { AddExpenseResponse } from "../responses/addExpenseResponse";
import { AddParticipantResponse } from "../responses/addParticipantResponse";
import { DeleteActivityResponse } from "../responses/deleteActivity";
import { DeleteExpenseResponse } from "../responses/deleteExpense";
import { DeleteParticipantResponse } from "../responses/deleteParticipant";
import { GetUserActivitiesResponse } from "../responses/getUserActivities";

export interface ActivityApi {
  addActivity(
    userId: string,
    type: string,
    groupId?: string,
    expenseId?: string,
    debtId?: string
  ): Promise<AddActivityResponse>;

  addExpense(
    description: string,
    category: string,
    totalPrice: string
  ): Promise<AddExpenseResponse>;

  addDebt(
    description: string,
    category: string,
    debt: number,
    creditorId: string
  ): Promise<AddDebtResponse>;

  addParticipant(
    expenseId: string,
    userId: string,
    share: number
  ): Promise<AddParticipantResponse>;

  getUserActivities(userId: string): Promise<GetUserActivitiesResponse>;

  deleteActivity(id: string): Promise<DeleteActivityResponse>;
  deleteExpense(id: string): Promise<DeleteExpenseResponse>;
  deleteDebt(id: string): Promise<DeleteDebtRequest>;
  deleteParticipant(id: string): Promise<DeleteParticipantResponse>;
}
