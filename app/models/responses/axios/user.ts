import { Friend } from "../../other/axios/Friend";
import { Participant } from "../../other/axios/Participant";

export interface GetUserFriends {
  friends: Array<Friend>;
}

export interface AddFriend {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  friends: Array<Friend>;
}

export interface DeleteFriend {
  friends: Array<Friend>;
}

export interface UserProfileResponse {
  name: string;
  email: string;
  phone: string;
  picture: string;
}

export interface EditProfileResponse {
  name: string;
  email?: string;
  phone?: string;
  picture: string;
}

export interface AddExpense {
  id: string;
  description: string;
  total: number;
  paid_at: number;
  group?: string;
  notes?: string;
  participants: Array<Participant>
}