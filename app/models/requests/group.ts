export interface AddGroupRequest {
  name: string;
  creator: string;
  members: Array<string>;
}

export interface UpdateGroupRequest {
  groupId: string;
  name: string;
  creator: string;
  members: Array<string>;
}

export interface DeleteGroupRequest {
  groupId: string;
}

export interface GetGroupByIdRequest {
  groupId: string;
}

export interface GetUserGroupsRequest {
  userId: string;
}