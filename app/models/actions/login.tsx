export interface ILoginRequestState {
  type: String;
  email: string;
  phone: string
  password: string;
}

interface IResponse {
  id: number;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
