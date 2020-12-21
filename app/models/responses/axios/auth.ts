import { Token } from "../../other/axios/Token";

export interface loginResponse {
  id: string;
  token: Token;
}

export interface signUpResponse {
  id: string;
  name: string;
  token: Token;
}
