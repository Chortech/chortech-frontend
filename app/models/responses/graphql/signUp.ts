import { User } from "../../other/User";

export interface SignUpResponse {
  success: boolean;
  user: User | null;
}
