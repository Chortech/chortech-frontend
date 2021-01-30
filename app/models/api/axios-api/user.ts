import { Friend } from "../../other/axios/Friend";
import { Response } from "../../responses/axios/response";
import { AddFriend, UserProfile, UploadImage, EditProfile } from "../../responses/axios/user";

export interface userApi {
  getUserProfile(): Promise<Response<UserProfile>>;
  getUserFriends(): Promise<Response<Friend[]>>;
  editUserProfile(newName: string, picture: string): Promise<Response<EditProfile>>;
  uploadImageRequest(image: string, data: any): Promise<Response<UploadImage>>;
  addUserFriendByEmail(email: string): Promise<Response<AddFriend>>;
  addUserFriendByPhone(phone: string): Promise<Response<AddFriend>>;
  deleteFriend(friendId: string): Promise<Response<Friend[]>>;
  inviteFriendRequestByEmail(email: string): Promise<Response<null>>;
  inviteFriendRequestByPhone(phone: string): Promise<Response<null>>;
}
