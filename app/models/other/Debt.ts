import { User } from "./User";

export type Debt = {
  id: string;
  description: string;
  category: string;
  debt: number;
  creditor: User;
};
