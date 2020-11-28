import { Group } from "../other/Group";

export interface AddGroupResponse {
  id: string;
  success: boolean;
}

export interface UpdateGroupResponse {
  id: string;
  success: boolean;
}

export interface DeleteGroupResponse {
  id: string;
  success: boolean;
}

export interface GetGroupByIdResponse {
  id: string;
  success: boolean;
  group: Group;
}

export interface GetUserGroupsResponse {
  userId: string;
  success: boolean;
  groups: Array<Group>;
}
