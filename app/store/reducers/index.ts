/*
 * combines all th existing reducers
 */
import * as IdentifyAccountReducer from "./identifyAccountReducer";
import * as loginReducer from "./loginReducer";
import * as codeVerificationReducer from "./codeVerificationReducer";
import * as resetPasswordReducer from "./resetPasswordReducer";
import * as signUpReducer from "./signUpReducer";

export default Object.assign(
  loginReducer,
  IdentifyAccountReducer,
  codeVerificationReducer,
  resetPasswordReducer,
  signUpReducer
);
