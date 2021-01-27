import { InputType } from "../../utils/inputTypes";
import { Comment } from "../other/axios/Comment";
import { CreditCard } from "../other/axios/CreditCard";
import { Expense } from "../other/axios/Expense";
import { Friend } from "../other/axios/Friend";
import { Payment } from "../other/axios/Payment";
import { Token } from "../other/axios/Token";
import { Group } from "../other/graphql/Group";

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
  friends: Array<Friend>;
  groups: Array<Group>;
  activities: Array<Expense>;
  payment: Payment;
  myCreditCards: Array<CreditCard>;
  otherCreditCards: Array<CreditCard>;
  imageUri: string;
}
