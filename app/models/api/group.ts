import { DefaultResponse } from "../responses/default";

export interface GroupApi {
  addGroup(
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<DefaultResponse>;
  updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<DefaultResponse>;
  deleteGroup(groupId: string): Promise<DefaultResponse>;
  getGroupById(groupId: string): Promise<DefaultResponse>;
  getUserGroups(userId: string): Promise<DefaultResponse>;
}
