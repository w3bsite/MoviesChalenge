<template>
    <div class="row">
        <q-card v-for="(movie, i) in store.GET_MOVIES_GENRES" :key="i" class="pa-4 col-4">
            <q-card-section>
                {{ movie.original_title }}
            </q-card-section>
            <q-card-section>
                <div v-for="(genre, i) in movie.genres" :key="i" class="flex flex-inline ml-2">
                    <div class="mr-2"> {{ genre }}</div>
                    <q-icon size="8px" class="ma-auto" name="circle"
                        v-if="movie && movie.genres && movie.genres.length > i + 1" />
                </div>
            </q-card-section>
        </q-card>
        <!-- <q-card v-for="(genre, i) in store.GET_GENRES" :key="i">
            {{ genre }}
        </q-card> -->
    </div>
</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()

store.getGenres()
store.getMovies()
</script>
