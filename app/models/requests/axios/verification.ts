import { InputType } from "../../../utils/inputTypes";
import { Token } from "../../other/axios/Token";

// generate code request model
export interface GenerateCodeRequest {
  email: string;
  phone: string;
  inputType: InputType;
}

// verify code request model
export interface VerifyCodeRequest {
  token?: Token;
  name: string;
  email: string;
  phone: string;
  password: string;
  code: string;
  inputType: InputType;
  parentScreen: string;
}

// cancel code request model
export interface CancelCodeRequest {
  email: string;
  phone: string;
  inputType: InputType;
}
