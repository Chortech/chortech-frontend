import { Token } from "../../other/axios/Token";

// login request models
export interface LoginEmailRequest {
  email: string;
  password: string;
}

export interface LoginPhoneRequest {
  phone: string;
  password: string;
}

// signup request models
export interface SignUpEmailRequest {
  email: string;
  name: string;
  password: string;
}

export interface SignUpPhoneRequest {
  phone: string;
  name: string;
  password: string;
}

// reset password request models
export interface ResetPasswordRequestByEmail {
  email: string;
  newpass: string;
  token: Token;
}

export interface ResetPasswordRequestByPhone {
  phone: string;
  newpass: string;
  token: Token;
}

// change password request model
export interface ChangePasswordRequest {
  newpass: string;
  oldpass: string;
  token: Token;
}

// change email request model
export interface ChangeEmailRequest {
  newEmail: string;
  token: Token;
}

// change phone request model
export interface ChangePhoneRequest {
  newPhone: string;
  token: Token;
}
