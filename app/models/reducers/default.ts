import { InputType } from "../../utils/inputTypes";
import { Comment } from "../other/axios/Comment";
import { CreditCard } from "../other/axios/CreditCard";
import { Expense } from "../other/axios/Expense";
import { Friend } from "../other/axios/Friend";
import { Payment } from "../other/axios/Payment";
import { Token } from "../other/axios/Token";
import { Group } from "../other/axios/Group";
import { Activity } from "../other/axios/Activity";

export interface IUserState {
  isLoggedIn: boolean;
  loading: boolean;
  id: string;
  token: Token;
  name: string;
  email: string;
  phone: string;
  password: string;
  picture: string;
  authInputType: InputType;
  friends: Friend[];
  groups: Group[];
  activities: Activity[];
  expenses: Expense[];
  payment: Payment;
  myCreditCards: CreditCard[];
  otherCreditCards: CreditCard[];
  imageUri: string;
  currentGroup: Group;
  currentFriend: Friend;
  currentActivity: Activity;
  currentExpense: Expense;
}
