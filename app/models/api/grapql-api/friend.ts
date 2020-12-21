import { InputType } from "../../../utils/inputTypes";
import { AddFriendResponse, DeleteFriendResponse } from "../../responses/friend";
import { GetUserFriendsResponse, UserByFilterResponse } from "../../responses/user";

export interface FriendsApi {
  getUserFriends(userId: string): Promise<GetUserFriendsResponse>;
  getFilteredUser(emailOrPhone: string, inputType: InputType): Promise<UserByFilterResponse>;
  addFriend(friendId: string, friendName: string, userId: string): Promise<AddFriendResponse>;
  deleteFriend(id: string): Promise<DeleteFriendResponse>;
}
