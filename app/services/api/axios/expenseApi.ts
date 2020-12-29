import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_EXPENSE_URL } from "../../../../local_env_vars";
import { expenseApi } from "../../../models/api/axios-api/expense";
import { Participant } from "../../../models/other/axios/Participant";
import { Token } from "../../../models/other/axios/Token";
import { IUserState } from "../../../models/reducers/default";
import { Response } from "../../../models/responses/axios/response";
import {
  UserExpenses,
  AddExpense,
  AddComment,
  UserExpense,
  GetComment,
} from "../../../models/responses/axios/user";
import configureStore from "../../../store";
import { log } from "../../../utils/logger";
import { validateToken } from "../../../utils/tokenValidator";

export class ExpenseAPI implements expenseApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_EXPENSE_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (token != undefined && token != null) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async getExpenses(): Promise<Response<UserExpenses>> {
    let result: Response<UserExpenses> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("");

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: { expenses: response.data },
        };
      } else {
        result.status = response.status;
      }
      log("get expenses api result");
      log(result);
    } catch (e) {
      log("get expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response);
      } else {
        log(e.message);
      }
    }
    return result;
  }

  async getExpense(expenseId: string): Promise<Response<UserExpense>> {
    let result: Response<UserExpense> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get(`/${expenseId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("get expense api result");
      log(result);
    } catch (e) {
      log("get expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.message);
      }
    }
    return result;
  }

  async addExpense(
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    group?: string,
    notes?: string
  ): Promise<Response<AddExpense>> {
    let result: Response<AddExpense> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post("", {
        description: description,
        total: total,
        paid_at: paid_at,
        group: group,
        notes: notes,
        participants: participants,
      });

      if (response.status == 201) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("add expense api result");
      log(result);
    } catch (e) {
      log("add expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.message);
      }
    }
    return result;
  }

  async addComment(
    text: string,
    created_at: number,
    expenseId: string
  ): Promise<Response<AddComment>> {
    let result: Response<AddComment> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post(`/${expenseId}/comments`, {
        text: text,
        created_at: created_at,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("add comment api result");
      log(result);
    } catch (e) {
      log("add comment api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.message);
      }
    }
    return result;
  }

  async getComment(expenseId: string): Promise<Response<GetComment>> {
    let result: Response<GetComment> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get(`/${expenseId}/comments`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("get comment api result");
      log(result);
    } catch (e) {
      log("get comment api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.message);
      }
    }
    return result;
  }
}
