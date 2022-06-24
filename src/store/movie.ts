import { Cast, Credits, MovieDetails, MovieInfo } from "./../api/models/Movie";
import { Genre, Movie } from "~/api/models/Movie";
import { repositories } from "~/composables/UtilFunctions";

export const useMovie = defineStore("Movie", {
    // ========================================================================== //
    //     State
    state: () => ({
        Genres: { genres: [] } as unknown as Genre,
        Movies: { results: [] } as unknown as Movie,
        Details: {} as unknown as MovieDetails,
        Credits: { cast: [] } as unknown as Credits,
        Page: 1 as number,
        release_start_date: "2022-01-01",
        release_finish_date: "2023-01-01",
    }),

    // ========================================================================== //
    //     Getters
    getters: {
        GET_GENRES: (state) => state.Genres.genres,

        GET_MOVIES: (state) => state.Movies.results,

        GET_DETAILS: (state) => state.Details,

        GET_CAST(state): Cast[] {
            let cast = [];
            cast = state.Credits.cast.sort(
                (a: Cast, b: Cast) => b.popularity - a.popularity
            );
            return cast.slice(0, 10);
        },

        GET_REMAINING_CAST_NUMBER(state): number {
            return state.Credits.cast.length - 10;
        },

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

        GET_PARAMS: (state) => ({
            page: state.Page,
            "release_date.gte": state.release_start_date,
            "release_date.lte": state.release_finish_date,
        }),
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
        async getMovies() {
            const res = await repositories()
                .movies()
                .getMovies(this.GET_PARAMS);
            this.Movies = res.data;
        },
        //Single Movie Details
        async getDetails(id: string) {
            const res = await repositories().movies().getDetails(id);
            this.Details = res.data;
        },
        // Movie Credits
        async getCredits(id: string) {
            const res = await repositories().movies().getCredits(id);
            this.Credits = res.data;
        },
    },
});
