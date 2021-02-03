import { Action } from "../../models/actions/action";
import { Token } from "../../models/other/axios/Token";
import {
  GetUserProfileRequest,
  UploadImageRequest,
  EditProfileRequest,
} from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import { UserProfile, UploadImage, EditProfile } from "../../models/responses/axios/user";
import * as types from "./types";

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
