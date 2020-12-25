import { Participant } from "./Participant";

export type Expense = {
  id: string;
  description: string;
  category: string;
  totalPrice: string;
  participants: Array<Participant>;
};
