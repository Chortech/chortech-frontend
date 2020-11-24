import { useStore } from "react-redux";
import { IUserState } from "../../models/reducers/default";
import { ILoginState } from "../../models/reducers/login";

const loggedInUser: ILoginState = useStore().getState()["authReducer"];
console.log(JSON.stringify(loggedInUser, undefined, 2));

const initialState: IUserState = {
  loading: false,
  id: loggedInUser.id,
  name: loggedInUser.name,
  password: loggedInUser.password,
  email: loggedInUser.email,
  phone: loggedInUser.phone,
  credit: 0,
  balance: 0,
  friends: [],
  groups: [],
  activities: [],
};
