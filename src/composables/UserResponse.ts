import Repository from "./Repository";
export default class UserResponce extends Repository {
    constructor() {
        super();
        let title = "";
        let message = "";
        this.response.use(
            (response: any) => {
                return response;
            },
            (error: any) => {
                if (error.response && error.response.data) {
                    if (error.response.data.message)
                        message = error.response.data.message;
                    if (error.response.data.errors)
                        message = error.response.data.errors[0];
                    this.RespondAlert(title, message);
                    throw Error;
                }
                this.RespondAlert(title, (message = error.toString()));
            }
        );
        this.request.use((config: any) => {
            config.params = config.params || {};
            config.params["api_key"] = "f62f750b70a8ef11dad44670cfb6aa57";
            return config;
        });
    }
}
