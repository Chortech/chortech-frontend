import { PRole } from "./Participant";

export type Item = {
  id: string;
  name: string;
  amount: number;
  selected?: boolean;
  role?: PRole;
};
