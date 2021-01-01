import { SERVER_AUTH_URL } from "../../../../local_env_vars";
import { AuthApi } from "../../../models/api/axios-api/auth";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { Token } from "../../../models/other/axios/Token";
import {
  ChangeEmailOrPhone,
  ChangePassword,
  Login,
  SignUp,
} from "../../../models/responses/axios/auth";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";
import { InputType } from "../../../utils/inputTypes";

export class AuthenticationApi implements AuthApi {
  client: AxiosInstance;

  constructor(token?: Token) {
    this.client = axios.create({
      baseURL: SERVER_AUTH_URL,
    });
    this.client.interceptors.request.use(function (config) {
      if (token != undefined && token != null) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
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
          response: {
            ...response,
            email: email,
            password: password,
            inputType: InputType.Email,
          },
        };
      } else {
        result.status = data.status;
      }
      log("login api (email) result");
      log(result);
    } catch (e) {
      log("login api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
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
          response: {
            ...response,
            phone: phone,
            password: password,

            inputType: InputType.Phone,
          },
        };
      } else {
        result.status = data.status;
      }
      log("login api (phone) result");
      log(result);
    } catch (e) {
      log("login api (phone) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
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
          response: {
            ...data,
            name: name,
            email: email,
            password: password,

            inputType: InputType.Email,
          },
        };
      } else {
        result.status = response.status;
      }
      log("signup api (email) result");
      log(result);
    } catch (e) {
      log("signup api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
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
          response: {
            ...data,
            name: name,
            phone: phone,
            password: password,

            inputType: InputType.Email,
          },
        };
      } else {
        result.status = response.status;
      }
      log("signup api (email) result");
      log(result);
    } catch (e) {
      log("signup api (phone) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
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
      log("reset password by email api (result)");
      log(result);
    } catch (e) {
      log("reset password api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else if (error.response?.data.errors[0].message == "Wrong Credentials") {
          result.status = -3;
        } else if (error.response?.data.errors[0].message == "Email or Phone not verified!") {
          result.status = -4;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
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
      log("reset password by phone api result");
      log(result);
    } catch (e) {
      log("reset password api (phone) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else if (error.response?.data.errors[0].message == "Wrong Credentials") {
          result.status = -3;
        } else if (error.response?.data.errors[0].message == "Email or Phone not verified!") {
          result.status = -4;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }

  async changePassword(
    oldPassowrd: string,
    newPassword: string
  ): Promise<Response<ChangePassword>> {
    let result: Response<ChangePassword> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/changepass", {
        newpass: newPassword,
        oldpass: oldPassowrd,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            newPassword: newPassword,
          },
        };
      } else {
        result.status = response.status;
      }
      log("change password api result");
      log(result);
    } catch (e) {
      log("change password api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }

  async changeEmail(newEmail: string): Promise<Response<ChangeEmailOrPhone>> {
    let result: Response<ChangeEmailOrPhone> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/change-email", {
        newEmail: newEmail,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            newEmail: newEmail,
            newPhone: "",
            inputType: InputType.Email,
          },
        };
      } else {
        result.status = response.status;
      }
      log("change email api result");
      log(result);
    } catch (e) {
      log("change email api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }

  async changePhone(newPhone: string): Promise<Response<ChangeEmailOrPhone>> {
    let result: Response<ChangeEmailOrPhone> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/change-phone", {
        newPhone: newPhone,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            newPhone: newPhone,
            newEmail: "",
            inputType: InputType.Email,
          },
        };
      } else {
        result.status = response.status;
      }
      log("change phone api result");
      log(result);
    } catch (e) {
      log("change email api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response);
      }
    }

    return result;
  }
}

export const AuthAPI = new AuthenticationApi();
