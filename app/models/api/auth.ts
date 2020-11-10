export interface SignUpResponse {
  id: string;
  name: string;
  token: {
    access: string,
    expires: number,
    created: number
  };
}

export interface LoginResponse {
  id: string;
  token: {
    access: string,
    expires: number,
    created: number
  };  
}

export interface AuthApi {
	login(email: string, phone?: string, password: string): LoginResponse;
	signUp(email?: string, phone?: string, password: string): SignUpResponse;
	verifyCode(email?: string, phone?: string, code: string): void;
	resetPassword(email?: string, phone?: string, password: string): void;
  generateCode(email?: string, phone?: string): void;
  cancelCode(email?: string, phone?: string): void;
}
