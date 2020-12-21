import { InputType } from "../../utils/inputTypes";
import { Activity } from "../other/graphql/Activity";
import { Friend } from "../other/graphql/Friend";
import { Group } from "../other/graphql/Group";

export interface IUserState {
  isLoggedIn: boolean;
  loading: boolean;
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  authInputType: InputType;
  credit: number;
  balance: number;
  friends: Array<Friend>;
  groups: Array<Group>;
  activities: Array<Activity>;
}
