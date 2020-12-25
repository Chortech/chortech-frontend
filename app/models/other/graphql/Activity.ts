import { Group } from "./Group";

export type Activity = {
  id: string;
  userId: string;
  name: string;
  type: string;
  groupId?: string;
  expenseId?: string;
  debtId?: string;
};
