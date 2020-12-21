// generate code request models
export interface generateCodeEmailRequest {
  email: string;
}

export interface generateCodePhoneRequest {
  phone: string;
}

// verify code request models
export interface verifyCodeEmailRequest {
  email: string;
  code: string;
}

export interface verifyCodePhoneRequest {
  phone: string;
  code: string;
}
