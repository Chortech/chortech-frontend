import { InputType } from "../../../utils/inputTypes";
import { Participant } from "../../other/axios/Participant";
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
  group?: string;
  notes?: string;
  participants: Array<Participant>;
}

export interface GetExpensesRequest {
  token: Token;
}

export interface GetExpenseRequest {
  token: Token;
  id: string;
}

export interface AddCommentRequest {
  token: Token;
  text: string;
  created_at: number;
  id: string;
}

export interface GetCommentRequest {
  token: Token;
  id: string;
}
