// login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOG_OUT = "LOG_OUT";

// sign up
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

// code verification
export const GENERATE_CODE_REQUEST = "GENERATE_CODE_REQUEST";
export const GENERATE_CODE_RESPONSE = "GENERATE_CODE_RESPONSE";
export const GENERATE_CODE_FAIL = "GENERATE_CODE_FAIL";
export const VERIFY_CODE_REQUEST = "VERIFY_CODE_REQUEST";
export const VERIFY_CODE_RESPONSE = "VERIFY_CODE_RESPONSE";
export const VERIFY_CODE_FAIL = "VERIFY_CODE_FAIL";
export const CANCEL_CODE_REQUEST = "CANCEL_CODE_REQUEST";
export const CANCEL_CODE_RESPONSE = "CANCEL_CODE_RESPONSE";
export const CANCEL_CODE_FAIL = "CANCEL_CODE_FAIL";

// reset password
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_RESPONSE = "RESET_PASSWORD_RESPONSE";
export const RESET_PASSWORD_FAIL = "RESET_PASSWORD_FAIL";

// change password
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_RESPONSE = "CHANGE_PASSWORD_RESPONSE";
export const CHANGE_PASSWORD_FAIL = "CHANGE_PASSWORD_FAIL";

// change email or phone
export const CHANGE_EMAIL_OR_PHONE_REQUEST = "CHANGE_EMAIL_OR_PHONE_REQUEST";
export const CHANGE_EMAIL_OR_PHONE_RESPONSE = "CHANGE_EMAIL_OR_PHONE_RESPONSE";
export const CHANGE_EMAIL_OR_PHONE_FAIL = "CHANGE_EMAIL_OR_PHONE_FAIL";

// loading types
export const LOADING_ENABLED = "LOADING_ENABLED";
export const LOADING_DISABLED = "LOADING_DISABLED";

// activity types
export const GET_USER_ACTIVITIES_REQUEST = "GET_USER_ACTIVITIES_REQUEST";
export const GET_USER_ACTIVITIES_RESPONSE = "GET_USER_ACTIVITIES_RESPONSE";
export const GET_USER_ACTIVITIES_FAIL = "GET_USER_ACTIVITIES_FAIL";
export const GET_USER_ACTIVITY_REQUEST = "GET_USER_ACTIVITY_REQUEST";
export const GET_USER_ACTIVITY_RESPONSE = "GET_USER_ACTIVITY_RESPONSE";
export const GET_USER_ACTIVITY_FAIL = "GET_USER_ACTIVITY_FAIL";
export const ADD_ACTIVITY_REQUEST = "ADD_ACTIVITY_REQUEST";
export const ADD_ACTIVITY_RESPONSE = "ADD_ACTIVITY_RESPONSE";
export const ADD_ACTIVITY_FAIL = "ADD_ACTIVITY_FAIL";
export const DELETE_ACTIVITY_REQUEST = "DELETE_ACTIVITY_REQUEST";
export const DELETE_ACTIVITY_RESPONSE = "DELETE_ACTIVITY_RESPONSE";
export const DELETE_ACTIVITY_FAIL = "DELETE_ACTIVITY_FAIL";
export const EDIT_ACTIVITY_REQUEST = "EDIT_ACTIVITY_REQUEST";
export const EDIT_ACTIVITY_RESPONSE = "EDIT_ACTIVITY_RESPONSE";
export const EDIT_ACTIVITY_FAIL = "EDIT_ACTIVITY_FAIL";

// expense types
export const ADD_EXPENSE_REQUEST = "ADD_EXPENSE_REQUEST";
export const ADD_EXPENSE_RESPONSE = "ADD_EXPENSE_RESPONSE";
export const ADD_EXPENSE_FAIL = "ADD_EXPENSE_FAIL";
export const EDIT_EXPENSE_REQUEST = "EDIT_EXPENSE_REQUEST";
export const EDIT_EXPENSE_RESPONSE = "EDIT_EXPENSE_RESPONSE";
export const EDIT_EXPENSE_FAIL = "EDIT_EXPENSE_FAIL";
export const DELETE_EXPENSE_REQUEST = "DELETE_EXPENSE_REQUEST";
export const DELETE_EXPENSE_RESPONSE = "DELETE_EXPENSE_RESPONSE";
export const DELETE_EXPENSE_FAIL = "DELETE_EXPENSE_FAIL";
export const GET_USER_EXPENSE_REQUEST = "GET_USER_EXPENSE_REQUEST";
export const GET_USER_EXPENSE_RESPONSE = "GET_USER_EXPENSE_RESPONSE";
export const GET_USER_EXPENSE_FAIL = "GET_USER_EXPENSE_FAIL";
export const GET_USER_EXPENSES_REQUEST = "GET_USER_EXPENSES_REQUEST";
export const GET_USER_EXPENSES_RESPONSE = "GET_USER_EXPENSES_RESPONSE";
export const GET_USER_EXPENSES_FAIL = "GET_USER_EXPENSES_FAIL";

