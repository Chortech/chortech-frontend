export interface AddGroupRequest {
  name: string;
  creator: number;
  members: Array<number>;
}

export interface UpdateGroupRequest {
  groupId: number;
  name: string;
  creator: number;
  members: Array<number>;
}

export interface DeleteGroupRequest {
  groupId: number;
}
