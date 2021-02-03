/*
 * combines all th existing reducers
 */
import * as authReducer from "./authReducer";
import * as userReducer from "./userReducer";

export default Object.assign(authReducer, userReducer);
