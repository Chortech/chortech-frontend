import { Friend } from "../../other/axios/Friend";

export interface GetUserFriends {
  friends: Array<Friend>;
}

export interface AddFriendResponse {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  friends: Array<Friend>;
}

export interface RemoveFriendResponse {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  friends: Array<Friend>;
}

export interface EditProfileResponse {
  name: string;
  email?: string;
  phone?: string;
  picture: string;
}
