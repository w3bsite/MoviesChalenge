import { Genre, Movie } from "./../models/Movie";
import { AxiosResponse } from "axios";
import Repository from "@/api/Repository";

export default class Movies extends Repository {
    // All Movies
    async getMovies(page?: number): Promise<AxiosResponse<Movie>> {
        return await this.axios.get("/discover/movie", {
            params: { page },
        });
    }
    // All Genres
    async getGenres(): Promise<AxiosResponse<Genre>> {
        return await this.axios.get("/genre/movie/list");
    }
}
