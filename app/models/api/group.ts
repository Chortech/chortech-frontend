import {addGroupResponse, updateGroupResponse, deleteGroupResponse, 
        getGroupByIdResponse, getUserGroupsResponse} from "../responses/group";

export interface GroupApi {
  addGroup(
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<addGroupResponse>;
  updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<updateGroupResponse>;
  deleteGroup(groupId: string): Promise<deleteGroupResponse>;
  getGroupById(groupId: string): Promise<getGroupByIdResponse>;
  getUserGroups(userId: string): Promise<getUserGroupsResponse>;
}
