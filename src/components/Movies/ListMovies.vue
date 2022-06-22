<template>
    <div class="ccontainer row md:max-w-80%">
        <!-- Movies List Including Their Genres -->
        <div v-for="(movie, i) in store.GET_MOVIES_GENRES" :key="i" class="col-12 col-sm-6 col-md-4 pa-2">
            <q-card class="md:flex md:flex-row  min-h-335px ">
                <!-- Movie Thumbnail -->

                <q-img class="col" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></q-img>

                <!-- Movie Info -->
                <div class="col flex">
                    <!--  Title -->
                    <q-card-section class="text-weight-medium">
                        {{ movie.title }}
                    </q-card-section>
                    <!-- Short Description -->
                    <q-card-section class="text-weight-light mt-auto">
                        {{ movie.overview.substring(0, 70) + '...' }}
                    </q-card-section>
                    <!--  ReleaseDate -->
                    <q-card-section class="flex-inline ml-2 mt-auto">
                        <q-icon size="20px" name="calendar_today" class="mr-2"></q-icon>
                        <div>{{ movie.release_date }}</div>
                    </q-card-section>
                    <!--  Genres Array-->
                    <q-card-section>
                        <div v-for="(genre, i) in movie.genres" :key="i" class="flex-inline ml-2 mt-auto">
                            <div class="mr-2 text-grey-14"> {{ genre }}</div>
                            <q-icon size="8px" color="grey-10" class="ma-auto" name="circle"
                                v-if="movie && movie.genres && movie.genres.length > i + 1" />
                        </div>
                    </q-card-section>
                </div>
            </q-card>
        </div>


    </div>
</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
// Calling Store Actions To Fetch Contents
store.getGenres()
store.getMovies()
</script>
