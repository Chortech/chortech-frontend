import { Activity } from "./Activity";
import { Friend } from "./Friend";
import { Group } from "./Group";

export type User = {
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  credit: number;
  balance: number;
  friends: Array<Friend>;
  groups: Array<Group>;
  activities: Array<Activity>;
  imageUri: string;
};
