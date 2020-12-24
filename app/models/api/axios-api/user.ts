import { Token } from "../../other/axios/Token";
import { Response } from "../../responses/axios/response";
import { AddFriend, GetUserFriends, UserProfileResponse } from "../../responses/axios/user";

export interface userApi {
  getUserProfile(): Promise<Response<UserProfileResponse>>;
  getUserFriends(): Promise<Response<GetUserFriends>>;
  addUserFriendByEmail(email: string): Promise<Response<AddFriend>>;
  addUserFriendByPhone(phone: string): Promise<Response<AddFriend>>;
}
