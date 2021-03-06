import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_EXPENSE_URL } from "../../../../local_env_vars";
import { expenseApi } from "../../../models/api/axios-api/expense";
import { Expense } from "../../../models/other/axios/Expense";
import { Participant } from "../../../models/other/axios/Participant";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import {
  AddExpense,
  ExpenseComments,
  EditExpense,
  FriendRelations,
  GroupExpenses,
} from "../../../models/responses/axios/user";
import { log } from "../../../utils/logger";

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

  async getUserExpenses(): Promise<Response<Expense[]>> {
    let result: Response<Expense[]> = {
      success: false,
      status: -1,
      response: [],
    };

    try {
      let response: AxiosResponse = await this.client.get("");

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      }
      log("get expenses api result");
      log(result, false);
    } catch (e) {
      log("get expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response, false);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async getUserExpense(expenseId: string): Promise<Response<Expense>> {
    let result: Response<Expense> = {
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
      log(result, false);
    } catch (e) {
      log("get expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async getFriendRelations(): Promise<Response<FriendRelations>> {
    let result: Response<FriendRelations> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("/friends");
      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else result.status = response.status;
      log("get friend relations api result");
      log(result, false);
    } catch (e) {
      log("get friend relations api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async addExpense(
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    category: number,
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
        category: category,
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
      log(result.response);
    } catch (e) {
      log("add expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async updateExpense(
    expenseId: string,
    description: string,
    total: number,
    paid_at: number,
    participants: Array<Participant>,
    category: number,
    group?: string,
    notes?: string
  ): Promise<Response<EditExpense>> {
    let result: Response<EditExpense> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put(`/${expenseId}`, {
        description: description,
        total: total,
        paid_at: paid_at,
        group: group,
        notes: notes,
        participants: participants,
        category: category,
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
      log("update expense api result");
      log(result.response);
    } catch (e) {
      log("update expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async deleteExpense(expenseId: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/${expenseId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("delete expense api result");
      log(result, false);
    } catch (e) {
      log("delete expense api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async addComment(text: string, created_at: number, expenseId: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post(`/${expenseId}/comments`, {
        text: text,
        created_at: created_at,
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
      log("add comment api result");
      log(result, false);
    } catch (e) {
      log("add comment api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        let message: string =
          error.response?.data.errors != undefined ? error.response?.data.errors[0].message : "";

        if (message == "user doesn't participate in expense") {
          result.status = -2;
        } else {
          result.status = error.response?.status != undefined ? error.response?.status : -1;
        }
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async getExpenseComments(expenseId: string): Promise<Response<ExpenseComments>> {
    let result: Response<ExpenseComments> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get(`/${expenseId}/comments`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: {
            expenseId: expenseId,
            comments: response.data,
          },
        };
      } else {
        result.status = response.status;
      }
      log("get comment api result");
      log(result, false);
    } catch (e) {
      log("get comment api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }
    return result;
  }

  async getGroupExpenses(groupId: string): Promise<Response<GroupExpenses>> {
    let result: Response<GroupExpenses> = {
      success: false,
      status: -1,
      response: {
        group: {
          id: "-1",
          memebers: [],
          name: "",
          owner: "-1",
          balance: 0,
        },
        expenses: [],
      },
    };

    try {
      let response: AxiosResponse = await this.client.get(`/groups/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      }
      log("get group expenses api result");
      log(result, true);
    } catch (e) {
      log("get group expenses api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }
}
