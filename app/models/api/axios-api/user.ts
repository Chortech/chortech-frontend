import { Token } from "../../other/axios/Token";
import { Response } from "../../responses/axios/response";
import { UserProfileResponse } from "../../responses/axios/user";

export interface userApi {
  getUserProfile(): Promise<Response<UserProfileResponse>>;
}
