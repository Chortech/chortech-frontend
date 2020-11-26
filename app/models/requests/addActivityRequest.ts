export interface AddActivityRequest {
  userId: string;
  type: string;
  groupId?: string;
  expenseId?: string;
  debtId?: string;
}
