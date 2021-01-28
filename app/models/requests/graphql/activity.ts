export interface AddActivityRequest {
  userId: string;
  type: string;
  groupId?: string;
  expenseId?: string;
  debtId?: string;
}

export interface AddExpenseRequest {
  userId: string;
  activityName: string;
  description: string;
  category: string;
  totalPrice: string;
}

export interface AddDebtRequest {
  userId: string;
  activityName: string;
  description: string;
  category: string;
  debt: number;
  creditorId: string;
}

export interface AddParticipantRequest {
  expenseId: string;
  userId: string;
  share: number;
}

export interface DeleteActivityRequest {
  id: string;
}

export interface DeleteDebtRequest {
  id: string;
}

export interface DeleteExpenseRequest {
  id: string;
}

export interface DeleteParticipantRequest {
  id: string;
}
