import { GraphQLClient } from "graphql-request";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { AuthApi } from "../../../models/api/auth";
import { GroupApi } from "../../../models/api/group";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import * as queries from "./queries";
import * as mutations from "./mutations";
import {
  AddGroupResponse,
  DeleteGroupResponse,
  GetGroupByIdResponse,
  GetUserGroupsResponse,
  UpdateGroupResponse,
} from "../../../models/responses/group";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../../models/responses/identifyAccount";
import { ToastAndroid } from "react-native";
import { ResetPasswordResponse } from "../../../models/responses/resetPassword";
import { ActivityApi } from "../../../models/api/activity";
import { FriendsApi } from "../../../models/api/friend";
import {
  GetUserFriendsResponse,
  UserByFilterResponse,
  GetUserResponse,
  UpdateUserResponse,
  GetUserActivitiesResponse,
} from "../../../models/responses/user";
import { Friend } from "../../../models/other/Friend";
import { Group } from "../../../models/other/Group";
import { User } from "../../../models/other/User";
import {
  AddFriendResponse,
  DeleteFriendResponse,
} from "../../../models/responses/friend";
import { UserApi } from "../../../models/api/user";
import {
  AddActivityResponse,
  AddDebtResponse,
  AddExpenseResponse,
  AddParticipantResponse,
  DeleteActivityResponse,
  DeleteDebtResponse,
  DeleteExpenseResponse,
  DeleteParticipantResponse,
} from "../../../models/responses/activity";
import { Activity } from "../../../models/other/Activity";

