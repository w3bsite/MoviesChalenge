<template>
    <!-- Pagination -->
    <div class="ma-auto row">
        <q-btn flat rounded label="Previous Page" color="primary" :disable="store.Page < 2" icon="chevron_left"
            @click="(store.Page -= 1) && (changePage())" />
        <q-separator :dark="false" vertical class="mx-2" color="grey-7" />
        <q-btn flat rounded label="Next Page" color="primary" icon-right="chevron_right"
            @click="(store.Page += 1) && (changePage())" />
    </div>
    <div class="mx-auto mt-2 text-grey-7 text-weight-light">showing results
        {{ store.Page }}-{{ store.Movies.total_pages }}
    </div>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
// This Method Is For Fetching Contents Based On Page Changes
function changePage() {
    store.getMovies()
}
</script>
