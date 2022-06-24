<template>
    <div class="ccontainer">

        <SingleHeader v-if="!loading"></SingleHeader>

        <div class="row mt-10 " v-if="!loading">
            <!-- Poster -->
            <q-img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" class="col-12 col-md-3 rounded"
                fit="contain" v-if="movie && movie.poster_path" />
            <!-- Details -->
            <div class="col-12 col-md-9 md:pl-10 text-14px text-weight-light">
                <q-card flat bordered class="h-100% pa-4">
                    <!-- Budget -->
                    <q-card-section class="flex">
                        <div>budget</div>
                        <div class="ml-auto">${{ movie.budget }}</div>
                    </q-card-section>
                    <!-- Revenue -->
                    <q-card-section class="flex">
                        <div>Revenue</div>
                        <div class="ml-auto">${{ movie.revenue }}</div>
                    </q-card-section>
                    <!--Release Date -->
                    <q-card-section class="flex">
                        <div>Release Date</div>
                        <div class="ml-auto">{{ movie.release_date }}</div>
                    </q-card-section>
                    <!-- Runtime -->
                    <q-card-section class="flex">
                        <div>Runtime</div>
                        <div class="ml-auto">{{ movie.runtime }}</div>
                    </q-card-section>
                    <!-- Score -->
                    <q-card-section class="flex">
                        <div>Score:</div>
                        <div class="ml-auto">
                            <q-rating :model-value="movie.vote_average" icon="star_border" icon-selected="star"
                                icon-half="star_half" :max="10" no-reset readonly color="red" size="18px"
                                v-if="movie && movie.vote_average">
                            </q-rating>
                            <!-- Score Tooltip -->
                            <q-tooltip>
                                <div class="min-w-12">
                                    <span class="text-12px">
                                        {{ ' ' + movie.vote_average }} ({{ movie.vote_count + ' ' }}votes)
                                    </span>
                                </div>
                            </q-tooltip>
                        </div>
                    </q-card-section>
                    <!-- Genres -->
                    <q-card-section class="flex">
                        <div>Genres</div>
                        <div class="ml-auto flex">
                            <div v-for="(genre, i) in movie.genres" :key="i" class="ml-1">{{ genre.name + ',' }}</div>
                        </div>
                    </q-card-section>
                    <!-- IMDB Link -->
                    <q-card-section class="flex">
                        <div>IMDB Link</div>
                        <div class="ml-auto"><a :href="`https://www.imdb.com/title/${movie.imdb_id}`"
                                target="_blank">Link</a>
                        </div>
                    </q-card-section>
                    <!-- HomePage Link -->
                    <q-card-section class="flex">
                        <div>HomePage Link</div>
                        <div class="ml-auto"><a :href="movie.homepage" target="_blank">Link</a></div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <!-- Overview -->
        <q-card flat bordered class="ccontainer text-grey-10 mt-10 pa-6 min-h-30 text-16px" v-if="!loading">
            {{ movie.overview }}
        </q-card>
        <!-- Credits -->
        <div class="ccontainer" v-if="!loading">
            <SingleCast :id="(route.params.id as string)">
            </SingleCast>
        </div>
        <q-inner-loading :showing="loading" label="Please wait..." label-class="text-teal"
            label-style="font-size: 1.1em" />
    </div>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Loading
const loading = ref(true)
//Route
const route = useRoute()
// Movie Store
const store = useMovie()
const movie = computed(() => store.GET_DETAILS)
// Calling Store Actions To Fetch Contents
onMounted(async () => {
    await store.getDetails(route.params.id as string)
    loading.value = false
})



</script>