class GraphQLApi
  implements AuthApi, GroupApi, FriendsApi, UserApi, ActivityApi {
  endpoint: string = API_URL;
  client: GraphQLClient;

  constructor() {
    this.client = new GraphQLClient(this.endpoint, {
      headers: {
        authorization: `Bearer ${API_KEY}`,
      },
    });
  }

  async addActivity(
    userId: string,
    type: string,
    groupId?: string,
    expenseId?: string,
    debtId?: string
  ): Promise<AddActivityResponse> {
    let data: any;
    if (groupId != null && groupId != undefined) {
      if (type == "debt") {
        if (debtId != null && debtId != undefined) {
          data = await this.client.request(mutations.ADD_GROUP_DEBT_ACTIVITY, {
            userId: userId,
            type: type,
            groupId: groupId,
            debtId: debtId,
          });
        }
      } else {
        data = await this.client.request(mutations.ADD_GROUP_EXPENSE_ACTIVITY, {
          userId: userId,
          type: type,
          groupId: groupId,
          expenseId: expenseId,
        });
      }
    } else {
      if (type == "debt") {
        if (debtId != null && debtId != undefined) {
          data = await this.client.request(
            mutations.ADD_NON_GROUP_DEBT_ACTIVITY,
            {
              userId: userId,
              type: type,
              debtId: debtId,
            }
          );
        }
      } else {
        data = await this.client.request(
          mutations.ADD_NON_GROUP_EXPENSE_ACTIVITY,
          {
            userId: userId,
            type: type,
            expenseId: expenseId,
          }
        );
      }
    }
    data = data.createActivity;
    let successful: boolean = data != null;
    let id: string = "-1";

    if (successful) {
      id = data._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async addExpense(
    userId: string,
    activityName: string,
    description: string,
    category: string,
    totalPrice: string
  ): Promise<AddExpenseResponse> {
    let data: any = await this.client.request(mutations.ADD_EXPENSE, {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      totalPrice: Number(totalPrice),
    });
    data = data.createActivity;
    let successful: boolean = data != null;
    let id: string = "-1";

    if (successful) {
      id = data.expense._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async addDebt(
    userId: string,
    activityName: string,
    description: string,
    category: string,
    debt: number,
    creditorId: string
  ): Promise<AddDebtResponse> {
    let data: any = await this.client.request(mutations.ADD_DEBT, {
      userId: userId,
      activityName: activityName,
      description: description,
      category: category,
      debt: debt,
      creditorId: creditorId,
    });
    data = data.createDebt;
    let successful: boolean = data != null;
    let id: string = "-1";

    if (successful) {
      id = data.debt._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async addParticipant(
    expenseId: string,
    userId: string,
    share: number
  ): Promise<AddParticipantResponse> {
    let data: any = await this.client.request(mutations.ADD_PARTICIPANT, {
      expenseId: expenseId,
      userId: userId,
      share: share,
    });
    data = data.createParticipant;
    let successful: boolean = data != null;
    let id: string = "-1";

    if (successful) {
      id = data._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async getUserActivities(userId: string): Promise<GetUserActivitiesResponse> {
    let data: any = await this.client.request(queries.COMPLETE_USER_BY_ID, {
      userId: userId,
    });
    data = data.findUserByID;
    let successful: boolean = data != null;
    let activities: Array<Activity> = [];
    let id: string = "-1";
    if (successful) {
      id = data._id.toString();
      data.activities.data.forEach((element: any) => {
        if (element != null) {
          let activity: Activity = {
            id: element._id.toString(),
            name: element.name,
            type: element.type,
            userId: element.user._id.toString(),
            expenseId:
              element.expense != null ? element.expense._id.toString() : "-1",
            debtId: element.debt != null ? element.debt._id.toString() : "-1",
          };
          activities.push(activity);
        }
      });
    }
    return {
      success: successful,
      userId: id,
      activities: activities,
    };
  }

  async deleteActivity(id: string): Promise<DeleteActivityResponse> {
    let data = await this.client.request(mutations.DELETE_ACTIVITY, {
      activityId: id,
    });
    data = data.deleteActivity;
    let response: DeleteActivityResponse = {
      success: false,
      id: "-1",
    };
    if (data != null) {
      response.success = true;
      response.id = data._id.toString();
    }
    return response;
  }
  async deleteExpense(id: string): Promise<DeleteExpenseResponse> {
    let data = await this.client.request(mutations.DELETE_EXPENSE, {
      expenseId: id,
    });
    data = data.deleteExpense;
    let response: DeleteExpenseResponse = {
      success: false,
      id: "-1",
    };
    if (data != null) {
      response.success = true;
      response.id = data._id.toString();
    }
    return response;
  }
  async deleteDebt(id: string): Promise<DeleteDebtResponse> {
    let data = await this.client.request(mutations.DELETE_DEBT, { debtId: id });
    data = data.deleteDebt;
    let response: DeleteDebtResponse = {
      success: false,
      id: "-1",
    };
    if (data != null) {
      response.success = true;
      response.id = data._id.toString();
    }
    return response;
  }

  async deleteParticipant(id: string): Promise<DeleteParticipantResponse> {
    let data = await this.client.request(mutations.DELETE_PARTICIPANT, {
      participantId: id,
    });
    data = data.deleteParticipant;
    let response: DeleteParticipantResponse = {
      success: false,
      id: "-1",
    };
    if (data != null) {
      response.success = true;
      response.id = data._id.toString();
    }
    return response;
  }

  async getUser(id: string): Promise<GetUserResponse> {
    let data: any = await this.client.request(queries.COMPLETE_USER_BY_ID, {
      userId: id,
    });
    data = data.findUserByID;
    let successful: boolean = data != null;
    let user: User | undefined | null = undefined;
    if (successful) {
      user = {
        id: data._id.toString(),
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        credit: data.credit,
        balance: data.balance,
        friends: data.friends,
        groups: data.groups,
        activities: data.activities,
      };
    }

    return {
      success: successful,
      user: user,
    };
  }

  async updateUser(user: User): Promise<UpdateUserResponse> {
    let data: any = await this.client.request(mutations.UPDATE_USER, {
      userId: user.id,
      name: user.name,
      password: user.password,
      email: user.email,
      phone: user.phone,
    });
    data = data.updateUser;
    let successful: boolean = data != null;
    let updatedUser: User | undefined | null = undefined;
    if (successful) {
      updatedUser = {
        id: data._id.toString(),
        name: data.name,
        password: data.password,
        email: data.email,
        phone: data.phone,
        credit: data.credit,
        balance: data.balance,
        friends: data.friends,
        groups: data.groups,
        activities: data.activities,
      };
    }
    return {
      success: successful,
      user: updatedUser,
    };
  }

  async getUserFriends(userId: string): Promise<GetUserFriendsResponse> {
    let data: any = await this.client.request(queries.USER_FRIENDS, {
      userId: userId,
    });
    data = data.findUserByID;
    const successful = data != null;
    const id = successful ? data._id.toString() : "-1";
    let friends: Array<Friend> = [];
    if (successful) {
      let friend: Friend;
      data.friends.data.forEach((element: any) => {
        if (element != null) {
          friend = {
            id: element._id.toString(),
            friendId: element.friendId,
            friendName: element.friendName,
          };
        }
        friends.push(friend);
      });
    }

    return {
      success: successful,
      userId: id,
      friends: friends,
    };
  }

  async getFilteredUser(
    emailOrPhone: string,
    inputType: InputType
  ): Promise<UserByFilterResponse> {
    let data: any;
    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: emailOrPhone,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: emailOrPhone,
      });
      data = data.UserByPhone;
    }
    let successful: boolean = data != null;
    let fetchedUser: User = {
      id: "-1",
      name: "",
      email: "",
      phone: "",
      password: "",
      credit: 0,
      balance: 0,
      friends: [],
      groups: [],
      activities: [],
    };
    if (successful) {
      fetchedUser = {
        ...fetchedUser,
        id: data._id.toString(),
        name: data.name,
      };
    }

    return {
      success: successful,
      user: fetchedUser,
    };
  }

  async addFriend(
    friendId: string,
    friendName: string,
    userId: string
  ): Promise<AddFriendResponse> {
    let friends = await this.client.request(queries.USER_FRIENDS, {
      userId: userId,
    });
    friends = friends.findUserByID.friends;
    let response: AddFriendResponse = {
      success: false,
      friend: {
        id: "-1",
        friendName: "",
        friendId: "-1",
      },
    };

    if (friends != null) {
      let friendExists: boolean = false;
      friends.data.forEach((element: any) => {
        if (element.friendId.toString() == friendId) {
          friendExists = true;
        }
      });

      if (!friendExists) {
        let data: any = await this.client.request(mutations.ADD_FRIEND, {
          friendId: friendId,
          friendName: friendName,
          userId: userId,
        });
        data = data.createFriend;
        let successful: boolean = data != null;
        if (successful) {
          response = {
            success: successful,
            friend: {
              id: data._id.toString(),
              friendId: data.friendId,
              friendName: data.friendName,
            },
          };
        }
      } else {
        ToastAndroid.show(
          `${friendName} به دوستان شما اضافه شده‌است.`,
          ToastAndroid.LONG
        );
      }
    }

    return response;
  }

  async deleteFriend(id: string): Promise<DeleteFriendResponse> {
    let data: any = await this.client.request(mutations.DELETE_FRIEND, {
      id: id,
    });
    data = data.deleteFriend;
    let successful: boolean = data != null;
    let deleteId: string = successful ? data._id.toString() : "-1";

    return {
      success: successful,
      id: deleteId,
    };
  }

  //#region auth
  async login(
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<LoginResponse> {
    let data: any;
    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: email,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: phone,
      });
      data = data.UserByPhone;
    }

    let successful: boolean = data != null;
    let user: User | null = null;
    if (successful) {
      let responsePassword = data.password;
      if (responsePassword === password) {
        user = {
          id: data._id.toString(),
          name: data.name != null ? data.name : "",
          password: data.password,
          email: data.email != null ? data.email : "",
          phone: data.phone != null ? data.phone : "",
          credit: data.credit != null ? data.credit : 0,
          balance: data.balance != null ? data.balance : 0,
          friends: [],
          groups: [],
          activities: [],
        };
      }
    }

    return {
      success: successful,
      user: user,
    };
  }

  async signUp(
    name: string,
    email: string,
    phone: string,
    password: string,
    inputType: InputType
  ): Promise<SignUpResponse> {
    let data = await this.client.request(mutations.ADD_USER, {
      name: name,
      password: password,
      email: inputType == InputType.Email ? email : null,
      phone: inputType == InputType.Phone ? phone : null,
    });
    data = data.createUser;
    let successful: boolean = data != null;
    let user: User | null = null;
    if (successful) {
      user = {
        id: data._id.toString(),
        name: data.name,
        password: data.password,
        email: inputType == InputType.Email ? data.email : "",
        phone: inputType == InputType.Phone ? data.phone : "",
        credit: 0,
        balance: 0,
        friends: [],
        groups: [],
        activities: [],
      };
    }

    return {
      success: successful,
      user: user,
    };
  }

  async identifyAccount(
    email: string,
    phone: string,
    inputType: InputType
  ): Promise<IdentifyAccountResponse> {
    let data: any;

    if (inputType == InputType.Email) {
      data = await this.client.request(queries.USER_BY_EMAIL, {
        emailTxt: email,
      });
      data = data.UserByEmail;
    } else {
      data = await this.client.request(queries.USER_BY_PHONE, {
        phoneNumber: phone,
      });
      data = data.UserByPhone;
    }

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
  async verifyCode(email: string, phone: string, code: string): Promise<void> {}

  generateCode(email: string, phone: string, inputType: InputType): void {
    ToastAndroid.show("کد فعال‌سازی: ۱۲۳۴۵", ToastAndroid.LONG);
  }

  async cancelCode(email: string, phone: string): Promise<void> {}

  async resetPassword(
    id: string,
    password: string
  ): Promise<ResetPasswordResponse> {
    let data = await this.client.request(mutations.UPDATE_USER_PASSWORD, {
      userId: id,
      password: password,
    });
    data = data.updateUser;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
  //#endregion auth
  //#region group
  async addGroup(
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<AddGroupResponse> {
    let data = await this.client.request(mutations.ADD_Group, {
      name: name,
      creatorId: creator,
      membersIds: members,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.createGroup;
    let successful: boolean = data != null;
    let id: string = "-1";
    if (successful) {
      id = data._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<UpdateGroupResponse> {
    let data = await this.client.request(mutations.UPDATE_GROUP, {
      groupId: groupId,
      name: name,
      creator: creator,
      members: members,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.updateGroup;
    let successful: boolean = data != null;
    let id: string = "-1";
    if (successful) {
      id = data._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }
  async deleteGroup(groupId: string): Promise<DeleteGroupResponse> {
    let data = await this.client.request(mutations.DELETE_GROUP, {
      groupId: groupId,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.deleteGroup;
    let successful: boolean = data != null;
    let id: string = "-1";
    if (successful) {
      id = data._id.toString();
    }

    return {
      success: successful,
      id: id,
    };
  }

  async getGroupById(groupId: string): Promise<GetGroupByIdResponse> {
    let data = await this.client.request(queries.GET_GROUP_BY_ID, {
      groupId: groupId,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findGroupByID;

    let successful: boolean = data != null;
    let id: string = "-1";
    let group: Group = {
      id: "-1",
      name: "",
      creatorId: "-1",
      membersIds: [],
      activitiesIds: [],
    };
    if (successful) {
      id = data._id.toString();
      let activityIds: Array<string> = [];
      let memberIds: Array<string> = [];
      if (data.members.length > 0) {
        data.members.data.forEach((element: any) => {
          memberIds.push(element._id.toString());
        });
      }
      if (data.activities.length > 0) {
        data.members.data.forEach((element: any) => {
          activityIds.push(element._id.toString());
        });
      }
      group = {
        id: id,
        name: data.name,
        creatorId: data.creator._id.toString(),
        membersIds: memberIds,
        activitiesIds: activityIds,
      };
    }

    return {
      id: id,
      success: successful,
      group: group,
    };
  }

  async getUserGroups(userId: string): Promise<GetUserGroupsResponse> {
    let data = await this.client.request(queries.GET_USER_GROUPS, {
      userId: userId,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findUserByID;
    const successful = data != null;
    const id = successful ? data._id.toString() : "-1";
    let groups: Array<Group> = [];
    if (successful) {
      let group: Group;
      data.groups.data.forEach((element: any) => {
        let groupMembers: Array<string> = [];
        if (element != null) {
          element.members.data.forEach((member: any) => {
            groupMembers.push(member._id.toString());
          });
          let groupActivities: Array<string> = [];
          element.activities.data.forEach((activity: any) => {
            groupActivities.push(activity._id.toString());
          });
          group = {
            id: element._id.toString(),
            name: element.name,
            creatorId: element.creator._id,
            membersIds: groupMembers,
            activitiesIds: groupActivities,
          };
          groups.push(group);
        }
      });
    }
    return {
      userId: data != null ? data._id.toString() : "-1",
      success: data != null,
      groups: groups,
    };
  }

  //#endregion group
}
export const Api = new GraphQLApi();
