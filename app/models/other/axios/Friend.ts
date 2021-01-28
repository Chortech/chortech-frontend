import { FriendBalance } from "../../responses/axios/user";

export type Friend = {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  picture?: string;
  balance?: number;
  expenses?: FriendBalance[];
};
