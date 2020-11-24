type Activity = {
  id: string;
  user: User;
  type: string;
  expense?: Expense;
  debt?: Debt;
};
