import { Action } from "../../models/actions/action";
import { FetchUserRequest } from "../../models/requests/getUser";
import * as types from "./types";

export function fetchUserRequest(id: string): Action<FetchUserRequest> {
  return {
    type: types.FETCH_USER_REQUEST,
    payload: {
      id: id,
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
