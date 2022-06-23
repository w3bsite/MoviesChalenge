<template>
    <q-card flat bordered class="pa-2 flex flex-col-reverse md:flex-row">
        <!-- Back Button -->
        <div class="my-auto pa-4">
            <q-btn color="primary" outline rounded icon="arrow_back" label="home" @click="router.back" />
        </div>
        <!-- Title & Taglines -->
        <q-card-section>
            <div class="text-weight-medium">{{ movie.title }}</div>
            <div class="text-weight-light mt-2">{{ movie.tagline }}</div>
        </q-card-section>
    </q-card>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Router
const router = useRouter()
// Movie Store
const store = useMovie()
const movie = computed(() => store.GET_DETAILS)
</script>
