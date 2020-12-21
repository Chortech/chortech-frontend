import { Token } from "../../other/Token";

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
