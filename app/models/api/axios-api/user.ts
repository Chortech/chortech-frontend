import { Response } from "../../responses/axios/response";
import {
  AddFriend,
  GetUserFriends,
  DeleteFriend,
  UserProfile,
  UploadImage,
  EditProfile,
} from "../../responses/axios/user";

export interface userApi {
  getUserProfile(): Promise<Response<UserProfile>>;
  getUserFriends(): Promise<Response<GetUserFriends>>;
  editUserProfile(newName: string, picture: string): Promise<Response<EditProfile>>;
  uploadImageRequest(image: string, data: any): Promise<Response<UploadImage>>;
  addUserFriendByEmail(email: string): Promise<Response<AddFriend>>;
  addUserFriendByPhone(phone: string): Promise<Response<AddFriend>>;
  deleteFriend(friendId: string): Promise<Response<DeleteFriend>>;
  inviteFriendRequestByEmail(email: string): Promise<Response<null>>;
  inviteFriendRequestByPhone(phone: string): Promise<Response<null>>;
}
