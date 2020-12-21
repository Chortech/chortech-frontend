import { SERVER_AUTH_URL } from "../../../../local_env_vars";
import { AuthApi } from "../../../models/api/axios-api/auth";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Token } from "../../../models/other/axios/Token";
import { Login, SignUp } from "../../../models/responses/axios/auth";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";

class AuthenticationApi implements AuthApi {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: SERVER_AUTH_URL,
    });
  }

  async loginByEmail(email: string, password: string): Promise<Response<Login>> {
    log("fetch data");
    let data: AxiosResponse = await this.client.post("/login", {
      email: email,
      password: password,
    });
    let result: Response<Login> = {
      success: false,
      status: -1,
      response: null,
    };

    if (data.status == 200) {
      let response: Login = data.data;
      result = {
        success: true,
        status: data.status,
        response: response,
      };
    } else {
      result.status = data.status;
    }

    log(result);
    return result;
  }

  async loginByPhone(phone: string, password: string): Promise<Response<Login>> {
    throw new Error("Method not implemented.");
  }

  async signUpByEmail(name: string, email: string, password: string): Promise<Response<SignUp>> {
    throw new Error("Method not implemented.");
  }

  async signUpByPhone(name: string, phone: string, password: string): Promise<Response<SignUp>> {
    throw new Error("Method not implemented.");
  }

  async resetPasswordByEmail(
    email: string,
    newPassword: string,
    token: Token
  ): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }

  async resetPasswordByPhone(
    phone: string,
    newPassword: string,
    token: Token
  ): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }

  async changePassword(
    oldPassowrd: string,
    newPassword: string,
    token: Token
  ): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }

  async changeEmail(newEmail: string, token: Token): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }

  async changePhone(newPhone: string, token: Token): Promise<Response<null>> {
    throw new Error("Method not implemented.");
  }
}

export const AuthAPI = new AuthenticationApi();
