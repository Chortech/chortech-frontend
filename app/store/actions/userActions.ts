import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import { User } from "../../models/other/graphql/User";
import {
  AddFriendRequest,
  GetUserFriendsRequest,
  GetUserProfileRequest,
  DeleteFriendRequest,
  InviteFriendsRequest,
  AddExpenseRequest,
  GetExpensesRequest,
  AddCommentRequest,
  GetExpenseRequest,
  GetCommentRequest,
  UploadImageRequest,
  EditProfileRequest,
} from "../../models/requests/axios/user";
import {
  DeleteActivityRequest,
  DeleteExpenseRequest,
} from "../../models/requests/graphql/activity";
import { UpdateUserRequest } from "../../models/requests/graphql/user";
import { Response } from "../../models/responses/axios/response";
import {
  AddFriend,
  DeleteFriend,
  GetUserFriends,
  UserProfileResponse,
  AddExpense,
  AddComment,
  GetExpenses,
  GetExpense,
  GetComment,
  UploadImageResponse,
  EditProfileResponse,
} from "../../models/responses/axios/user";
import {
  DeleteActivityResponse,
  DeleteExpenseResponse,
} from "../../models/responses/graphql/activity";
import { GetUserActivitiesResponse, UpdateUserResponse } from "../../models/responses/graphql/user";
import { InputType } from "../../utils/inputTypes";
import { log } from "../../utils/logger";
import * as types from "./types";

export function onEditProfileRequest(response): Action<EditProfileRequest>{
  return{
    type: types.EDIT_PROFILE_REQUEST,
    payload:{
      picture: response.url,
      newName: response.key,
    },
  };
}

export function onEditProfileResponse(
  response: Response<EditProfileResponse>
): Action<Response<EditProfileResponse>> {
  return {
    type: types.EDIT_PROFILE_RESPONSE,
    payload: response,
  };
}

export function onUploadImageRequest(token: Token, response): Action<UploadImageRequest>{
  return{
    type: types.UPLOAD_IMAGE_REQUEST,
    payload:{
      token: token,
      data: response,
    },
  };
}

export function onUploadImageResponse(
  response: Response<UploadImageResponse>
): Action<Response<UploadImageResponse>> {
  return {
    type: types.UPLOAD_IMAGE_RESPONSE,
    payload: response,
  };
}

export function onGetUserProfileRequest(token: Token): Action<GetUserProfileRequest> {
  return {
    type: types.GET_USER_PROFILE_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserProfileResponse(
  response: Response<UserProfileResponse>
): Action<Response<UserProfileResponse>> {
  return {
    type: types.GET_USER_PROFILE_RESPONSE,
    payload: response,
  };
}

export function onGetUserProfileFail(): Action<Response<UserProfileResponse>> {
  return {
    type: types.GET_USER_PROFILE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

// export function onGetUserActivitiesRequest(token: Token): Action<GetUserExpensesRequest> {
//   return {
//     type: types.GET_USER_ACTIVITIES_REQUEST,
//     payload: {
//       token: token,
//     },
//   };
// }

// export function onGetUserActivitiesResponse(
//   response: Response<UserExpenses>
// ): Action<Response<UserExpenses>> {
//   return {
//     type: types.GET_USER_ACTIVITIES_RESPONSE,
//     payload: {
//       success: response.success,
//       status: response.status,
//       response: response.response,
//     },
//   };
// }

// export function onGetUserActivitiesFail(): Action<Response<UserExpenses>> {
//   return {
//     type: types.GET_USER_ACTIVITIES_FAIL,
//     payload: {
//       success: false,
//       status: -1,
//     },
//   };
// }

export function onUpdateUserRequest(user: User): Action<UpdateUserRequest> {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload: {
      user: user,
    },
  };
}

export function onUpdateUserResponse(response: UpdateUserResponse): Action<UpdateUserResponse> {
  return {
    type: types.UPDATE_USER_RESPONSE,
    payload: {
      success: response.success,
      user: response.user,
    },
  };
}

export function onUpdateUserFail(): Action<UpdateUserResponse> {
  return {
    type: types.UPDATE_USER_FAIL,
    payload: {
      success: false,
      user: undefined,
    },
  };
}

// export function onAddActivityRequest(
//   userId: string,
//   type: string,
//   groupId?: string,
//   expenseId?: string,
//   debtId?: string
// ): Action<AddActivityRequest> {
//   return {
//     type: types.ADD_ACTIVITY_REQUEST,
//     payload: {
//       userId,
//       type,
//       groupId,
//       expenseId,
//       debtId,
//     },
//   };
// }

// export function onAddActivityResponse(response: AddActivityResponse): Action<AddActivityResponse> {
//   return {
//     type: types.ADD_ACTIVITY_RESPONSE,
//     payload: response,
//   };
// }

// export function onAddActivityFail(): Action<AddActivityResponse> {
//   return {
//     type: types.ADD_ACTIVITY_FAIL,
//     payload: {
//       id: "-1",
//       success: false,
//     },
//   };
// }

// export function onDeleteActivityRequest(id: string): Action<DeleteActivityRequest> {
//   return {
//     type: types.DELETE_ACTIVITY_REQUEST,
//     payload: {
//       id: id,
//     },
//   };
// }

// export function onDeleteActivityResponse(
//   response: DeleteActivityResponse
// ): Action<DeleteActivityResponse> {
//   return {
//     type: types.DELETE_ACTIVITY_RESPONSE,
//     payload: {
//       id: response.id,
//       success: response.success,
//     },
//   };
// }

// export function onDeleteActivityFail(): Action<DeleteActivityResponse> {
//   return {
//     type: types.DELETE_ACTIVITY_FAIL,
//     payload: {
//       id: "-1",
//       success: false,
//     },
//   };
// }

export function onClearTokenRequest(): Action<any> {
  return {
    type: types.CLEAR_TOKEN_REQUEST,
    payload: {},
  };
}

export function onLoadingEnable(): Action<any> {
  return {
    type: types.LOADING_ENABLED,
    payload: {},
  };
}

export function onLoadingDisable(): Action<any> {
  return {
    type: types.LOADING_DISABLED,
    payload: {},
  };
}
