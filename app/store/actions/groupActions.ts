import * as types from "./types";
import { Action } from "../../models/actions/action";

import { AddGroupRequest } from "../../models/requests/group";

export function addGroup(
    name: string,
    creator: number,
    members: Array<number>,
): Action<AddGroupRequest> {
  return {
    type: types.ADD_GROUP_REQUEST,
    payload: {
        name,
        creator,
        members,
    },
  };
}