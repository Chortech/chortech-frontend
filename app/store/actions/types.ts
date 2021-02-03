// login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_RESPONSE = "LOGIN_RESPONSE";
export const LOG_OUT = "LOG_OUT";

// sign up
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_RESPONSE = "SIGNUP_RESPONSE";

// code verification
export const GENERATE_CODE_REQUEST = "GENERATE_CODE_REQUEST";
export const GENERATE_CODE_RESPONSE = "GENERATE_CODE_RESPONSE";
export const VERIFY_CODE_REQUEST = "VERIFY_CODE_REQUEST";
export const VERIFY_CODE_RESPONSE = "VERIFY_CODE_RESPONSE";
export const CANCEL_CODE_REQUEST = "CANCEL_CODE_REQUEST";
export const CANCEL_CODE_RESPONSE = "CANCEL_CODE_RESPONSE";

// reset password
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_RESPONSE = "RESET_PASSWORD_RESPONSE";

// change password
export const CHANGE_PASSWORD_REQUEST = "CHANGE_PASSWORD_REQUEST";
export const CHANGE_PASSWORD_RESPONSE = "CHANGE_PASSWORD_RESPONSE";

// change email or phone
export const CHANGE_EMAIL_OR_PHONE_REQUEST = "CHANGE_EMAIL_OR_PHONE_REQUEST";
export const CHANGE_EMAIL_OR_PHONE_RESPONSE = "CHANGE_EMAIL_OR_PHONE_RESPONSE";

// loading types
export const LOADING_ENABLED = "LOADING_ENABLED";
export const LOADING_DISABLED = "LOADING_DISABLED";

// activity types
export const GET_USER_ACTIVITIES_REQUEST = "GET_USER_ACTIVITIES_REQUEST";
export const GET_USER_ACTIVITIES_RESPONSE = "GET_USER_ACTIVITIES_RESPONSE";
export const GET_USER_ACTIVITY_REQUEST = "GET_USER_ACTIVITY_REQUEST";
export const GET_USER_ACTIVITY_RESPONSE = "GET_USER_ACTIVITY_RESPONSE";
export const ADD_ACTIVITY_REQUEST = "ADD_ACTIVITY_REQUEST";
export const ADD_ACTIVITY_RESPONSE = "ADD_ACTIVITY_RESPONSE";
export const DELETE_ACTIVITY_REQUEST = "DELETE_ACTIVITY_REQUEST";
export const DELETE_ACTIVITY_RESPONSE = "DELETE_ACTIVITY_RESPONSE";
export const EDIT_ACTIVITY_REQUEST = "EDIT_ACTIVITY_REQUEST";
export const EDIT_ACTIVITY_RESPONSE = "EDIT_ACTIVITY_RESPONSE";

// expense types
export const ADD_EXPENSE_REQUEST = "ADD_EXPENSE_REQUEST";
export const ADD_EXPENSE_RESPONSE = "ADD_EXPENSE_RESPONSE";
export const EDIT_EXPENSE_REQUEST = "EDIT_EXPENSE_REQUEST";
export const EDIT_EXPENSE_RESPONSE = "EDIT_EXPENSE_RESPONSE";
export const DELETE_EXPENSE_REQUEST = "DELETE_EXPENSE_REQUEST";
export const DELETE_EXPENSE_RESPONSE = "DELETE_EXPENSE_RESPONSE";
export const GET_USER_EXPENSE_REQUEST = "GET_USER_EXPENSE_REQUEST";
export const GET_USER_EXPENSE_RESPONSE = "GET_USER_EXPENSE_RESPONSE";
export const GET_USER_EXPENSES_REQUEST = "GET_USER_EXPENSES_REQUEST";
export const GET_USER_EXPENSES_RESPONSE = "GET_USER_EXPENSES_RESPONSE";
export const GET_GROUP_EXPENSES_REQUEST = "GET_GROUP_EXPENSES_REQUEST";
export const GET_GROUP_EXPENSES_RESPONSE = "GET_GROUP_EXPENSES_RESPONSE";

// balance types
export const GET_FRIENDS_BALANCE_REQUEST = "GET_FRIENDS_BALANCE_REQUEST";
export const GET_FRIENDS_BALANCE_RESPONSE = "GET_FRIENDS_BALANCE_RESPONSE";
export const GET_FRIEND_BALANCE_REQUEST = "GET_FRIEND_BALANCE_REQUEST";
export const GET_FRIEND_BALANCE_RESPONSE = "GET_FRIEND_BALANCE_RESPONSE";
export const GET_GROUPS_BALANCES_REQUEST = "GET_GROUPS_BALANCES_REQUEST";
export const GET_GROUPS_BALANCES_RESPONSE = "GET_GROUPS_BALANCES_RESPONSE";
export const GET_GROUP_MEMBERS_BALANCES_REQUEST = "GET_GROUP_MEMBERS_BALANCES_REQUEST";
export const GET_GROUP_MEMBERS_BALANCES_RESPONSE = "GET_GROUP_MEMBERS_BALANCES_RESPONSE";

