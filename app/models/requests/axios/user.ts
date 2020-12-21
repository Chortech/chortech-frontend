import { Token } from "../../other/axios/Token";

export interface getUserFriendsRequest {
  token: Token;
}

export interface addFriendEmailRequest {
  email: string;
}

export interface addFriendPhoneRequest {
  phone: string;
}

export interface removeFriendRequest {
  id: string;
}

export interface invitee {
  type: "phone" | "email" | "combo";
  phone?: string;
  email?: string;
  name: string;
}

export interface inviteFriendsRequest {
  invitees: Array<invitee>;
}

export interface getProfileRequest {
  token: Token;
}

export interface editProfileRequest {
  picture: string;
  newName: string;
}
