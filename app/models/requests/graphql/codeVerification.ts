import { InputType } from "../../../utils/inputTypes";

export interface GenerateCodeRequest {
  email: string;
  phone: string;
  inputType: InputType;
}
