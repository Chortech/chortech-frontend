import { User } from "../../other/User";
import { GetUserResponse, UpdateUserResponse } from "../../responses/graphql/user";

export interface UserApi {
  getUser(id: string): Promise<GetUserResponse>;
  updateUser(user: User): Promise<UpdateUserResponse>;
}
