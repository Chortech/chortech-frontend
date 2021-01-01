import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import { User } from "../../models/other/graphql/User";
import {
  GetUserProfileRequest,
  UploadImageRequest,
  EditProfileRequest,
} from "../../models/requests/axios/user";
import { UpdateUserRequest } from "../../models/requests/graphql/user";
import { Response } from "../../models/responses/axios/response";
import { UserProfile, UploadImage, EditProfile } from "../../models/responses/axios/user";
import { UpdateUserResponse } from "../../models/responses/graphql/user";
import * as types from "./types";

// export function onEditProfileRequest(response): Action<EditProfileRequest> {
//   return {
//     type: types.EDIT_PROFILE_REQUEST,
//     payload: {
//       picture: response.url,
//       newName: response.key,
//     },
//   };
// }

// export function onEditProfileResponse(
//   response: Response<EditProfile>
// ): Action<Response<EditProfile>> {
//   return {
//     type: types.EDIT_PROFILE_RESPONSE,
//     payload: response,
//   };
// }

export function onGetUserProfileRequest(token: Token): Action<GetUserProfileRequest> {
  return {
    type: types.GET_USER_PROFILE_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserProfileResponse(
  response: Response<UserProfile>
): Action<Response<UserProfile>> {
  return {
    type: types.GET_USER_PROFILE_RESPONSE,
    payload: response,
  };
}

export function onGetUserProfileFail(): Action<Response<UserProfile>> {
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

export function onEditUserProfileRequest(
  token: Token,
  newName: string,
  picture: string
): Action<EditProfileRequest> {
  return {
    type: types.EDIT_USER_PROFILE_REQUEST,
    payload: {
      token: token,
      newName: newName,
      picture: picture,
    },
  };
}

export function onEditUserProfileResponse(
  response: Response<EditProfile>
): Action<Response<EditProfile>> {
  return {
    type: types.EDIT_USER_PROFILE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onEditUserProfileFail(): Action<Response<EditProfile>> {
  return {
    type: types.EDIT_USER_PROFILE_FAIL,
    payload: {
      success: false,
      status: -1,
    },
  };
}

export function onUploadImageRequest(token: Token, response): Action<UploadImageRequest> {
  return {
    type: types.UPLOAD_IMAGE_REQUEST,
    payload: {
      token: token,
      data: response,
    },
  };
}

export function onUploadImageResponse(
  response: Response<UploadImage>
): Action<Response<UploadImage>> {
  return {
    type: types.UPLOAD_IMAGE_RESPONSE,
    payload: {
      success: response.success,
      status: response.status,
      response: response.response,
    },
  };
}

export function onUploadImageFail(): Action<Response<UploadImage>> {
  return {
    type: types.UPLOAD_IMAGE_RESPONSE,
    payload: {
      success: false,
      status: -1,
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
