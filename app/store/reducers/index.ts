/*
 * combines all th existing reducers
 */
import * as IdentifyAccountReducer from "./identifyAccountReducer";
import * as authReducer from "./authReducer";
import * as codeVerificationReducer from "./codeVerificationReducer";
import * as resetPasswordReducer from "./resetPasswordReducer";
import * as friendReducer from "./friendReducer";
import * as userReducer from "./userReducer";
import * as groupReducer from "./groupReducer";

export default Object.assign(
  authReducer,
  IdentifyAccountReducer,
  codeVerificationReducer,
  resetPasswordReducer,
  friendReducer,
  userReducer,
  groupReducer
);
