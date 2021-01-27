import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_PAYMENTS_URL } from "../../../../local_env_vars";
import { paymentApi } from "../../../models/api/axios-api/payment";
import { Response } from "../../../models/responses/axios/response";
import { Token } from "../../../models/other/axios/Token";
import { AddPayment, EditPayment, UserPayment } from "../../../models/responses/axios/user";

export class PaymentAPI implements paymentApi {
    client: AxiosInstance;

    constructor(token: Token) {
        this.client = axios.create({
            baseURL: SERVER_PAYMENTS_URL,
        });

        this.client.interceptors.request.use(function (config) {
            if (token != undefined && token != null) {
                config.headers["Authorization"] = `Bearer ${token.access}`;
            }
            return config;
        });
    }

    async getPayment(id: string): Promise<Response<UserPayment>> {
        let result: Response<UserPayment> = {
            success: false,
            status: -1,
        };

        return result;
    }

    async addPayment(
        from: string,
        to: string,
        amount: number,
        paid_at: number,
        group?: string,
        notes?: string
    ): Promise<Response<AddPayment>> {
        let result: Response<AddPayment> = {
            success: false,
            status: -1,
        };

        return result;
    }

    async editPayment(
        id: string,
        amount?: number,
        paid_at?: number,
        group?: string,
        notes?: string
    ): Promise<Response<EditPayment>> {
        let result: Response<EditPayment> = {
            success: false,
            status: -1,
        };

        return result;
    }

    async deletePayment(id: string): Promise<Response<null>> {
        let result: Response<null> = {
            success: false,
            status: -1,
        };

        return result;
    }

    async addComment(text: string, created_at: number, id: string): Promise<Response<null>> {
        let result: Response<null> = {
            success: false,
            status: -1,
        };

        return result;
    }
}