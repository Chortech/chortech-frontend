import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { SERVER_PAYMENTS_URL } from "../../../../local_env_vars";
import { paymentApi } from "../../../models/api/axios-api/payment";
import { Response } from "../../../models/responses/axios/response";
import { Token } from "../../../models/other/axios/Token";
import { AddPayment, EditPayment, UserPayment } from "../../../models/responses/axios/user";
import { log } from "../../../utils/logger";

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

        try {
            let response: AxiosResponse = await this.client.get(`/${id}`);

            if (response.status == 200) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            } 
            log("get payment api result");
            log(result);
        } catch (e) {
            log("get payment api error");
            if (e.isAxiosError) {
                const error: AxiosError = e as AxiosError;
                result.status = error.response?.status != undefined ? error.response?.status : -1;
                log(error.response?.data);
            } else {
                log(e.response);
            }
        }

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

        try {
            let response: AxiosResponse = await this.client.post("", {
                from: from,
                to: to,
                amount: amount,
                paid_at: paid_at,
                group: group,
                notes: notes
            });

            if (response.status == 201) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            }
            log("add payment api result");
            log(result);
        } catch (e) {
            log("add payment api error");
            if (e.isAxiosError) {
                const error: AxiosError = e as AxiosError;
                result.status = error.response?.status != undefined ? error.response?.status : -1;
                log(error.response?.data);
            } else {
                log(e.response);
            }
        }

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

        try {
            let response: AxiosResponse = await this.client.put(`/${id}`, {
                amount: amount,
                paid_at: paid_at,
                group: group,
                notes: notes
            });

            if (response.status == 200) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            }
            log("edit payment api result");
            log(result);
        } catch (e) {
            log("edit payment api error");
            if (e.isAxiosError) {
                const error: AxiosError = e as AxiosError;
                result.status = error.response?.status != undefined ? error.response?.status : -1;
                log(error.response?.data);
            } else {
                log(e.response);
            }
        }

        return result;
    }

    async deletePayment(id: string): Promise<Response<null>> {
        let result: Response<null> = {
            success: false,
            status: -1,
        };

        try {
            let response: AxiosResponse = await this.client.delete(`/${id}`);

            if (response.status == 204) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            }
            log("delete payment api result");
            log(result);
        } catch (e) {
            log("delete payment api error");
            if (e.isAxiosError) {
                const error: AxiosError = e as AxiosError;
                result.status = error.response?.status != undefined ? error.response?.status : -1;
                log(error.response?.data);
            } else {
                log(e.response);
            }
        }

        return result;
    }

    async addComment(text: string, created_at: number, id: string): Promise<Response<null>> {
        let result: Response<null> = {
            success: false,
            status: -1,
        };

        try {
            let response: AxiosResponse = await this.client.post(`/${id}/comments`, {
                text: text,
                created_at: created_at
            });

            if (response.status == 201) {
                result = {
                    success: true,
                    status: response.status,
                    response: response.data,
                };
            } else {
                result.status = response.status;
            }
            log("add comment api result");
            log(result);
        } catch (e) {
            log("add comment api error");
            if (e.isAxiosError) {
                const error: AxiosError = e as AxiosError;
                result.status = error.response?.status != undefined ? error.response?.status : -1;
                log(error.response?.data);
            } else {
                log(e.response);
            }
        }

        return result;
    }
}