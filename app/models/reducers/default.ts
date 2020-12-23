import { InputType } from "../../utils/inputTypes";
import { CreditCard } from "../other/axios/CreditCard";
import { Token } from "../other/axios/Token";
import { Activity } from "../other/graphql/Activity";
import { Friend } from "../other/graphql/Friend";
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
  activities: Array<Activity>;
  myCreditCards: Array<CreditCard>;
  otherCreditCards: Array<CreditCard>;
}
