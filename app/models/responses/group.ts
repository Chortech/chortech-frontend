export interface addGroupResponse {
  id: string;
  success: boolean;
  }

export interface updateGroupResponse {
  id: string;
  success: boolean;
  }

export interface deleteGroupResponse {
  id: string;
  success: boolean;
  }

export interface getGroupByIdResponse {
  id: string;
  success: boolean;
  group: any;
}

export interface GetUserGroupsResponse {
  userId: string;
  success: boolean;
  groups: any;
}