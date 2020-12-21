import { Friend } from "../../other/axios/Friend";

export interface getUserFriendsResponse {
  friends: Array<Friend>;
}

export interface addFriendResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  friends: Array<Friend>;
}

export interface removeFriendResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  friends: Array<Friend>;
}

export interface editProfileResponse {
  name: string;
  email?: string;
  phone?: string;
  picture: string;
}
