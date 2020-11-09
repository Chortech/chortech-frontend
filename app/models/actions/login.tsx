export interface ILoginRequestState {
  type: String;
  emailOrPhone: string;
  password: string;
}

interface IResponse {
  id: number;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
