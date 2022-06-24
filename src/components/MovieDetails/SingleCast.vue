<template>

    <!-- Credits -->
    <q-card flat bordered class="flex text-weight-light text-grey-10 my-10 pa-6 text-14px">
        <div v-for="(actor, i) in cast" :key="i">
            <div class="mr-2">
                {{ actor.name }},
            </div>
        </div>
        <span>And {{ ' ' + remainingCastNumber + ' ' }} More</span>
    </q-card>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
const props = defineProps({
    id: String
})
// Movie Store
const store = useMovie()

const cast = computed(() => store.GET_CAST)
const remainingCastNumber = computed(() => store.GET_REMAINING_CAST_NUMBER)
// Calling Store Actions To Fetch Contents

store.getCredits(props.id as any)
</script>
