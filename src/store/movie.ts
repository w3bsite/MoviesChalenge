import { Genre, Movie } from "~/api/models/Movie";
import { repositories } from "~/composables/UtilFunctions";

export const useMovie = defineStore("Movie", {
    // ========================================================================== //
    //     State
    state: () => ({
        Movies: { page: 0, results: [] } as unknown as Movie,
        Genres: {} as unknown as Genre,
    }),

    // ========================================================================== //
    //     Getters
    getters: {
        GET_MOVIES: (state) => state.Movies.results,
    },

    // ========================================================================== //
    //     Actions
    actions: {
        // Movies List (Discover)
        async getMovies() {
            const res = await repositories().movies().getMovies();
            this.Movies = res.data;
        },
    },
});
