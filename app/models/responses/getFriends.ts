export interface FriendsResponse {
  success: boolean;
  relationId: string;
  userId: string;
  friends: Array<Friend>;
}
