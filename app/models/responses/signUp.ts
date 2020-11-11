export interface SignUpResponse {
  id: string;
  name: string;
  token: {
    access: string;
    expires: number;
    created: number;
  };
}

// export interface SignUpResponseState {
//   type: string;
//   response: SignUpResponse;
// }
