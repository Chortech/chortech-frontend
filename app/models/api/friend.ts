import { InputType } from "../../utils/inputTypes";
import { AddFriendResponse } from "../responses/addFriend";
import { FriendsResponse } from "../responses/getFriends";
import { UserByFilterResponse } from "../responses/userByFilter";

export interface FriendsApi {
  getUserFriends(userId: string): Promise<FriendsResponse>;
  getFilteredUser(
    emailOrPhone: string,
    inputType: InputType
  ): Promise<UserByFilterResponse>;
  addFriend(
    friendId: string,
    friendName: string,
    userId: string
  ): Promise<AddFriendResponse>;
}
