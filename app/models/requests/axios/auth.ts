import { InputType } from "../../../utils/inputTypes";
import { Token } from "../../other/axios/Token";

// login request models
export interface LoginRequest {
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}

// signup request model
export interface SignUpRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  inputType: InputType;
}

// reset password request model
export interface ResetPasswordRequest {
  email: string;
  phone: string;
  newPassword: string;
  inputType: InputType;
}

// change password request model
export interface ChangePasswordRequest {
  newpass: string;
  oldpass: string;
  token: Token;
  email: string;
  phone: string;
  inputType: InputType;
}

// change email and phone request models
export interface ChangeEmailOrPhone {
  token: Token;
  newEmail: string;
  newPhone: string;
  inputType: InputType;
  password: string;
}
