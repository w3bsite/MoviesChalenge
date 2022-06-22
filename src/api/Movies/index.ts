import { Movie } from "./../models/Movie";
import { AxiosResponse } from "axios";
import Repository from "@/api/Repository";

const url = "/discover/movie";
export default class Movies extends Repository {
    async getMovies(): Promise<AxiosResponse<Movie>> {
        return await this.axios.get(url);
    }
}
