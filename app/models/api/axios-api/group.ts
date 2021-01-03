import { Response } from "../../responses/axios/response";
import {
    AddFriendToGroupResponse,
    DeleteGroupResponse,
    EditGroupResponse,
    GetGroupResponse,
    GetUserGroupsResponse,
    LeaveGroupResponse,
    RemoveMemberResponse,
  } from "../../responses/axios/group";

export interface groupApi {
    getUserGroups(): Promise<Response<GetUserGroupsResponse>>;
    createGroup(): Promise<Response<null>>;
    getGroupInfo(groupId: string): Promise<Response<GetGroupResponse>>;
    deleteGroup(groupId: string): Promise<Response<DeleteGroupResponse>;
    addFriendToGroup(groupId: string): Promise<Response<AddFriendToGroupResponse>>;
    editGroup(groupId: string): Promise<Response<EditGroupResponse>>;
    leaveGroup(groupId: string): Promise<Response<LeaveGroupResponse>>;
    removeMember(groupId: string): Promise<Response<RemoveMemberResponse>>;
}
