import { AuthApi } from '../models/api/auth';

class GraphQLApi implements AuthApi {
  constructor(parameters) {
    
  }

  login(emailOrPhone: String, password: String): boolean {
    return true;
  }
  
  signUp(emailOrPhone: String, password: String): boolean {
    return true;
  }

  identifyAccount(emailOrPhone: String): void {

  }

  resetPassword(emailOrPhone: String): boolean {
    return true;
  }
}
