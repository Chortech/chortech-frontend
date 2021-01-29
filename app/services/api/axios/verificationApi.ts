import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_VERIFICATION_URL } from "../../../../local_env_vars";
import messages from "../../../assets/resources/messages";
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
      log("generate code api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";
        if (message == "Something went wrong") {
          result.status = -2;
        } else if (message == "User is already verified!") {
          result.status = -3;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        result.response = error.response != undefined ? error.response.data : result.response;
        log(error.response?.data);
      } else {
        log(e.response);
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
      log("generate code api (phone) error");
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
      log("verify code api (email) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Something went wrong") {
          result.status = -2;
        } else if (message == "Wrong code!") {
          result.status = -3;
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
      log("verify code api (phone) error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "Something went wrong") {
          result.status = -2;
        } else if (message == "Wrong code!") {
          result.status = -3;
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
      log("cancel code api (email) error");
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
      log("cancel code api (phone) error");
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
}

export const VerificationAPI = new CodeVerificationAPI();
