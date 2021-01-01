// export action creators
import * as authActions from "./authActions";
import * as userActions from "./userActions";
import * as expenseActions from "./expenseActions";
import * as friendActions from "./friendActions";
import * as groupActions from "./groupActions";
import * as verificationActions from "./verificationActions";

export const ActionCreators = Object.assign(
  {},
  authActions,
  userActions,
  expenseActions,
  friendActions,
  groupActions,
  verificationActions
);
