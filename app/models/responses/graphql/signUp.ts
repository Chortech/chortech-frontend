import { User } from "../../other/graphql/User";

export interface SignUpResponse {
  success: boolean;
  user: User | null;
}
