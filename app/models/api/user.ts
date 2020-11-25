import { User } from "../other/User";
import { FetchUserResponse } from "../responses/getUser";
import { UpdateUserResponse } from "../responses/updateUser";

export interface UserApi {
  getUser(id: string): Promise<FetchUserResponse>;
  updateUser(user: User): Promise<UpdateUserResponse>;
}