// friend types
export const GET_USER_FRIENDS_REQUEST = "USER_FRIENDS_REQUEST";
export const GET_USER_FRIENDS_RESPONSE = "USER_FRIENDS_RESPONSE";
export const ADD_FRIEND_REQUEST = "ADD_FRIEND_REQUEST";
export const ADD_FRIEND_RESPONSE = "ADD_FRIEND_RESPONSE";
export const DELETE_USER_FRIEND_REQUEST = "DELETE_USER_FRIEND_REQUEST";
export const DELETE_USER_FRIEND_RESPONSE = "DELETE_USER_FRIEND_RESPONSE";
export const INVITE_FRIEND_REQUEST = "INVITE_FRIEND_REQUEST";
export const INVITE_FRIEND_RESPONSE = "INVITE_FRIEND_RESPONSE";

// user types
export const GET_USER_PROFILE_REQUEST = "GET_USER_PROFILE_REQUEST";
export const GET_USER_PROFILE_RESPONSE = "GET_USER_PROFILE_RESPONSE";
export const EDIT_USER_PROFILE_REQUEST = "EDIT_USER_PROFILE_REQUEST";
export const EDIT_USER_PROFILE_RESPONSE = "EDIT_USER_PROFILE_RESPONSE";
export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_RESPONSE = "UPLOAD_IMAGE_RESPONSE";

// group types
export const ADD_GROUP_REQUEST = "ADD_GROUP_REQUEST";
export const ADD_GROUP_RESPONSE = "ADD_GROUP_RESPONSE";
export const UPDATE_GROUP_REQUEST = "UPDATE_GROUP_REQUEST";
export const UPDATE_GROUP_RESPONSE = "UPDATE_GROUP_RESPONSE";
export const DELETE_GROUP_REQUEST = "DELETE_GROUP_REQUEST";
export const DELETE_GROUP_RESPONSE = "DELETE_GROUP_RESPONSE";
export const GET_GROUP_INFO_REQUEST = "GET_GROUP_INFO_REQUEST";
export const GET_GROUP_INFO_RESPONSE = "GET_GROUP_INFO_RESPONSE";
export const GET_USER_GROUPS_REQUEST = "GET_USER_GROUPS_REQUEST";
export const GET_USER_GROUPS_RESPONSE = "GET_USER_GROUPS_RESPONSE";
export const ADD_FRIEND_TO_GROUP_REQUEST = "ADD_FRIEND_TO_GROUP_REQUEST";
export const ADD_FRIEND_TO_GROUP_RESPONSE = "ADD_FRIEND_TO_GROUP_RESPONSE";
export const LEAVE_GROUP_REQUEST = "LEAVE_GROUP_REQUEST";
export const LEAVE_GROUP_RESPONSE = "LEAVE_GROUP_RESPONSE";
export const REMOVE_MEMBER_REQUEST = "REMOVE_MEMBER_REQUEST";
export const REMOVE_MEMBER_RESPONSE = "REMOVE_MEMBER_RESPONSE";
export const EDIT_GROUP_REQUEST = "EDIT_GROUP_REQUEST";
export const EDIT_GROUP_RESPONSE = "EDIT_GROUP_RESPONSE";

// comment types
export const GET_EXPENSE_COMMENTS_REQUEST = "GET_EXPENSE_COMMENTS_REQUEST";
export const GET_EXPENSE_COMMENTS_RESPONSE = "GET_EXPENSE_COMMENTS_RESPONSE";
export const ADD_EXPENSE_COMMENT_REQUEST = "ADD_EXPENSE_COMMENT_REQUEST";
export const ADD_EXPENSE_COMMENT_RESPONSE = "ADD_EXPENSE_COMMENT_RESPONSE";

// payment types
export const ADD_PAYMENT_REQUEST = "ADD_PAYMENT_REQUEST";
export const ADD_PAYMENT_RESPONSE = "ADD_PAYMENT_RESPONSE";
export const EDIT_PAYMENT_REQUEST = "EDIT_PAYMENT_REQUEST";
export const EDIT_PAYMENT_RESPONSE = "EDIT_PAYMENT_RESPONSE";
export const DELETE_PAYMENT_REQUEST = "DELETE_PAYMENT_REQUEST";
export const DELETE_PAYMENT_RESPONSE = "DELETE_PAYMENT_RESPONSE";
export const GET_USER_PAYMENT_REQUEST = "GET_USER_PAYMENT_REQUEST";
export const GET_USER_PAYMENT_RESPONSE = "GET_USER_PAYMENT_RESPONSE";
export const ADD_PAYMENT_COMMENT_REQUEST = "ADD_PAYMENT_COMMENT_REQUEST";
export const ADD_PAYMENT_COMMENT_RESPONSE = "ADD_PAYMENT_COMMENT_RESPONSE";
