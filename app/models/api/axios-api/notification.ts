import { Response } from "../../responses/axios/response";

export interface notificationApi {
  pushNotification(FCMToken: string): Promise<Response<null>>;
  remindMember(message: string, contactId: string): Promise<Response<any>>;
}
