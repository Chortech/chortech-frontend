import { User } from "../../other/User";

export interface LoginResponse {
  success: boolean;
  user: User | null;
}
