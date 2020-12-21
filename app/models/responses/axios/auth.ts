import { Token } from "../../other/axios/Token";

export interface Login {
  id: string;
  token: Token;
}

export interface SignUp {
  id: string;
  name: string;
  token: Token;
}
