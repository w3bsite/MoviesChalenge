import { Genre, Movie } from "./../models/Movie";
import { AxiosResponse } from "axios";
import Repository from "@/api/Repository";

export default class Movies extends Repository {
    // All Movies
    async getMovies(params: any): Promise<AxiosResponse<Movie>> {
        return await this.axios.get("/discover/movie", { params });
    }
    // All Genres
    async getGenres(): Promise<AxiosResponse<Genre>> {
        return await this.axios.get("/genre/movie/list");
    }
}
