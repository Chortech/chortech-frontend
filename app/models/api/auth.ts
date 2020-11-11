import { LoginResponse } from "../responses/login";
import { SignUpResponse } from "../responses/signUp";

export interface AuthApi {
  login(
    email: string,
    phone: string,
    password: string
  ): Promise<LoginResponse>;
  signUp(
    email: string,
    phone: string,
    password: string
  ): Promise<SignUpResponse>;
  verifyCode(email: string, phone: string, code: string): Promise<void>;
  resetPassword(email: string, phone: string, password: string): Promise<void>;
  generateCode(email: string, phone: string): Promise<void>;
  cancelCode(email: string, phone: string): Promise<void>;
}
