import { User } from "../other/User";

export interface LoginResponse {
  success: boolean;
  user: User | null;
}

// export interface LoginResponse {
//   id: string;
//   token: {
//     access: string;
//     expires: number;
//     created: number;
//   };
// }

// export interface LoginResponseState {
//   type: string;
//   response: LoginResponse;
// }
