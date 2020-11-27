// export action creators
import * as authActions from "./authActions";
import * as identifyAccountActions from "./identifyAccountActions";
import * as codeVerificationActions from "./codeVerificationActions";
import * as resetPasswordActions from "./resetPasswordActions";
import * as activityActions from "./activityActions";
import * as friendActions from "./friendActions";
import * as userActions from "./userActions";
import * as groupActions from "./groupActions";

export const ActionCreators = Object.assign(
  {},
  authActions,
  identifyAccountActions,
  codeVerificationActions,
  resetPasswordActions,
  activityActions,
  friendActions,
  userActions,
  groupActions
);
