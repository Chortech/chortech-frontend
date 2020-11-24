export interface IUserState {
  loading: boolean;
  id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  credit: number;
  balance: number;
  friends: Array<Friend>;
  groups: Array<Group>;
}
