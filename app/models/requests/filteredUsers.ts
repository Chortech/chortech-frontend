import { InputType } from "../../utils/inputTypes";

export interface FilteredUsersRequest {
  emailOrPhone: string;
  inputType: InputType;
}
