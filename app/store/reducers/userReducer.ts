import createReducer from "../../lib/createReducer";
import { Action } from "../../models/actions/action";
import { Activity } from "../../models/other/axios/Activity";
import * as activity from "../../models/other/axios/Activity";
import { ExpenseBalance, GroupBalance } from "../../models/other/axios/Balance";
import { Expense } from "../../models/other/axios/Expense";
import { Friend } from "../../models/other/axios/Friend";
import { Group, Member } from "../../models/other/axios/Group";
import { Payment } from "../../models/other/axios/Payment";
import { IUserState } from "../../models/reducers/default";
import { Response } from "../../models/responses/axios/response";
import {
  AddFriend,
  UserProfile,
  AddExpense,
  ExpenseComments,
  UploadImage,
  EditProfile,
  FriendBalance,
  GetGroupInfo,
  GroupExpenses,
  GroupMembersBalances,
  RemoveGroupMember,
} from "../../models/responses/axios/user";
import { InputType } from "../../utils/inputTypes";
import { log } from "../../utils/logger";
import * as types from "../actions/types";

const initialState: IUserState = {
  isLoggedIn: true,
  loading: false,
  id: "-1",
  token: {
    access: "",
    created: 0,
    expires: 0,
  },
  name: "",
  password: "",
  email: "",
  phone: "",
  picture: "",
  authInputType: InputType.None,
  friends: [],
  groups: [],
  activities: [],
  expenses: [],
  payment: {
    id: "",
    from: {
      id: "",
      name: "",
      email: "",
      phone: "",
      picture: "",
      balance: 0,
    },
    to: {
      id: "",
      name: "",
      email: "",
      phone: "",
      picture: "",
      balance: 0,
    },
    amount: 0,
    paid_at: 0,
    group: {
      id: "",
      name: "",
      creator: "",
      picture: "",
      createdAt: 0,
      updatedAt: 0,
      members: [],
      balance: 0,
      expenses: []
    },
    notes: "",
    comments: []
  },
  myCreditCards: [],
  otherCreditCards: [],
  imageUri: "",
  currentGroup: {
    id: "-1",
    name: "",
    creator: "",
    createdAt: -1,
    picture: "",
    updatedAt: -1,
  },
  currentFriend: {
    id: "-1",
  },
  currentActivity: {
    action: activity.Action.Added,
    involved: [],
    object: {
      id: "-1",
      name: "",
      type: activity.Type.Expense,
    },
    subject: {
      id: "-1",
      name: "",
      type: activity.Type.Expense,
    },
  },
  currentExpense: {
    id: "-1",
    description: "",
    paid_at: -1,
    total: 0,
  },
};

