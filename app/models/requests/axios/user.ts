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

export interface UploadImageRequest {
  token: Token;
  data: any;
}

export interface EditProfileRequest {
  token: Token;
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
  category: number;
  participants: Array<Participant>;
}

export interface EditExpenseRequest {
  expenseId: string;
  token: Token;
  description: string;
  total: number;
  paid_at: number;
  group?: string;
  notes?: string;
  category: number;
  participants: Array<Participant>;
}

export interface DeleteExpenseRequest {
  expenseId: string;
  token: Token;
}

export interface GetUserExpensesRequest {
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

export interface GetExpenseCommentsRequest {
  token: Token;
  expenseId: string;
}

export interface GetFriendsBalanceRequest {
  token: Token;
}

export interface GetFriendBalanceRequest {
  token: Token;
  friendId: string;
  friendName: string;
  balance: number;
}

export interface GetUserActivitiesRequest {
  token: Token;
}

export interface GetPaymentRequest {
  token: Token;
  id: string;
}

export interface AddPaymentRequest {
  token: Token;
  from: string;
  to: string;
  amount: number;
  paid_at: number;
  group?: string;
  notes?: string;
}

export interface DeletePaymentRequest {
  token: Token;
  id: string;
}

export interface EditPaymentRequest {
  token: Token;
  id: string;
  amount?: number;
  paid_at?: number;
  group?: string;
  notes?: string;
}

export interface PushNotificationRequest {
  token: Token;
  FCMToken: string;
}

export interface RemindMemberRequest {
  token: Token;
  message: string;
  contactId: string;
}

export interface GetUserGroupsRequest {
  token: Token;
}

export interface AddGroupRequest {
  token: Token;
  name: string;
  picture?: string;
}

export interface GetGroupInfoRequest {
  token: Token;
  groupId: string;
}

export interface DeleteGroupRequest {
  token: Token;
  groupId: string;
}

export interface AddFriendToGroupRequest {
  token: Token;
  groupId: string;
  members: string[];
}

export interface EditGroupRequest {
  token: Token;
  groupId: string;
  name: string;
  picture?: string;
}

export interface LeaveGroupRequest {
  token: Token;
  groupId: string;
}

export interface RemoveMemberRequest {
  token: Token;
  groupId: string;
  memberId: string;
}

export interface GetGroupsBalancesRequest {
  token: Token;
}

export interface GetGroupExpensesRequest {
  token: Token;
  groupId: string;
}

export interface GetGroupMembersBalancesRequest {
  token: Token;
  groupId: string;
}
