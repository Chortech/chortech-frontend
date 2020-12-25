export interface Participant {
  name?: string;
  id: string;
  amount: number;
  role: PRole;
}

export enum PRole {
  Debtor = "debtor",
  Creditor = "creditor",
}
