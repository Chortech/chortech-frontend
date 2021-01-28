import { Token } from "../../other/axios/Token";
import { ChangeEmailOrPhone, ChangePassword, Login, SignUp } from "../../responses/axios/auth";
import { Response } from "../../responses/axios/response";

export interface AuthApi {
  loginByEmail(email: string, password: string): Promise<Response<Login>>;
  loginByPhone(phone: string, password: string): Promise<Response<Login>>;
  signUpByEmail(name: string, email: string, password: string): Promise<Response<SignUp>>;
  signUpByPhone(name: string, phone: string, password: string): Promise<Response<SignUp>>;
  resetPasswordByEmail(email: string, newPassword: string): Promise<Response<null>>;
  resetPasswordByPhone(phone: string, newPassword: string): Promise<Response<null>>;
  changeEmail(newEmail: string): Promise<Response<ChangeEmailOrPhone>>;
  changePhone(newPhone: string): Promise<Response<ChangeEmailOrPhone>>;
  changePassword(oldPassowrd: string, newPassword: string): Promise<Response<ChangePassword>>;
}
