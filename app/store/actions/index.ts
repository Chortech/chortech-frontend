// export action creators
import * as authActions from "./authActions";
import * as identifyAccountActions from "./identifyAccountActions";
import * as codeVerificationActions from "./codeVerificationActions";
import * as resetPasswordActions from "./resetPasswordActions";
<<<<<<< HEAD
import * as friendActions from "./friendActions";
import * as userActions from "./userActions";
=======
import * as groupActions from "./groupActions"
>>>>>>> 138f6b196ef7aff97bda182e0fd5e8f8119aedd5

export const ActionCreators = Object.assign(
  {},
  authActions,
  identifyAccountActions,
  codeVerificationActions,
  resetPasswordActions,
<<<<<<< HEAD
  friendActions,
  userActions
=======
  groupActions,
>>>>>>> 138f6b196ef7aff97bda182e0fd5e8f8119aedd5
);
