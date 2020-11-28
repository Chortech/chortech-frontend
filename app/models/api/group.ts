import {
  AddGroupResponse,
  UpdateGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
} from "../responses/group";

export interface GroupApi {
  addGroup(
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<AddGroupResponse>;
  updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<UpdateGroupResponse>;
  deleteGroup(groupId: string): Promise<DeleteGroupResponse>;
  getGroupById(groupId: string): Promise<GetGroupByIdResponse>;
  getUserGroups(userId: string): Promise<GetUserGroupsResponse>;
}
