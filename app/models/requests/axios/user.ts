import { InputType } from "../../../utils/inputTypes";
import { Participant } from "../../other/axios/Participant";
import { Token } from "../../other/axios/Token";
import { You } from "../../other/axios/You";

export interface GetUserFriendsRequest {
  token: Token;
}

export interface AddFriendRequest {
  token: Token;
  email: string;
  phone: string;
  inputType: InputType;
}

export interface DeleteFriendRequest {
  id: string;
  token: Token;
}

export interface InviteFriendsRequest {
  token: Token;
  email: string;
  phone: string;
  inputType: InputType;
}

export interface GetUserProfileRequest {
  token: Token;
}

export interface EditProfileRequest {
  picture: string;
  newName: string;
}

export interface AddExpenseRequest {
  token: Token;
  description: string;
  total: number;
  paid_at: number;
  group: string;
  notes: string;
  participants: Array<Participant>;
}

export interface GetExpenseRequest {
  token: Token;
}

export interface AddCommentRequest {
  token: Token;
  text: string;
  created_at: number;
}