import { Token} from "../../other/axios/Token";
import { Participant } from "../../other/axios/Participant";
import { Response } from "../../responses/axios/response";
import {
  AddFriend,
  GetUserFriends,
  DeleteFriend,
  UserProfileResponse,
  AddExpense
} from "../../responses/axios/user";

export interface userApi {
  getUserProfile(): Promise<Response<UserProfileResponse>>;
  getUserFriends(): Promise<Response<GetUserFriends>>;
  addUserFriendByEmail(email: string): Promise<Response<AddFriend>>;
  addUserFriendByPhone(phone: string): Promise<Response<AddFriend>>;
  deleteFriend(friendId: string): Promise<Response<DeleteFriend>>;
  inviteFriendRequestByEmail(email: string): Promise<Response<null>>;
  inviteFriendRequestByPhone(phone: string): Promise<Response<null>>;

  addExpense(
    token: Token,
    description: string,
    total: number,
    paid_at: number,
    group: string,
    notes: string,
    participants: Array<Participant>
    ): Promise<Response<AddExpense>>;
}
