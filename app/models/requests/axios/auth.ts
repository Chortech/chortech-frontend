import { Token } from "../../other/Token";

// login models
export interface loginEmailRequest {
  email: string;
  password: string;
}

export interface loginPhoneRequest {
  phone: string;
  password: string;
}

// signup models
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

// reset password models
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

// change password model
export interface changePasswordRequest {
  newpass: string;
  oldpass: string;
  token: Token;
}

// change email model
export interface changeEmailRequest {
  newEmail: string;
  token: Token;
}

// change phone model
export interface changePhoneRequest {
  newPhone: string;
  token: Token;
}
