import { InputType } from "../../utils/inputTypes";

export interface UserByFilterRequest {
  emailOrPhone: string;
  inputType: InputType;
}
