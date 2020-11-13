// export action creators
import * as loginActions from "./loginActions";
import * as identifyAccountActions from "./identifyAccountActions";
import * as codeVerificationActions from "./codeVerificationActions";

export const ActionCreators = Object.assign(
  {},
  loginActions,
  identifyAccountActions,
  codeVerificationActions
);
