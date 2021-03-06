import { Action } from "../../models/actions/action";
import { Activity } from "../../models/other/axios/Activity";
import { Token } from "../../models/other/axios/Token";
import { GetUserActivitiesRequest } from "../../models/requests/axios/user";
import { Response } from "../../models/responses/axios/response";
import * as types from "./types";

export function onGetUserActivitiesRequest(token: Token): Action<GetUserActivitiesRequest> {
  return {
    type: types.GET_USER_ACTIVITIES_REQUEST,
    payload: {
      token: token,
    },
  };
}

export function onGetUserActivitiesResponse(
  response: Response<Activity[]>
): Action<Response<Activity[]>> {
  return {
    type: types.GET_USER_ACTIVITIES_RESPONSE,
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
