"use strict";
exports.__esModule = true;
exports.onLoadingDisable = exports.onLoadingEnable = exports.onClearTokenRequest = exports.onDeleteParticipantFail = exports.onDeleteParticipantResponse = exports.onDeleteParticipantRequest = exports.onDeleteDebtFail = exports.onDeleteDebtResponse = exports.onDeleteDebtRequest = exports.onDeleteExpenseFail = exports.onDeleteExpenseResponse = exports.onDeleteExpenseRequest = exports.onDeleteActivityFail = exports.onDeleteActivityResponse = exports.onDeleteActivityRequest = exports.onAddParticipantFail = exports.onAddParticipantResponse = exports.onAddParticipantRequest = exports.onAddDebtFail = exports.onAddDebtResponse = exports.onAddDebtRequest = exports.onAddExpenseFail = exports.onAddExpenseResponse = exports.onAddExpenseRequest = exports.onAddActivityFail = exports.onAddActivityResponse = exports.onAddActivityRequest = exports.onInviteFriendFail = exports.onInviteFriendResponse = exports.onInviteFriendRequest = exports.onDeleteFriendFail = exports.onDeleteFriendResponse = exports.onDeleteFriendRequest = exports.onAddFriendFail = exports.onAddFriendResponse = exports.onAddFriendRequest = exports.onGetUserFriendsFail = exports.onGetUserFriendsResponse = exports.onGetUserFriendsRequest = exports.onGetUserGroupsFail = exports.onGetUserGroupsResponse = exports.onGetUserGroupsRequest = exports.onGetGroupByIdFail = exports.onGetGroupByIdResponse = exports.onGetGroupByIdRequest = exports.onDeleteGroupFail = exports.onDeleteGroupResponse = exports.onDeleteGroupRequest = exports.onUpdateGroupFail = exports.onUpdateGroupResponse = exports.onUpdateGroupRequest = exports.onAddGroupFail = exports.onAddGroupResponse = exports.onAddGroupRequest = exports.onUpdateUserFail = exports.onUpdateUserResponse = exports.onUpdateUserRequest = exports.onGetUserActivitiesFail = exports.onGetUserActivitiesResponse = exports.onGetUserActivitiesRequest = exports.onGetUserProfileFail = exports.onGetUserProfileResponse = exports.onGetUserProfileRequest = exports.onUploadImageResponse = exports.onUploadImageRequest = exports.onEditProfileResponse = exports.onEditProfileRequest = void 0;
var types = require("./types");
function onEditProfileRequest(response) {
    return {
        type: types.EDIT_PROFILE_REQUEST,
        payload: {
            picture: response.url,
            newName: response.key
        }
    };
}
exports.onEditProfileRequest = onEditProfileRequest;
function onEditProfileResponse(response) {
    return {
        type: types.EDIT_PROFILE_RESPONSE,
        payload: response
    };
}
exports.onEditProfileResponse = onEditProfileResponse;
function onUploadImageRequest(token) {
    return {
        type: types.UPLOAD_IMAGE_REQUEST,
        payload: {
            token: token
        }
    };
}
exports.onUploadImageRequest = onUploadImageRequest;
function onUploadImageResponse(response) {
    return {
        type: types.UPLOAD_IMAGE_RESPONSE,
        payload: response
    };
}
exports.onUploadImageResponse = onUploadImageResponse;
function onGetUserProfileRequest(token) {
    return {
        type: types.GET_USER_PROFILE_REQUEST,
        payload: {
            token: token
        }
    };
}
exports.onGetUserProfileRequest = onGetUserProfileRequest;
function onGetUserProfileResponse(response) {
    return {
        type: types.GET_USER_PROFILE_RESPONSE,
        payload: response
    };
}
exports.onGetUserProfileResponse = onGetUserProfileResponse;
function onGetUserProfileFail() {
    return {
        type: types.GET_USER_PROFILE_FAIL,
        payload: {
            success: false,
            status: -1
        }
    };
}
exports.onGetUserProfileFail = onGetUserProfileFail;
function onGetUserActivitiesRequest(userId) {
    return {
        type: types.GET_USER_ACTIVITIES_REQUEST,
        payload: {
            userId: userId
        }
    };
}
exports.onGetUserActivitiesRequest = onGetUserActivitiesRequest;
function onGetUserActivitiesResponse(response) {
    return {
        type: types.GET_USER_ACTIVITIES_RESPONSE,
        payload: {
            success: response.success,
            userId: response.userId,
            activities: response.activities
        }
    };
}
exports.onGetUserActivitiesResponse = onGetUserActivitiesResponse;
function onGetUserActivitiesFail() {
    return {
        type: types.GET_USER_ACTIVITIES_RESPONSE,
        payload: {
            success: false,
            userId: "-1",
            activities: []
        }
    };
}
exports.onGetUserActivitiesFail = onGetUserActivitiesFail;
function onUpdateUserRequest(user) {
    return {
        type: types.UPDATE_USER_REQUEST,
        payload: {
            user: user
        }
    };
}
exports.onUpdateUserRequest = onUpdateUserRequest;
function onUpdateUserResponse(response) {
    return {
        type: types.UPDATE_USER_RESPONSE,
        payload: {
            success: response.success,
            user: response.user
        }
    };
}
exports.onUpdateUserResponse = onUpdateUserResponse;
function onUpdateUserFail() {
    return {
        type: types.UPDATE_USER_FAIL,
        payload: {
            success: false,
            user: undefined
        }
    };
}
exports.onUpdateUserFail = onUpdateUserFail;
function onAddGroupRequest(name, creatorId, membersIds) {
    return {
        type: types.ADD_GROUP_REQUEST,
        payload: {
            name: name,
            creator: creatorId,
            members: membersIds
        }
    };
}
exports.onAddGroupRequest = onAddGroupRequest;
function onAddGroupResponse(response) {
    return {
        type: types.ADD_GROUP_RESPONSE,
        payload: {
            success: response.success,
            id: response.id
        }
    };
}
exports.onAddGroupResponse = onAddGroupResponse;
function onAddGroupFail() {
    return {
        type: types.ADD_GROUP_FAIL,
        payload: {
            success: false,
            id: "-1"
        }
    };
}
exports.onAddGroupFail = onAddGroupFail;
function onUpdateGroupRequest(groupId, name, creator, members) {
    return {
        type: types.UPDATE_GROUP_REQUEST,
        payload: {
            groupId: groupId,
            name: name,
            creator: creator,
            members: members
        }
    };
}
exports.onUpdateGroupRequest = onUpdateGroupRequest;
function onUpdateGroupResponse(response) {
    return {
        type: types.UPDATE_GROUP_RESPONSE,
        payload: {
            success: response.success,
            id: response.id
        }
    };
}
exports.onUpdateGroupResponse = onUpdateGroupResponse;
function onUpdateGroupFail() {
    return {
        type: types.UPDATE_GROUP_FAIL,
        payload: {
            success: false,
            id: "-1"
        }
    };
}
exports.onUpdateGroupFail = onUpdateGroupFail;
function onDeleteGroupRequest(groupId) {
    return {
        type: types.DELETE_GROUP_REQUEST,
        payload: {
            groupId: groupId
        }
    };
}
exports.onDeleteGroupRequest = onDeleteGroupRequest;
function onDeleteGroupResponse(response) {
    return {
        type: types.DELETE_GROUP_RESPONSE,
        payload: {
            success: response.success,
            id: response.id
        }
    };
}
exports.onDeleteGroupResponse = onDeleteGroupResponse;
function onDeleteGroupFail() {
    return {
        type: types.DELETE_GROUP_FAIL,
        payload: {
            success: false,
            id: "-1"
        }
    };
}
exports.onDeleteGroupFail = onDeleteGroupFail;
function onGetGroupByIdRequest(groupId) {
    return {
        type: types.GET_GROUP_BY_ID_REQUEST,
        payload: {
            groupId: groupId
        }
    };
}
exports.onGetGroupByIdRequest = onGetGroupByIdRequest;
function onGetGroupByIdResponse(response) {
    return {
        type: types.GET_GROUP_BY_ID_RESPONSE,
        payload: {
            success: response.success,
            id: response.id,
            group: response.group
        }
    };
}
exports.onGetGroupByIdResponse = onGetGroupByIdResponse;
function onGetGroupByIdFail() {
    return {
        type: types.GET_GROUP_BY_ID_FAIL,
        payload: {
            success: false,
            id: "-1",
            group: {
                id: "-1",
                name: "",
                creatorId: "-1",
                membersIds: [],
                activitiesIds: []
            }
        }
    };
}
exports.onGetGroupByIdFail = onGetGroupByIdFail;
function onGetUserGroupsRequest(userId) {
    return {
        type: types.GET_USER_GROUPS_REQUEST,
        payload: {
            userId: userId
        }
    };
}
exports.onGetUserGroupsRequest = onGetUserGroupsRequest;
function onGetUserGroupsResponse(response) {
    return {
        type: types.GET_USER_GROUPS_RESPONSE,
        payload: {
            userId: response.userId,
            success: response.success,
            groups: response.groups
        }
    };
}
exports.onGetUserGroupsResponse = onGetUserGroupsResponse;
function onGetUserGroupsFail() {
    return {
        type: types.GET_USER_GROUPS_FAIL,
        payload: {
            success: false,
            userId: "-1",
            groups: []
        }
    };
}
exports.onGetUserGroupsFail = onGetUserGroupsFail;
function onGetUserFriendsRequest(token) {
    return {
        type: types.GET_USER_FRIENDS_REQUEST,
        payload: {
            token: token
        }
    };
}
exports.onGetUserFriendsRequest = onGetUserFriendsRequest;
function onGetUserFriendsResponse(response) {
    return {
        type: types.GET_USER_FRIENDS_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response
        }
    };
}
exports.onGetUserFriendsResponse = onGetUserFriendsResponse;
function onGetUserFriendsFail() {
    return {
        type: types.GET_USER_FRIENDS_FAIL,
        payload: {
            success: false,
            status: -1
        }
    };
}
exports.onGetUserFriendsFail = onGetUserFriendsFail;
function onAddFriendRequest(token, email, phone, inputType) {
    return {
        type: types.ADD_FRIEND_REQUEST,
        payload: {
            token: token,
            email: email,
            phone: phone,
            inputType: inputType
        }
    };
}
exports.onAddFriendRequest = onAddFriendRequest;
function onAddFriendResponse(response) {
    return {
        type: types.ADD_FRIEND_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response
        }
    };
}
exports.onAddFriendResponse = onAddFriendResponse;
function onAddFriendFail() {
    return {
        type: types.ADD_FRIEND_FAIL,
        payload: {
            success: false,
            status: -1
        }
    };
}
exports.onAddFriendFail = onAddFriendFail;
function onDeleteFriendRequest(token, id) {
    return {
        type: types.DELETE_USER_FRIEND_REQUEST,
        payload: {
            id: id,
            token: token
        }
    };
}
exports.onDeleteFriendRequest = onDeleteFriendRequest;
function onDeleteFriendResponse(response) {
    return {
        type: types.DELETE_USER_FRIEND_RESPONSE,
        payload: {
            success: response.success,
            status: response.status,
            response: response.response
        }
    };
}
exports.onDeleteFriendResponse = onDeleteFriendResponse;
function onDeleteFriendFail() {
    return {
        type: types.DELETE_USER_FRIEND_FAIL,
        payload: {
            success: false,
            status: -1
        }
    };
}
exports.onDeleteFriendFail = onDeleteFriendFail;
function onInviteFriendRequest(token, email, phone, inputType) {
    return {
        type: types.INVITE_FRIEND_REQUEST,
        payload: {
            token: token,
            email: email,
            phone: phone,
            inputType: inputType
        }
    };
}
exports.onInviteFriendRequest = onInviteFriendRequest;
function onInviteFriendResponse(response) {
    return {
        type: types.INVITE_FRIEND_RESPONSE,
        payload: response
    };
}
exports.onInviteFriendResponse = onInviteFriendResponse;
function onInviteFriendFail() {
    return {
        type: types.INVITE_FRIEND_FAIL,
        payload: {
            success: false,
            status: -1
        }
    };
}
exports.onInviteFriendFail = onInviteFriendFail;
function onAddActivityRequest(userId, type, groupId, expenseId, debtId) {
    return {
        type: types.ADD_ACTIVITY_REQUEST,
        payload: {
            userId: userId,
            type: type,
            groupId: groupId,
            expenseId: expenseId,
            debtId: debtId
        }
    };
}
exports.onAddActivityRequest = onAddActivityRequest;
function onAddActivityResponse(response) {
    return {
        type: types.ADD_ACTIVITY_RESPONSE,
        payload: response
    };
}
exports.onAddActivityResponse = onAddActivityResponse;
function onAddActivityFail() {
    return {
        type: types.ADD_ACTIVITY_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onAddActivityFail = onAddActivityFail;
function onAddExpenseRequest(userId, activityName, description, category, totalPrice) {
    return {
        type: types.ADD_EXPENSE_REQUEST,
        payload: {
            userId: userId,
            activityName: activityName,
            description: description,
            category: category,
            totalPrice: totalPrice
        }
    };
}
exports.onAddExpenseRequest = onAddExpenseRequest;
function onAddExpenseResponse(response) {
    return {
        type: types.ADD_EXPENSE_RESPONSE,
        payload: response
    };
}
exports.onAddExpenseResponse = onAddExpenseResponse;
function onAddExpenseFail() {
    return {
        type: types.ADD_EXPENSE_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onAddExpenseFail = onAddExpenseFail;
function onAddDebtRequest(userId, activityName, description, category, debt, creditorId) {
    return {
        type: types.ADD_DEBT_REQUEST,
        payload: {
            userId: userId,
            activityName: activityName,
            description: description,
            category: category,
            debt: debt,
            creditorId: creditorId
        }
    };
}
exports.onAddDebtRequest = onAddDebtRequest;
function onAddDebtResponse(response) {
    return {
        type: types.ADD_DEBT_RESPONSE,
        payload: response
    };
}
exports.onAddDebtResponse = onAddDebtResponse;
function onAddDebtFail() {
    return {
        type: types.ADD_DEBT_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onAddDebtFail = onAddDebtFail;
function onAddParticipantRequest(expenseId, userId, share) {
    return {
        type: types.ADD_PARTICIPANT_REQUEST,
        payload: {
            expenseId: expenseId,
            userId: userId,
            share: share
        }
    };
}
exports.onAddParticipantRequest = onAddParticipantRequest;
function onAddParticipantResponse(response) {
    return {
        type: types.ADD_PARTICIPANT_RESPONSE,
        payload: response
    };
}
exports.onAddParticipantResponse = onAddParticipantResponse;
function onAddParticipantFail() {
    return {
        type: types.ADD_PARTICIPANT_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onAddParticipantFail = onAddParticipantFail;
function onDeleteActivityRequest(id) {
    return {
        type: types.DELETE_ACTIVITY_REQUEST,
        payload: {
            id: id
        }
    };
}
exports.onDeleteActivityRequest = onDeleteActivityRequest;
function onDeleteActivityResponse(response) {
    return {
        type: types.DELETE_ACTIVITY_RESPONSE,
        payload: {
            id: response.id,
            success: response.success
        }
    };
}
exports.onDeleteActivityResponse = onDeleteActivityResponse;
function onDeleteActivityFail() {
    return {
        type: types.DELETE_ACTIVITY_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onDeleteActivityFail = onDeleteActivityFail;
function onDeleteExpenseRequest(id) {
    return {
        type: types.DELETE_EXPENSE_REQUEST,
        payload: {
            id: id
        }
    };
}
exports.onDeleteExpenseRequest = onDeleteExpenseRequest;
function onDeleteExpenseResponse(response) {
    return {
        type: types.DELETE_EXPENSE_RESPONSE,
        payload: {
            id: response.id,
            success: response.success
        }
    };
}
exports.onDeleteExpenseResponse = onDeleteExpenseResponse;
function onDeleteExpenseFail() {
    return {
        type: types.DELETE_EXPENSE_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onDeleteExpenseFail = onDeleteExpenseFail;
function onDeleteDebtRequest(id) {
    return {
        type: types.DELETE_DEBT_REQUEST,
        payload: {
            id: id
        }
    };
}
exports.onDeleteDebtRequest = onDeleteDebtRequest;
function onDeleteDebtResponse(response) {
    return {
        type: types.DELETE_DEBT_RESPONSE,
        payload: {
            id: response.id,
            success: response.success
        }
    };
}
exports.onDeleteDebtResponse = onDeleteDebtResponse;
function onDeleteDebtFail() {
    return {
        type: types.DELETE_DEBT_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onDeleteDebtFail = onDeleteDebtFail;
function onDeleteParticipantRequest(id) {
    return {
        type: types.DELETE_PARTICIPANT_REQUEST,
        payload: {
            id: id
        }
    };
}
exports.onDeleteParticipantRequest = onDeleteParticipantRequest;
function onDeleteParticipantResponse(response) {
    return {
        type: types.DELETE_PARTICIPANT_RESPONSE,
        payload: {
            id: response.id,
            success: response.success
        }
    };
}
exports.onDeleteParticipantResponse = onDeleteParticipantResponse;
function onDeleteParticipantFail() {
    return {
        type: types.DELETE_PARTICIPANT_FAIL,
        payload: {
            id: "-1",
            success: false
        }
    };
}
exports.onDeleteParticipantFail = onDeleteParticipantFail;
function onClearTokenRequest() {
    return {
        type: types.CLEAR_TOKEN_REQUEST,
        payload: {}
    };
}
exports.onClearTokenRequest = onClearTokenRequest;
function onLoadingEnable() {
    return {
        type: types.LOADING_ENABLED,
        payload: {}
    };
}
exports.onLoadingEnable = onLoadingEnable;
function onLoadingDisable() {
    return {
        type: types.LOADING_DISABLED,
        payload: {}
    };
}
exports.onLoadingDisable = onLoadingDisable;
