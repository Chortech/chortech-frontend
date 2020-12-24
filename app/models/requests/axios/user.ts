import { InputType } from "../../../utils/inputTypes";
import { Invitee } from "../../other/axios/Invitee";
import { Token } from "../../other/axios/Token";

export interface GetUserFriendsRequest {
  token: Token;
}

export interface AddFriendRequest {
  token: Token;
  email: string;
  phone: string;
  inputType: InputType;
}

export interface RemoveFriendRequest {
  id: string;
}

export interface InviteFriendsRequest {
  invitees: Array<Invitee>;
}

export interface GetUserProfileRequest {
  token: Token;
}

export interface EditProfileRequest {
  picture: string;
  newName: string;
}
