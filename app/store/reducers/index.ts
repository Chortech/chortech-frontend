/*
 * combines all th existing reducers
 */
import * as IdentifyAccountReducer from "./identifyAccountReducer";
import * as loginReducer from "./loginReducer";
import * as codeVerificationReducer from "./codeVerificationReducer";

export default Object.assign(
  loginReducer,
  IdentifyAccountReducer,
  codeVerificationReducer
);
