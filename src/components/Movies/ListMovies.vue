<template>
    <div class="row">


        <q-card v-for="(movie, i) in store.GET_MOVIES" :key="i" class="pa-4 col-4">
            <q-card-section>
                {{ movie.original_title }}
            </q-card-section>
            <q-card-section>
                {{ movie.overview }}
            </q-card-section>
        </q-card>
    </div>
</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
store.getMovies()

</script>
