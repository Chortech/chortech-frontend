export interface AuthApi {
  login(emailOrPhone: String, password: String): boolean;
  signUp(emailOrPhone: String, password: String): boolean;
  identifyAccount(emailOrPhone: String): void;
  resetPassword(emailOrPhone: String): boolean;
}