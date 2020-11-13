// export action creators
import * as loginActions from "./loginActions";
import * as identifyAccountActions from "./identifyAccountActions";
import * as codeVerificationActions from "./codeVerificationActions";
import * as resetPasswordActions from "./resetPasswordActions";
import * as signUpActions from "./signUpActions";

export const ActionCreators = Object.assign(
  {},
  loginActions,
  identifyAccountActions,
  codeVerificationActions,
  resetPasswordActions,
  signUpActions
);
