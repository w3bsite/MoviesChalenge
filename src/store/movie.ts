import { repositories } from "~/composables/UtilFunctions";

export const useMovie = defineStore("Movie", {
    // ========================================================================== //
    //     State
    state: () => ({
        Res: { results: [] } as any,
    }),

    // ========================================================================== //
    //     Getters
    getters: {
        GET_MOVIES: (state) => state.Res.results,
    },

    // ========================================================================== //
    //     Actions
    actions: {
        // Movies Actions
        async getMovies() {
            const res = await repositories().movies().getMovies();
            this.Res = res.data;
        },
    },
});
