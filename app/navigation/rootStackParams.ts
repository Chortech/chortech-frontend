import { InputType } from "../utils/inputTypes";

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
  };
  Profile: undefined;
  EditProfile: undefined;
  ResetPassword: {
    email: string;
    phone: string;
    inputType: InputType;
  };
  CreditCardList: undefined;
  Friend: {
    id: string;
    friendName: string;
    ImageUrl: string;
  };
  Group: {
    id: string;
    groupName: string;
    ImageUrl: string;
  };
  Activity: {
    id: string;
    activityName: string;
    activityType: string;
    expenseId?: string;
    debtId?: string;
  };
};
