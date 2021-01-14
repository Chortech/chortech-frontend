import { Group } from "../../other/axios/Group";

export interface GetUserGroupsResponse{
    groups: Array<Group>;
}

export interface GetGroupResponse{
    group: Group;
}

export interface DeleteGroupResponse{
    message: string;
}

export interface AddFriendToGroupResponse{
    group: Group;
}

export interface EditGroupResponse{
    group: Group;
}

export interface LeaveGroupResponse{
    message: string;
}

export interface RemoveMemberResponse{
    group: Group;
}