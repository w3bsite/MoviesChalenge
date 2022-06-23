<template>
    <div class="flex flex-col-reverse md:flex-row">
        <div class="mt-5 md:ma-0">
            <div class="my-auto"> Showing Results From :</div>
            <div class="mt-3">
                <q-chip>{{ date.from }}</q-chip> To <q-chip> {{ date.to }}
                </q-chip>
            </div>
        </div>
        <q-btn class="mx-auto md:ma-0 md:ml-auto md:my-auto md:max-h-10" outline icon="event" color="primary"
            label="search by realease date">
            <q-popup-proxy cover transition-show="scale" transition-hide="scale" anchor="top middle">
                <q-date mask="YYYY-MM-DD" flat bordered default-view="Years" minimal class="w-40" range
                    hint="release start date" v-model="date" />
            </q-popup-proxy>
        </q-btn>
    </div>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
const date = ref({ from: store.release_start_date, to: store.release_finish_date })
watch(date, () => store.getMovies(), { deep: true })
</script>
