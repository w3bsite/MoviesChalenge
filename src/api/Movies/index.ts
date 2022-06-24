import { Credits, Genre, Movie, MovieDetails } from "./../models/Movie";
import { AxiosResponse } from "axios";
import Repository from "@/api/Repository";

export default class Movies extends Repository {
    // All Genres
    async getGenres(): Promise<AxiosResponse<Genre>> {
        return await this.axios.get("/genre/movie/list");
    }
    // All Movies
    async getMovies(params: any): Promise<AxiosResponse<Movie>> {
        return await this.axios.get("/discover/movie", { params });
    }
    // Single Movie By Id
    async getDetails(id: string): Promise<AxiosResponse<MovieDetails>> {
        return await this.axios.get(`/movie/${id}`);
    }
    async getCredits(id: string): Promise<AxiosResponse<Credits>> {
        return await this.axios.get(`/movie/${id}/credits`);
    }
}
