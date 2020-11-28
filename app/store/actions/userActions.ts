import { Action } from "../../models/actions/action";
import { User } from "../../models/other/User";
import {
  GetUserActivitiesRequest,
  GetUserRequest,
  UpdateUserRequest,
} from "../../models/requests/user";
import {
  GetUserActivitiesResponse,
  GetUserResponse,
  UpdateUserResponse,
} from "../../models/responses/user";
import * as types from "./types";

export function onGetUserRequest(id: string): Action<GetUserRequest> {
  return {
    type: types.GET_USER_REQUEST,
    payload: {
      id: id,
    },
  };
}

export function onGetUserResponse(
  response: GetUserResponse
): Action<GetUserResponse> {
  return {
    type: types.GET_USER_RESPONSE,
    payload: {
      success: response.success,
      user: response.user,
    },
  };
}

export function onGetUserFail(): Action<GetUserResponse> {
  return {
    type: types.GET_USER_FAIL,
    payload: {
      success: false,
      user: undefined,
    },
  };
}

export function onGetUserActivitiesRequest(
  userId: string
): Action<GetUserActivitiesRequest> {
  return {
    type: types.GET_USER_ACTIVITIES_REQUEST,
    payload: {
      userId: userId,
    },
  };
}

export function onGetUserActivitiesResponse(
  response: GetUserActivitiesResponse
): Action<GetUserActivitiesResponse> {
  return {
    type: types.GET_USER_ACTIVITIES_RESPONSE,
    payload: {
      success: response.success,
      userId: response.userId,
      activities: response.activities,
    },
  };
}

export function onGetUserActivitiesFail(): Action<GetUserActivitiesResponse> {
  return {
    type: types.GET_USER_ACTIVITIES_RESPONSE,
    payload: {
      success: false,
      userId: "-1",
      activities: [],
    },
  };
}

export function onUpdateUserRequest(user: User): Action<UpdateUserRequest> {
  return {
    type: types.UPDATE_USER_REQUEST,
    payload: {
      user: user,
    },
  };
}

export function onUpdateUserResponse(
  response: UpdateUserResponse
): Action<UpdateUserResponse> {
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
