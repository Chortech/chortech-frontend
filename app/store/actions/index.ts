// export action creators
import * as authActions from "./authActions";
import * as activityActions from "./activityActions";
import * as friendActions from "./friendActions";
import * as userActions from "./userActions";
import * as groupActions from "./groupActions";

export const ActionCreators = Object.assign(
  {},
  authActions,
  activityActions,
  friendActions,
  userActions,
  groupActions
);
