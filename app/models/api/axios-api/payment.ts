import { AddPayment } from "../../responses/axios/user";
import { Response } from "../../responses/axios/response";
import { Payment } from "../../other/axios/Payment";

export interface paymentApi {
  getPayment(id: string): Promise<Response<Payment>>;
  addPayment(
    from: string,
    to: string,
    amount: number,
    paid_at: number,
    group?: string,
    notes?: string
  ): Promise<Response<AddPayment>>;
  editPayment(
    id: string,
    amount?: number,
    paid_at?: number,
    group?: string,
    notes?: string
  ): Promise<Response<Payment>>;
  deletePayment(id: string): Promise<Response<null>>;
  addComment(text: string, created_at: number, id: string): Promise<Response<null>>;
}
