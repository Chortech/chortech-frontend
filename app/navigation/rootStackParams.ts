export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  CodeVerification: {
    parentScreen: string;
  };
  Profile: undefined;
  EditProfile: undefined;
  ResetPassword: undefined;
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
