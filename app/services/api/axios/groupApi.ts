import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_GROUP_URL } from "../../../../local_env_vars";
import { groupApi } from "../../../models/api/axios-api/group";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import { log } from "../../../utils/logger";
import { validateToken } from "../../../utils/tokenValidator";
import { Group } from "../../../models/other/axios/Group";
import { RemoveGroupMember } from "../../../models/responses/axios/user";

export class GroupAPI implements groupApi {
  client: AxiosInstance;

  constructor(token: Token) {
    this.client = axios.create({
      baseURL: SERVER_GROUP_URL,
    });

    this.client.interceptors.request.use(function (config) {
      if (validateToken(token)) {
        config.headers["Authorization"] = `Bearer ${token.access}`;
      }
      return config;
    });
  }

  async getUserGroups(): Promise<Response<Group[]>> {
    let result: Response<Group[]> = {
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
      if (result.response != undefined) {
        result.response.forEach((group) => {
          group.balance = 0;
          group.expenses = [];
        });
      }
      log("get user groups api result");
      log(result, false);
    } catch (e) {
      log("get user groups api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async getGroupInfo(groupId: string): Promise<Response<Group>> {
    let result: Response<Group> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data.group,
        };
      }
      if (result.response != undefined) {
        result.response = {
          ...result.response,
          balance: 0,
          expenses: [],
        };
      }
      log("group info api result");
      log(result, false);
    } catch (e) {
      log("group info api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async addGroup(name: string, picture?: string): Promise<Response<Group>> {
    let result: Response<Group> = {
      success: false,
      status: -1,
    };
    try {
      let response: AxiosResponse = await this.client.post("", { name: name, picture: picture });

      if (response.status == 201) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      }
      log("create group api result");
      log(result, false);
    } catch (e) {
      log("create group api error");
      console.log(e.response);
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async editGroup(groupId: string, name: string, picture?: string): Promise<Response<Group>> {
    let result: Response<Group> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.patch(`/${groupId}`, {
        name: name,
        picture: picture,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      }
      if (result.response != undefined) {
        result.response = {
          ...result.response,
          balance: 0,
          expenses: [],
        };
      }
      log("edit group api result");
      log(result, false);
    } catch (e) {
      log("edit group api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async deleteGroup(groupId: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      }
      log("delete group api result");
      log(result, false);
    } catch (e) {
      log("delete group api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async addFriendToGroup(groupId: string, members: string[]): Promise<Response<Group>> {
    let result: Response<Group> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.post(`/${groupId}/members/`, {
        members: members,
      });

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      }
      log("add friend to group api result");
      log(result, false);
    } catch (e) {
      console.log(e.response);
      log("add friend to group api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async leaveGroup(groupId: string): Promise<Response<any>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/${groupId}/members/`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
        };
      }
      log("leave group api result");
      log(result, false);
    } catch (e) {
      log("leave group api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }

  async removeMember(groupId: string, memberId: string): Promise<Response<any>> {
    let result: Response<any> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put(`/${groupId}/members/${memberId}/`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("remove member api result");
      log(result, false);
    } catch (e) {
      console.log(e.response);
      log("remove member api error");
      if (e.isAxiosError) {
        const error: AxiosError = e as AxiosError;
        result.status = error.response?.status != undefined ? error.response?.status : -1;
        log(error.response?.data, false);
      } else {
        log(e.response, false);
      }
    }

    return result;
  }
}
