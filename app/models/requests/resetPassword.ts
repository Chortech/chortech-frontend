import { InputType } from "../../utils/inputTypes";

export interface ResetPasswordRequest {
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}
