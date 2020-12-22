import { Response } from "../../responses/axios/response";

export interface VerificationApi {
  generateCodeRequestByEmail(email: string): Promise<Response<null>>;
  generateCodeRequestByPhone(phone: string): Promise<Response<null>>;
  verifyCodeRequestByEmail(email: string, code: string): Promise<Response<null>>;
  verifyCodeRequestByPhone(phone: string, code: string): Promise<Response<null>>;
  cancelCodeRequestByEmail(email: string): Promise<Response<null>>;
  cancelCodeRequestByPhone(phone: string): Promise<Response<null>>;
}
