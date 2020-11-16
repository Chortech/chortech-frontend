/*
 * combines all th existing reducers
 */
import * as IdentifyAccountReducer from "./identifyAccountReducer";
import * as authReducer from "./authReducer";
import * as codeVerificationReducer from "./codeVerificationReducer";
import * as resetPasswordReducer from "./resetPasswordReducer";
// import * as signUpReducer from "./signUpReducer";

export default Object.assign(
  authReducer,
  IdentifyAccountReducer,
  codeVerificationReducer,
  resetPasswordReducer
);
