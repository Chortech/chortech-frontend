import { SignUpResponse } from "../responses/signUp";

export interface GroupApi {
  addGroup(
    name: string,
    creator: number,
    members: Array<number>,
  ): Promise<SignUpResponse>;
}
