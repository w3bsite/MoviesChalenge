<template>
    <div class="row">
        MoviesList Component
    </div>
</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
store.getMovies()

</script>
