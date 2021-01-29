import { Token } from "../../other/axios/Token";

export interface GetUserGroupsRequest {
  token: Token;
}

export interface CreateGroupRequest {
  token: Token;
  name: string;
  picture: string;
}

export interface GetGroupInfoRequest {
  token: Token;
  id: string;
}

export interface DeleteGroupRequest {
  token: Token;
  id: string;
}

export interface AddFriendToGroupRequest {
  token: Token;
  id: string;
  members: Array<string>;
}

export interface EditGroupRequest {
  token: Token;
  id: string;
  name: string;
  picture: string;
}

export interface LeaveGroupRequest {
  token: Token;
  id: string;
}

export interface RemoveMemberRequest {
  token: Token;
  memberId: string;
}

export interface GetGroupBalances {
  token: Token;
}
