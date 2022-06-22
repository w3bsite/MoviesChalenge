import {
    AxiosInstance,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosResponse,
} from "axios";
import axios from "axios";
import { Dialog, DialogChainObject, LocalStorage } from "quasar";

export default abstract class Repository {
    axios: AxiosInstance;
    response: AxiosInterceptorManager<AxiosResponse<any, any>>;
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    token: any;
    RespondAlert: (
        title: string | undefined,
        message: string | undefined
    ) => DialogChainObject;

    constructor() {
        const token = LocalStorage.getItem("token");
        if (token) this.token = token;
        // axios instance for config
        this.axios = axios.create({
            baseURL: "https://api.themoviedb.org/3",
            // baseURL: "http://localhost:3333",
        });

        // axios interceptor for custom error handling
        this.response = this.axios.interceptors.response;
        this.request = this.axios.interceptors.request;
        // Quasar Dialog for custom error handling
        this.RespondAlert = (
            title: string | undefined,
            message: string | undefined
        ) =>
            Dialog.create({
                title: title,
                message: message,
            });
    }
}