// friend types
export const GET_USER_FRIENDS_REQUEST = "USER_FRIENDS_REQUEST";
export const GET_USER_FRIENDS_RESPONSE = "USER_FRIENDS_RESPONSE";
export const GET_USER_FRIENDS_FAIL = "GET_USER_FRIENDS_FAIL";
export const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
export const ADD_FRIEND_RESPONSE = "ADD_FRIEND_RESPONSE";
export const ADD_FRIEND_FAIL = "ADD_FRIEND_FAIL";
export const DELETE_USER_FRIEND_REQUEST = "DELETE_USER_FRIEND_REQUEST";
export const DELETE_USER_FRIEND_RESPONSE = "DELETE_USER_FRIEND_RESPONSE";
export const DELETE_USER_FRIEND_FAIL = "DELETE_FRIEND_FAIL";
export const INVITE_FRIEND_REQUEST = "INVITE_FRIEND_REQUEST";
export const INVITE_FRIEND_RESPONSE = "INVITE_FRIEND_RESPONSE";
export const INVITE_FRIEND_FAIL = "INVITE_FRIEND_FAIL";

// user types
export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_RESPONSE = "GET_USER_PROFILE_RESPONSE";
export const GET_USER_PROFILE_FAIL = "GET_USER_PROFILE_FAIL";
export const EDIT_USER_PROFILE_REQUEST = "EDIT_USER_PROFILE_REQUEST";
export const EDIT_USER_PROFILE_RESPONSE = "EDIT_USER_PROFILE_RESPONSE";
export const EDIT_USER_PROFILE_FAIL = "EDIT_USER_PROFILE_FAIL";
export const CLEAR_TOKEN_REQUEST = "CLEAR_TOKEN_REQUEST";
export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_RESPONSE = "UPLOAD_IMAGE_RESPONSE";
export const UPLOAD_IMAGE_FAIL = "UPLOAD_IMAGE_FAIL";

// group types
export const ADD_GROUP_REQUEST = "ADD_GROUP_REQUEST";
export const ADD_GROUP_RESPONSE = "ADD_GROUP_RESPONSE";
export const ADD_GROUP_FAIL = "ADD_GROUP_FAIL";
export const UPDATE_GROUP_REQUEST = "UPDATE_GROUP_REQUEST";
export const UPDATE_GROUP_RESPONSE = "UPDATE_GROUP_RESPONSE";
export const UPDATE_GROUP_FAIL = "UPDATE_GROUP_FAIL";
export const DELETE_GROUP_REQUEST = "DELETE_GROUP_REQUEST";
export const DELETE_GROUP_RESPONSE = "DELETE_GROUP_RESPONSE";
export const DELETE_GROUP_FAIL = "DELETE_GROUP_FAIL";
export const GET_GROUP_BY_ID_REQUEST = "GET_GROUP_BY_ID_REQUEST";
export const GET_GROUP_BY_ID_RESPONSE = "GET_GROUP_BY_ID_RESPONSE";
export const GET_GROUP_BY_ID_FAIL = "GET_GROUP_BY_ID_FAIL";
export const GET_USER_GROUPS_REQUEST = "GET_USER_GROUPS_REQUEST";
export const GET_USER_GROUPS_RESPONSE = "GET_USER_GROUPS_RESPONSE";
export const GET_USER_GROUPS_FAIL = "GET_USER_GROUPS_FAIL";

// comment types
export const GET_COMMENTS_REQUEST = "GET_COMMENTS_REQUEST";
export const GET_COMMENTS_RESPONSE = "GET_COMMENTS_RESPONSE";
export const GET_COMMENTS_FAIL = "GET_COMMENTS_FAIL";
export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_RESPONSE = "ADD_COMMENT_RESPONSE";
export const ADD_COMMENT_FAIL = "ADD_COMMENT_FAIL";
