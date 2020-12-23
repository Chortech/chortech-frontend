export interface Participant {
  id: string;
  amount: number;
  role: PRole;
}

export enum PRole {
  Debtor = "debtor",
  Creditor = "creditor",
}
