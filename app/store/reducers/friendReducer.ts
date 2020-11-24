import { acc } from "react-native-reanimated";
import { useStore } from "react-redux";
import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { IUserState } from "../../models/reducers/default";
import { ILoginState } from "../../models/reducers/login";
import { FriendsRequest } from "../../models/requests/getFriends";
import * as types from "../actions/types";

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

export const friendReducer = createReducer(initialState, {
  [types.USER_FRIENDS_REQUEST](
    state: IUserState,
    action: Action<FriendsRequest>
  ) {
    return {
      ...state,
      id: action.payload.userId,
    };
  },
});