export const userReducer = createReducer(initialState, {
  [types.GET_USER_PROFILE_RESPONSE](
    state: IUserState,
    action: Action<Response<UserProfile>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.name = response.name;
      state.email = response.email;
      state.phone = response.phone;
      state.picture = response.picture;
      state.imageUri = response.picture;
    }
    return state;
  },
  [types.EDIT_USER_PROFILE_RESPONSE](
    state: IUserState,
    action: Action<Response<EditProfile>>
  ): IUserState {
    const email = action.payload.response?.email != undefined ? action.payload.response.email : "";
    const phone = action.payload.response?.phone != undefined ? action.payload.response.phone : "";
    return {
      ...state,
      name: action.payload.response?.name!,
      picture: action.payload.response?.picture!,
      email: email,
      phone: phone,
    };
  },
  [types.UPLOAD_IMAGE_RESPONSE](
    state: IUserState,
    action: Action<Response<UploadImage>>
  ): IUserState {
    let imageUrl: string =
      action.payload.response?.url != undefined ? action.payload.response.url : "";
    return { ...state, imageUri: imageUrl };
  },
  [types.GET_USER_EXPENSES_RESPONSE](
    state: IUserState,
    action: Action<Response<Expense[]>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.expenses = response;
    }
    return state;
  },
  [types.GET_USER_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<Response<Expense>>
  ): IUserState {
    const expense = action.payload.response;
    if (expense != undefined) {
      const index = state.expenses.findIndex((ex) => ex.id == expense.id);
      if (index > -1) {
        state.expenses[index].participants =
          expense?.participants != undefined ? expense.participants : [];
      }
    }
    return state;
  },
  [types.ADD_EXPENSE_RESPONSE](
    state: IUserState,
    action: Action<Response<AddExpense>>
  ): IUserState {
    return state;
  },
  [types.EDIT_EXPENSE_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.DELETE_EXPENSE_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.GET_EXPENSE_COMMENTS_RESPONSE](
    state: IUserState,
    action: Action<Response<ExpenseComments>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      const index = state.expenses.findIndex((expense) => expense.id == response.expenseId);
      if (index > -1) {
        state.expenses[index].comments = action.payload.response?.comments;
      }
    }
    return state;
  },
  [types.ADD_EXPENSE_COMMENT_RESPONSE](
    state: IUserState,
    action: Action<Response<null>>
  ): IUserState {
    return state;
  },
  [types.GET_USER_GROUPS_RESPONSE](
    state: IUserState,
    action: Action<Response<Group[]>>
  ): IUserState {
    return {
      ...state,
      groups: action.payload.response != undefined ? action.payload.response : [],
    };
  },
  [types.GET_GROUP_INFO_RESPONSE](state: IUserState, action: Action<Response<Group>>): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let index = state.groups.findIndex((group) => group.id == response.id);
      if (index > -1) {
        state.groups[index] = {
          ...state.groups[index],
          id: response.id,
          name: response.name,
          picture: response.picture,
          creator: response.creator,
          members: response.members,
        };
        state.currentGroup = state.groups[index];
      }
    }
    return state;
  },
  [types.ADD_GROUP_RESPONSE](state: IUserState, action: Action<Response<Group>>): IUserState {
    return state;
  },
  [types.UPDATE_GROUP_RESPONSE](state: IUserState, action: Action<Response<Group>>): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let index = state.groups.findIndex((group) => group.id == response.id);
      if (index > -1) {
        state.groups[index] = response;
      }
    }
    return state;
  },
  [types.DELETE_GROUP_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.ADD_FRIEND_TO_GROUP_RESPONSE](
    state: IUserState,
    action: Action<Response<Group>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let index = state.groups.findIndex((group) => group.id == response.id);
      if (index > -1) {
        state.groups[index] = response;
      }
    }
    return state;
  },
  [types.LEAVE_GROUP_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.REMOVE_MEMBER_RESPONSE](
    state: IUserState,
    action: Action<Response<RemoveGroupMember>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      if (response.group != undefined) {
        let index = state.groups.findIndex((group) => group.id == response.group?.id);
        if (index > -1) {
          state.groups[index] = response.group;
        }
      }
    }
    return state;
  },
  [types.GET_USER_FRIENDS_RESPONSE](
    state: IUserState,
    action: Action<Response<Friend[]>>
  ): IUserState {
    const response = action.payload.response;
    return {
      ...state,
      friends: response != undefined ? response : [],
    };
  },
  [types.ADD_FRIEND_RESPONSE](state: IUserState, action: Action<Response<AddFriend>>): IUserState {
    return {
      ...state,
      friends: action.payload.response!.friends,
    };
  },
  [types.DELETE_USER_FRIEND_RESPONSE](
    state: IUserState,
    action: Action<Response<Friend[]>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.friends = response;
    }
    return state;
  },
  [types.INVITE_FRIEND_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.GET_USER_ACTIVITIES_RESPONSE](
    state: IUserState,
    action: Action<Response<Activity[]>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.activities = response;
    }
    return state;
  },
  [types.GET_FRIENDS_BALANCE_RESPONSE](
    state: IUserState,
    action: Action<Response<FriendBalance[]>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined || response != null) {
      const balances: FriendBalance[] = response;
      for (let i = 0; i < state.friends.length; i++) {
        state.friends[i].balance = 0;
        state.friends[i].balances = [];
        let index = balances.findIndex((balance) => balance.other == state.friends[i].id);
        if (index > -1) {
          state.friends[i].balance = balances[index].balance;
        }
      }
    }
    return state;
  },
  [types.GET_FRIEND_BALANCE_RESPONSE](
    state: IUserState,
    action: Action<Response<FriendBalance>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let balances: ExpenseBalance[] = response.balances != undefined ? response.balances : [];
      let index = state.friends.findIndex((friend) => friend.id == response.other);
      if (index > -1) {
        state.friends[index].balances = balances;
      }
    }
    return state;
  },
  [types.GET_GROUPS_BALANCES_RESPONSE](
    state: IUserState,
    action: Action<Response<GroupBalance[]>>
  ): IUserState {
    if (action.payload.response != undefined) {
      let response = action.payload.response;
      state.groups.forEach((group) => {
        let index = response.findIndex((balance) => balance.id == group.id);
        if (index > -1) {
          group.balance = response[index].balance;
        }
      });
    }
    return state;
  },
  [types.GET_GROUP_EXPENSES_RESPONSE](
    state: IUserState,
    action: Action<Response<GroupExpenses>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let index = state.groups.findIndex((group) => group.id == response.group.id);
      if (index > -1) {
        state.groups[index].expenses = response.expenses;
        if (state.currentGroup != undefined) {
          state.currentGroup.expenses = state.groups[index].expenses;
        }
      }
    }

    return state;
  },
  [types.GET_GROUP_MEMBERS_BALANCES_RESPONSE](
    state: IUserState,
    action: Action<Response<GroupMembersBalances>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      let index = state.groups.findIndex((group) => group.id == response.groupId);
      if (index > -1) {
        state.groups[index].members?.forEach((member: Member) => {
          let i = response.membersBalances.findIndex((balance) => balance.id == member.id);
          if (i > -1) {
            member.balances = response.membersBalances[i].balances;
            member.totalBalance = 0;
            response.membersBalances[i].balances.forEach((balance) => {
              if (member.totalBalance != undefined) {
                member.totalBalance += balance.balance != undefined ? balance.balance : 0;
              }
            });
          }
        });
        state.currentGroup.members = state.groups[index].members;
      }
    }
    return state;
  },
  [types.GET_USER_PAYMENT_RESPONSE](
    state: IUserState,
    action: Action<Response<Payment>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.payment = response;
    }
    return state;
  },
  [types.ADD_PAYMENT_RESPONSE](
    state: IUserState,
    action: Action<Response<Payment>>
  ): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.payment = response;
    }
    return state;
  },
  [types.EDIT_PAYMENT_RESPONSE](state: IUserState, action: Action<Response<Payment>>): IUserState {
    const response = action.payload.response;
    if (response != undefined) {
      state.payment = response;
    }
    return state;
  },
  [types.DELETE_PAYMENT_RESPONSE](state: IUserState, action: Action<Response<null>>): IUserState {
    return state;
  },
  [types.LOADING_ENABLED](state: IUserState, action: Action<any>): IUserState {
    return {
      ...state,
      loading: true,
    };
  },
  [types.LOADING_DISABLED](state: IUserState, action: Action<any>): IUserState {
    return {
      ...state,
      loading: false,
    };
  },
});
