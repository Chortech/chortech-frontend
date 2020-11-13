import { InputType } from "../../utils/inputTypes";

export interface LoginRequest {
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}


// export interface LoginRequest {
//   email: string;
//   phone: string;
//   password: string;
// }

// export interface LoginRequestState {
//   type: string;
//   email: string;
//   phone: string;
//   password: string;
// }
