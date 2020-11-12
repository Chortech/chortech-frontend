/*
 * combines all th existing reducers
 */
import { IdentifyAccountReducer } from "./identifyAccountReducer";
import * as loginReducer from "./loginReducer";
export default Object.assign(loginReducer, IdentifyAccountReducer);
