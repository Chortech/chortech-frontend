import { SignUpResponse } from "../responses/signUp";

export interface GroupApi {
  addGroup(
    name: string,
    creator: string,
    members: Array<string>,
  ): Promise<SignUpResponse>;
  updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>,
  ): Promise<SignUpResponse>;
  deleteGroup(
    groupId: string,
  ): Promise<SignUpResponse>;
}
