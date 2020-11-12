import { LoginResponse } from "../responses/login";
import { SignUpResponse } from "../responses/signUp";
import { InputType } from "../../utils/inputTypes";
import { IdentifyAccountResponse } from "../responses/identify";

export interface AuthApi {
  login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse>;
  signUp(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<SignUpResponse>;
  identifyAccount(
    email: string,
    phone: string,
    inputType: InputType
  ): Promise<IdentifyAccountResponse>;
  verifyCode(email: string, phone: string, code: string): Promise<void>;
  resetPassword(email: string, phone: string, password: string): Promise<void>;
  generateCode(email: string, phone: string): Promise<void>;
  cancelCode(email: string, phone: string): Promise<void>;
}
