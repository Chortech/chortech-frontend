import { Token } from "../models/other/axios/Token";
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
    token?: Token;
  };
  Profile: undefined;
  EditProfile: undefined;
  ResetPassword: {
    email: string;
    phone: string;
    inputType: InputType;
    parentScreen: string;
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
  };
};
