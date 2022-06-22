import { repositories } from "~/composables/UtilFunctions";

export const useMovie = defineStore("Movie", {
    // ========================================================================== //
    //     State
    state: () => ({
        Movies: null as any,
    }),

    // ========================================================================== //
    //     Getters
    getters: {
        GET_MOVIES: (state) => state.Movies,
    },

    // ========================================================================== //
    //     Actions
    actions: {
        // Movies Actions
        async getMovies() {
            this.Movies = await repositories().movies().getMovies();
        },
    },
});
