import { Invitee } from "../../other/axios/Invitee";
import { Token } from "../../other/axios/Token";

export interface GetUserFriendsRequest {
  token: Token;
}

export interface AddFriendEmailRequest {
  email: string;
}

export interface AddFriendPhoneRequest {
  phone: string;
}

export interface RemoveFriendRequest {
  id: string;
}

export interface InviteFriendsRequest {
  invitees: Array<Invitee>;
}

export interface GetProfileRequest {
  token: Token;
}

export interface EditProfileRequest {
  picture: string;
  newName: string;
}
