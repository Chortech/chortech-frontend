import { LoginResponse } from "../../responses/login";
import { SignUpResponse } from "../../responses/signUp";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../responses/identifyAccount";
import { ResetPasswordResponse } from "../../responses/resetPassword";

export interface AuthApi {
  login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse>;
  signUp(
    name: string,
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
  generateCode(email: string, phone: string, inputType: InputType): void;
  cancelCode(email: string, phone: string): Promise<void>;
  resetPassword(id: string, password: string): Promise<ResetPasswordResponse>;
}
