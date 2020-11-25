import { InputType } from "../../utils/inputTypes";
import { FriendsResponse } from "../responses/getFriends";
import { UserByFilterResponse } from "../responses/userByFilter";

export interface FriendsApi {
  getUserFriends(userId: string): Promise<FriendsResponse>;
  getFilteredUser(
    emailOrPhone: string,
    inputType: InputType
  ): Promise<UserByFilterResponse>;
}
