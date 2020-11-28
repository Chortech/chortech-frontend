export interface AddFriendRequest {
  userId: string;
  friendId: string;
  friendName: string;
}

export interface DeleteFriendRequest {
  id: string;
}
