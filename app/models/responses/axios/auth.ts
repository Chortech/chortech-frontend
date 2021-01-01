import { InputType } from "../../../utils/inputTypes";
import { Token } from "../../other/axios/Token";

export interface Login {
  id: string;
  token: Token;
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}

export interface SignUp {
  id: string;
  token: Token;
  name: string;
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}

export interface ChangeEmailOrPhone {
  newEmail: string;
  newPhone: string;
  inputType: InputType;
}

export interface ChangePassword {
  newPassword: string;
}
