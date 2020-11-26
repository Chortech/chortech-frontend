import { User } from "../other/User";

export interface FetchUserResponse {
  success: boolean;
  user?: User;
}
