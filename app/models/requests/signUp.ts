import { InputType } from "../../utils/inputTypes";

export interface SignUpRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}

// export interface SignUpRequestState {
//   type: string;
//   email: string;
//   phone: string;
//   password: string;
// }
