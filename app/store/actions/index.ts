// export action creators
import * as authActions from "./authActions";
import * as identifyAccountActions from "./identifyAccountActions";
import * as codeVerificationActions from "./codeVerificationActions";
import * as resetPasswordActions from "./resetPasswordActions";
import * as activityActions from "./activityActions";

export const ActionCreators = Object.assign(
  {},
  identifyAccountActions,
  codeVerificationActions,
  resetPasswordActions,
  authActions,
  activityActions
);
