<template>
    <div>
        <SingleHeader></SingleHeader>
    </div>

    <q-card flat bordered class="mt-10">
        <q-card-section class="flex">
            <div>budget:</div>
            <div class="ml-auto">{{ movie.budget }}</div>
        </q-card-section>
    </q-card>
</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
//Route
const route = useRoute()
// Movie Store
const store = useMovie()
const movie = computed(() => store.GET_DETAILS)
// Calling Store Actions To Fetch Contents
store.getDetails(route.params.id as string)

</script>
