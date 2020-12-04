/*
 * combines all th existing reducers
 */
import * as authReducer from "./authReducer";
import * as activityReducer from "./activityReducer";
import * as friendReducer from "./friendReducer";
import * as userReducer from "./userReducer";
import * as groupReducer from "./groupReducer";

export default Object.assign(
  authReducer,
  activityReducer,
  friendReducer,
  userReducer,
  groupReducer
);
