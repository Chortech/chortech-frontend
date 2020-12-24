import { InputType } from "../../utils/inputTypes";
import { Activity } from "../other/Activity";
import { Friend } from "../other/Friend";
import { Group } from "../other/Group";

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
  imageUri: string;
}
