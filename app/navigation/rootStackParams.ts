import { ExpenseBalance } from "../models/other/axios/Balance";
import { Item } from "../models/other/axios/Item";
import { Token } from "../models/other/axios/Token";
import { InputType } from "../utils/inputTypes";
import { Group, Member } from "../models/other/axios/Group";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  CodeVerification: {
    parentScreen: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    inputType: InputType;
    token?: Token;
  };
  Profile: undefined;
  EditProfile: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
  };
  ResetPassword: {
    email: string;
    phone: string;
    inputType: InputType;
    parentScreen: string;
  };
  CreditCardList: undefined;
  Friend: {
    id: string;
    name: string;
    image: string;
    balance: number;
    balances: ExpenseBalance[];
  };
  Group: {
    groupId: string;
  };
  EditGroup: {
    groupId: string;
  };
  AddMember: {
    groupId: string;
    members: Array<Member>;
  };
  GroupBalances: {
    groupId: string;
  };
  Activity: {
    id: string;
    activityName: string;
    category: string;
    total: string;
  };
  AddExpense: {
    parentScreen: string;
    items: Array<Item>;
    id?: string;
    description?: string;
    total?: string;
  };
  AddComment: {
    expenseId?: string;
  };
  SettleUp: {
    paymentAmount: string;
    friendId: string;
  };
};
