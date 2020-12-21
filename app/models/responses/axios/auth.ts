import { Token } from "../../other/Token";

export interface loginResponse {
  id: string;
  token: Token;
}

export interface signUpResponse {
  id: string;
  name: string;
  token: Token;
}
