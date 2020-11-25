import { UPDATE_GROUP } from "../../services/api/graphQL/mutations";

// loaders
export const LOGIN_ENABLE_LOADER = "LOGIN_ENABLE_LOADER";
export const LOGIN_DISABLE_LOADER = "LOGIN_DISABLE_LOADER";

// login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";

// export const LOGIN_LOADING_ENDED = 'LOGIN_LOADING_ENDED';
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOG_OUT = "LOG_OUT";

//sign up
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

//identify account
export const IDENTIFY_REQUEST = "IDENTIFY_ACCOUNT";
export const IDENTIFY_RESPONSE = "IDENTIFY_RESPONSE";
export const IDENTIFY_FAIL = "IDENTIFY_FAIL";

//code verification
export const GENERATE_CODE_REQUEST = "GENERATE_CODE_REQUEST";

//reset password
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_RESPONSE = "RESET_PASSWORD_RESPONSE";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

//loading types
export const LOADING_ENABLED = "LOADING_ENABLED";
export const LOADING_DISABLED = "LOADING_DISABLED";

//group
export const ADD_GROUP_REQUEST = "ADD_GROUP_REQUEST";
export const UPDATE_GROUP_REQUEST = "UPDATE_GROUP_REQUEST";
export const DELETE_GTOUP_REQUEST = "DELETE_GTOUP_REQUEST";
export const GET_GROUP_BY_ID = "GET_GROUP_BY_ID";
