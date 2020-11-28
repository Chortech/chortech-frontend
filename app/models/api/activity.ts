import { DeleteDebtRequest } from "../requests/activity";
import {
  AddActivityResponse,
  AddExpenseResponse,
  AddDebtResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteExpenseResponse,
  DeleteParticipantResponse,
} from "../responses/activity";
import { GetUserActivitiesResponse } from "../responses/user";

export interface ActivityApi {
  addActivity(
    userId: string,
    type: string,
    groupId?: string,
    expenseId?: string,
    debtId?: string
  ): Promise<AddActivityResponse>;

  addExpense(
    userId: string,
    activityName: string,
    description: string,
    category: string,
    totalPrice: string
  ): Promise<AddExpenseResponse>;

  addDebt(
    userId: string,
    activityName: string,
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
