import { User } from "../../other/graphql/User";

export interface LoginResponse {
  success: boolean;
  user: User | null;
}
