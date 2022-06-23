import { MovieInfo } from "./../api/models/Movie";
import { Genre, Movie } from "~/api/models/Movie";
import { repositories } from "~/composables/UtilFunctions";

export const useMovie = defineStore("Movie", {
    // ========================================================================== //
    //     State
    state: () => ({
        Genres: { genres: [] } as unknown as Genre,
        Movies: { results: [] } as unknown as Movie,
    }),

    // ========================================================================== //
    //     Getters
    getters: {
        GET_GENRES: (state) => state.Genres.genres,
        GET_MOVIES: (state) => state.Movies.results,
        GET_MOVIES_GENRES(state): MovieInfo[] {
            const movies = [] as any;
            for (const movie of this.GET_MOVIES) {
                movie.genres = movie.genre_ids.map((id) => {
                    return this.GET_GENRES.find((g) => g.id == id)?.name;
                });
                movies.push(movie);
            }
            return movies;
        },
    },

    // ========================================================================== //
    //     Actions
    actions: {
        // Genres For Usage With Movies
        async getGenres() {
            const res = await repositories().movies().getGenres();
            this.Genres = res.data;
        },
        // Movies List (Discover)
        async getMovies(page?: number) {
            const res = await repositories().movies().getMovies(page);
            this.Movies = res.data;
        },
    },
});
