import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_GROUP_URL } from "../../../../local_env_vars";
import { groupApi } from "../../../models/api/axios-api/group";
import { Token } from "../../../models/other/axios/Token";
import { Response } from "../../../models/responses/axios/response";
import {
  AddFriendToGroupResponse,
  DeleteGroupResponse,
  EditGroupResponse,
  GetGroupInfoResponse,
  GetUserGroupsResponse,
  LeaveGroupResponse,
  RemoveMemberResponse,
} from "../../../models/responses/axios/group";
import configureStore from "../../../store";
import { log } from "../../../utils/logger";
import { validateToken } from "../../../utils/tokenValidator";
import { IUserState } from "../../../models/reducers/default";

import { Buffer } from "buffer";
import { CreateGroupRequest } from "../../../models/requests/axios/group";

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

  async getUserGroups(): Promise<Response<GetUserGroupsResponse>> {
    let result: Response<GetUserGroupsResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get("");

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("get user groups api result");
      log(result);
    } catch (e) {
      log("get user groups api error");
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

  async createGroup(name: string, picture: string): Promise<Response<null>> {
    let result: Response<null> = {
      success: false,
      status: -1,
    };
    picture = "../../../assets/images/group-image.jpg";
    try {
      let response: AxiosResponse = await this.client.post("", { name, picture });

      if (response.status == 201) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("create group api result");
      log(result);
    } catch (e) {
      log("create group api error");
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

  async getGroupInfo(groupId: string): Promise<Response<GetGroupInfoResponse>> {
    let result: Response<GetGroupInfoResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.get(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("group info api result");
      log(result);
    } catch (e) {
      log("group info api error");
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

  async deleteGroup(groupId: string): Promise<Response<DeleteGroupResponse>> {
    let result: Response<DeleteGroupResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("delete group api result");
      log(result);
    } catch (e) {
      log("delete group api error");
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

  async addFriendToGroup(groupId: string): Promise<Response<AddFriendToGroupResponse>> {
    let result: Response<AddFriendToGroupResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("add friend to group api result");
      log(result);
    } catch (e) {
      log("add friend to group api error");
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

  async editGroup(groupId: string): Promise<Response<EditGroupResponse>> {
    let result: Response<EditGroupResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.patch(`/${groupId}`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("edit group api result");
      log(result);
    } catch (e) {
      log("edit group api error");
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

  async leaveGroup(groupId: string): Promise<Response<LeaveGroupResponse>> {
    let result: Response<LeaveGroupResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.delete(`/${groupId}/leave`);

      if (response.status == 200) {
        result = {
          success: true,
          status: response.status,
          response: response.data,
        };
      } else {
        result.status = response.status;
      }
      log("leave group api result");
      log(result);
    } catch (e) {
      log("leave group api error");
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

  async removeMember(groupId: string): Promise<Response<RemoveMemberResponse>> {
    let result: Response<RemoveMemberResponse> = {
      success: false,
      status: -1,
    };

    try {
      let response: AxiosResponse = await this.client.put(`/${groupId}/remove`);

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
      log(result);
    } catch (e) {
      log("remove member api error");
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
}
