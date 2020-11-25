import { FetchUserResponse } from "../responses/getUser";

export interface UserApi {
  getUser(id: string): Promise<FetchUserResponse>;
}
