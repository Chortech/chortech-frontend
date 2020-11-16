import { InputType } from "../../utils/inputTypes";

export interface IdentifyAccountRequest {
  email: string;
  phone: string;
  inputType: InputType;
}
