import { InputType } from "../../utils/inputTypes";

export interface ILoginState {
  loading: boolean;
  isLoggedIn: boolean;
  id: number;
  name: string;
  email: string;
  phone: string;
  inputType: InputType;
  password: string;
}
