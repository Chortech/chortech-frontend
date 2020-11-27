import { request, GraphQLClient, gql } from "graphql-request";
import { AuthApi } from "../../../models/api/auth";
import { GroupApi } from "../../../models/api/group";
import { LoginResponse } from "../../../models/responses/login";
import { SignUpResponse } from "../../../models/responses/signUp";
import * as queries from "./queries";
import * as mutations from "./mutations";
import {
  addGroupResponse,
  deleteGroupResponse,
  getGroupByIdResponse,
  GetUserGroupsResponse,
  updateGroupResponse,
} from "../../../models/responses/group";
import { API_URL, API_KEY } from "../../../../local_env_vars";
import { InputType } from "../../../utils/inputTypes";
import { IdentifyAccountResponse } from "../../../models/responses/identify";
import { ToastAndroid } from "react-native";
import { ResetPasswordResponse } from "../../../models/responses/resetPassword";
import { supportsResultCaching } from "@apollo/client/cache/inmemory/entityStore";
import { ActivityApi } from "../../../models/api/activity";
import { Debt } from "../../../models/other/Debt";
import { Expense } from "../../../models/other/Expense";
import { FriendsApi } from "../../../models/api/friend";
import { FriendsResponse } from "../../../models/responses/getFriends";
import { Friend } from "../../../models/other/Friend";
import { Group } from "../../../models/other/Group";
import { FriendsRequest } from "../../../models/requests/getFriends";
import { UserByFilterResponse } from "../../../models/responses/userByFilter";
import { User } from "../../../models/other/User";
import { AddFriendResponse } from "../../../models/responses/addFriend";
import { DeleteFriendResponse } from "../../../models/responses/deleteFriend";
import { UserApi } from "../../../models/api/user";
import { FetchUserResponse } from "../../../models/responses/getUser";
import { UpdateUserResponse } from "../../../models/responses/updateUser";
import {
  DELETE_GTOUP_REQUEST,
  GET_USER_GROUPS_REQUEST,
  GET_USER_GROUPS_RESPONSE,
  UPDATE_GROUP_REQUEST,
} from "../../../store/actions/types";
import { AddActivityResponse } from "../../../models/responses/addActivityResponse";
import { AddExpenseResponse } from "../../../models/responses/addExpenseResponse";
import { Participant } from "../../../models/other/Participant";
import { AddParticipantResponse } from "../../../models/responses/addParticipantResponse";
import { AddDebtResponse } from "../../../models/responses/addDebtResponse";

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
      if (type == "Debt") {
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
      if (type == "Debt") {
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
    description: string,
    category: string,
    totalPrice: string
  ): Promise<AddExpenseResponse> {
    let data: any = await this.client.request(mutations.ADD_EXPENSE, {
      description: description,
      category: category,
      totalPrice: totalPrice,
    });
    data = data.createExpense;
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

  async addDebt(
    description: string,
    category: string,
    debt: number,
    creditorId: string
  ): Promise<AddDebtResponse> {
    let data: any = await this.client.request(mutations.ADD_DEBT, {
      description: description,
      category: category,
      debt: debt,
      creditorId: creditorId,
    });
    data = data.createDebt;
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

  async getUser(id: string): Promise<FetchUserResponse> {
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

  async getUserFriends(userId: string): Promise<FriendsResponse> {
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
        friend = {
          id: element._id.toString(),
          friendId: element.friendId,
          friendName: element.friendName,
        };
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
    friends = friends.findUserByID;
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

        console.log(
          "add friend response data: " + JSON.stringify(data, undefined, 2)
        );
        let successful: boolean = data != null;
        let fetchedFriend: Friend = {
          id: "-1",
          friendId: "-1",
          friendName: "",
        };
        if (successful) {
          fetchedFriend = {
            id: data._id.toString(),
            friendId: data.friendId,
            friendName: data.friendName,
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

    let responsePassword = data != null ? data.password : "";

    return {
      id: data != null ? data._id.toString() : "-1",
      success: password === responsePassword,
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

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
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
  ): Promise<addGroupResponse> {
    let data = await this.client.request(mutations.ADD_Group, {
      name: name,
      creator: creator,
      members: members,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findGroupByID;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }

  async updateGroup(
    groupId: string,
    name: string,
    creator: string,
    members: Array<string>
  ): Promise<updateGroupResponse> {
    let data = await this.client.request(UPDATE_GROUP_REQUEST, {
      groupId: groupId,
      name: name,
      creator: creator,
      members: members,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findGroupByID;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }
  async deleteGroup(groupId: string): Promise<deleteGroupResponse> {
    let data = await this.client.request(DELETE_GTOUP_REQUEST, {
      groupId: groupId,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findGroupByID;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
    };
  }

  async getGroupById(groupId: string): Promise<getGroupByIdResponse> {
    let data = await this.client.request(queries.GET_GROUP_BY_ID, {
      groupId: groupId,
    });
    data = JSON.parse(JSON.stringify(data));
    data = data.findGroupByID;

    return {
      id: data != null ? data._id.toString() : "-1",
      success: data != null,
      group: data.group,
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
      });
    }
    return {
      userId: data != null ? data._id.toString() : "-1",
      success: data != null,
      groups: groups,
    };
  }

  // async addParticipant()

  //#endregion group
}
export const Api = new GraphQLApi();
