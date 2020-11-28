import { InputType } from "../../utils/inputTypes";

export interface LoginRequest {
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}
