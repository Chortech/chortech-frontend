import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_VERIFICATION_URL } from "../../../../local_env_vars";
import { VerificationApi } from "../../../models/api/axios-api/verification";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";

class CodeVerificationAPI implements VerificationApi {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: SERVER_VERIFICATION_URL,
    });
  }

  async generateCodeRequestByEmail(email: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/generate", {
        email: email,
      });
      if (response.status == 201) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("generate code api (email) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("generate code api (email) error");
        log(e.message);
      }
    }

    return result;
  }
  async generateCodeRequestByPhone(phone: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };
    try {
      let response: AxiosResponse = await this.client.post("/generate", {
        phone: phone,
      });
      if (response.status == 201) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("generate code api (phone) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("generate code api (phone) error");
        log(e.message);
      }
    }

    return result;
  }
  async verifyCodeRequestByEmail(email: string, code: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/verify", {
        email: email,
        code: code,
      });
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("verify code api (email) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else if (error.response?.data.errors[0].message == "Wrong code!") {
          result.status = -3;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("verify code api (email) error");
        log(e.message);
      }
    }

    return result;
  }
  async verifyCodeRequestByPhone(phone: string, code: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("/verify", {
        phone: phone,
        code: code,
      });
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("verify code api (phone) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else if (error.response?.data.errors[0].message == "Wrong code!") {
          result.status = -3;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("verify code api (phone) error");
        log(e.message);
      }
    }
    return result;
  }

  async cancelCodeRequestByEmail(email: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/cancel", {
        email: email,
      });

      if (response.status == 202) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("cancel code api(email) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("cancel code api (email) error");
        log(e.message);
      }
    }

    return result;
  }

  async cancelCodeRequestByPhone(phone: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put("/cancel", {
        phone: phone,
      });
      if (response.status == 202) {
        result = {
          success: true,
          status: response.status,
        };
      } else {
        result.status = response.status;
      }
      log("cancel code api (phone) result");
      log(result);
    } catch (e) {
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        if (error.response?.data.errors[0].message == "Something went wrong") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
      } else {
        log("cancel code api (phone) error");
        log(e.message);
      }
    }

    return result;
  }
}

export const VerificationAPI = new CodeVerificationAPI();
