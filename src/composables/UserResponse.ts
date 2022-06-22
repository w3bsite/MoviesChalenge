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
                    console.log(error.response.data.error);
                    message = error.response.data.message;
                    this.RespondAlert(title, message);
                    throw Error;
                }
                this.RespondAlert(title, (message = error.toString()));
            }
        );
        this.request.use((config: any) => {
            config.params = config.params || {};
            config.params["api-key"] = "f62f750b70a8ef11dad44670cfb6aa57";
            return config;
        });
    }
}
