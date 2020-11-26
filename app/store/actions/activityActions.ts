import * as types from "./types";
import { Action } from "../../models/actions/action";
import { Expense } from "../../models/other/Expense";
import { Debt } from "../../models/other/Debt";
import { AddActivityRequest } from "../../models/requests/addActivityRequest";
import { AddActivityResponse } from "../../models/responses/addActivityResponse";

export function requestAddActivity(
  id: string,
  type: string,
  expense?: Expense,
  debt?: Debt,
): Action<AddActivityRequest> {
  return {
    type: types.ADD_ACTIVITY_REQUEST,
    payload: {
      id,
      type,
      expense,
      debt,
    },
  };
}

export function onAddActivityResponse(
  response: AddActivityResponse,
): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_RESPONSE,
    payload: response,
  };
}

export function onAddActivityFail(): Action<AddActivityResponse> {
  return {
    type: types.ADD_ACTIVITY_FAIL,
    payload: {
      id: "-1",
      success: false,
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