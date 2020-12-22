import { SERVER_AUTH_URL } from "../../../../local_env_vars";
import { AuthApi } from "../../../models/api/axios-api/auth";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { Token } from "../../../models/other/axios/Token";
import { Login, SignUp } from "../../../models/responses/axios/auth";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";
import { IUserState } from "../../../models/reducers/default";
import { useStore } from "react-redux";
import configureStore from "../../../store/index";

class AuthenticationApi implements AuthApi {
  client: AxiosInstance;
  state: IUserState;
  constructor() {
    this.client = axios.create({
      baseURL: SERVER_AUTH_URL,
    });
    this.client.interceptors.request.use(function (config) {
      log(config.url);
      return config;
    });
    this.state = configureStore().store.getState()["authReducer"];
    log(this.state);
  }

  async loginByEmail(email: string, password: string): Promise<Response<Login>> {
    let result: Response<Login> = {
      success: false,
      status: -1,
      response: null,
    };
    try {
      let data: AxiosResponse = await this.client.post("/login", {
        email: email,
        password: password,
      });
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
      log("login api (email) result");
      log(result);
    } catch (error) {
      log("login api (email) error");
      log(error.message);
    }

    return result;
  }

  async loginByPhone(phone: string, password: string): Promise<Response<Login>> {
    let result: Response<Login> = {
      success: false,
      status: -1,
      response: null,
    };

    try {
      let data: AxiosResponse = await this.client.post("/login", {
        phone: phone,
        password: password,
      });
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
      log("login api (phone) result");
      log(result);
    } catch (error) {
      log("login api (phone) error");
      log(error.message);
    }

    return result;
  }

  async signUpByEmail(name: string, email: string, password: string): Promise<Response<SignUp>> {
    let result: Response<SignUp> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/signup", {
        name: name,
        email: email,
        password: password,
      });
      if (response.status == 201) {
        let data: SignUp = response.data;
        result = {
          success: true,
          status: response.status,
          response: data,
        };
      } else {
        result.status = response.status;
      }
      log("signup api (email) result");
      log(result);
    } catch (error) {
      log("signup api (email) error");
      log(error.message);
    }

    return result;
  }

  async signUpByPhone(name: string, phone: string, password: string): Promise<Response<SignUp>> {
    let result: Response<SignUp> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/signup", {
        name: name,
        phone: phone,
        password: password,
      });
      if (response.status == 201) {
        let data: SignUp = response.data;
        result = {
          success: true,
          status: response.status,
          response: data,
        };
      } else {
        result.status = response.status;
      }
      log("signup api (email) result");
      log(result);
    } catch (error) {
      log("signup api (email) error");
      log(error.message);
    }

    return result;
  }

  async resetPasswordByEmail(email: string, newPassword: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/resetpass", {
        email: email,
        newpass: newPassword,
      });
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
    } catch (error) {
      log("reset password api (email) error");
      log(error.message);
    }

    return result;
  }

  async resetPasswordByPhone(phone: string, newPassword: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/resetpass", {
        phone: phone,
        newpass: newPassword,
      });
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
    } catch (error) {
      log("reset password api (email) error");
      log(error.message);
    }

    return result;
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
