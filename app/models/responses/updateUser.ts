import { User } from "../other/User";

export interface UpdateUserResponse {
  success: boolean;
  user?: User;
}
