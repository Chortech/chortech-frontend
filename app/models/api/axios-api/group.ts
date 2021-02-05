import { Response } from "../../responses/axios/response";
import { Group } from "../../other/axios/Group";
import {UploadImage} from "../../../models/responses/axios/user";
import { RemoveGroupMember } from "../../responses/axios/user";

export interface groupApi {
  getUserGroups(): Promise<Response<Group[]>>;
  getGroupInfo(groupId: string): Promise<Response<Group>>;
  addGroup(name: string, picture?: string): Promise<Response<Group>>;
  editGroup(groupId: string, name: string, picture?: string): Promise<Response<Group>>;
  deleteGroup(groupId: string): Promise<Response<null>>;
  addFriendToGroup(groupId: string, members: string[]): Promise<Response<Group>>;
  leaveGroup(groupId: string): Promise<Response<any>>;
  removeMember(groupId: string, memberId: string): Promise<Response<RemoveGroupMember>>;
  uploadImageRequest(image: string, data: any): Promise<Response<UploadImage>>;
}
