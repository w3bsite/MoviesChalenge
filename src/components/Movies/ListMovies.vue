<template>
    <div class="ccontainer row md:max-w-90%">
        <!-- Movies List Including Their Genres -->
        <div v-for="(movie, i) in store.GET_MOVIES_GENRES" :key="i" class="col-12 col-sm-6 col-md-4 pa-2">
            <q-card class="md:flex md:flex-row h-100%">
                <!-- Movie Thumbnail -->
                <q-img class="col" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"></q-img>
                <!-- Movie Info -->
                <div class="col md:flex md:flex-col ">
                    <!--  Title -->
                    <q-card-section class="text-weight-medium md:min-h-25% mb-auto">
                        {{ movie.title }}
                    </q-card-section>
                    <!-- Short Description -->
                    <!-- <q-card-section class="text-weight-light mt-auto">
                        {{ movie.overview.substring(0, 70) + '...' }}
                    </q-card-section> -->
                    <!--  ReleaseDate -->
                    <q-card-section class="row pl-18px mb-4 py-0">
                        <q-icon size="20px" color="grey-9" name="calendar_today" class="mr-2"></q-icon>
                        <div class="text-grey-8">{{ movie.release_date }}</div>
                    </q-card-section>

                    <!--  Genres Array-->
                    <q-card-section class="row pt-0">
                        <div v-for="(genre, i) in movie.genres" :key="i" class="row ml-2px my-auto">
                            <div class="mr-2px  text-grey-14"> {{ genre }}
                            </div>
                            <q-icon size="8px" color="grey-9" class=" my-auto " name="circle"
                                v-if="movie && movie.genres && movie.genres.length > i + 1" />
                        </div>
                    </q-card-section>
                </div>
            </q-card>
        </div>
    </div>
    <!-- Pagination -->
    <div class="ccontainer column md:max-w-80% row mt-30 mb-20">
        <ListPagination></ListPagination>
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
