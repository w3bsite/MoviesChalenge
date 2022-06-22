import { Genre, Movie } from "./../models/Movie";
import { AxiosResponse } from "axios";
import Repository from "@/api/Repository";

export default class Movies extends Repository {
    async getMovies(): Promise<AxiosResponse<Movie>> {
        return await this.axios.get("/discover/movie");
    }

    async getGenres(): Promise<AxiosResponse<Genre>> {
        return await this.axios.get("/genre/movie/list");
    }
}
