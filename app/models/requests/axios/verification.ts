// generate code request models
export interface GenerateCodeEmailRequest {
  email: string;
}

export interface GenerateCodePhoneRequest {
  phone: string;
}

// verify code request models
export interface VerifyCodeEmailRequest {
  email: string;
  code: string;
}

export interface VerifyCodePhoneRequest {
  phone: string;
  code: string;
}
