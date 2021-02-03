// export action creators
import * as authActions from "./authActions";
import * as userActions from "./userActions";
import * as expenseActions from "./expenseActions";
import * as friendActions from "./friendActions";
import * as groupActions from "./groupActions";
import * as verificationActions from "./verificationActions";
import * as balanceActions from "./balanceActions";
import * as paymentActions from "./paymentActions";
import * as activityActions from "./activityActions";

export const ActionCreators = Object.assign(
  {},
  authActions,
  userActions,
  expenseActions,
  friendActions,
  groupActions,
  verificationActions,
  balanceActions,
  paymentActions,
  activityActions
);
