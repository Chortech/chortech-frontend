import { Token } from "../../other/axios/Token";

// login request models
export interface loginEmailRequest {
  email: string;
  password: string;
}

export interface loginPhoneRequest {
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
export interface resetPasswordRequestByEmail {
  email: string;
  newpass: string;
  token: Token;
}

export interface resetPasswordRequestByPhone {
  phone: string;
  newpass: string;
  token: Token;
}

// change password request model
export interface changePasswordRequest {
  newpass: string;
  oldpass: string;
  token: Token;
}

// change email request model
export interface changeEmailRequest {
  newEmail: string;
  token: Token;
}

// change phone request model
export interface changePhoneRequest {
  newPhone: string;
  token: Token;
}
