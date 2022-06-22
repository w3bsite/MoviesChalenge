<template>
    <!-- Pagination -->
    <div class="ma-auto row">
        <q-btn flat rounded label="Previous Page" color="primary" :disable="page < 2" icon="chevron_left"
            @click="(page -= 1) && (changePage())" />
        <q-separator :dark="false" vertical class="mx-2" color="grey-7" />
        <q-btn flat rounded label="Next Page" color="primary" icon-right="chevron_right"
            @click="(page += 1) && (changePage())" />
    </div>
    <div class="mx-auto mt-2 text-grey-7 text-weight-light">showing results
        {{ page }}-20
    </div>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';

// Page Number
const page = ref(1)
// Movie Store
const store = useMovie()
// This Method Is For Fetching Contents Based On Page Changes
function changePage() {
    store.getMovies(page.value)
}
</script>
