<template>
    <div class="flex flex-col-reverse md:flex-row">
        <div class="mt-5 md:mt-auto">

            <div class="my-auto" v-if="date.from && date.to">
                Showing Results :</div>

            <div class="my-auto" v-else> Showing All Results

            </div>
            <div class="mt-3">
                <span v-if="date.from">From:</span>
                <q-chip clickable class="hover:bg-white" v-if="date.from" @click="store.release_start_date = null"> {{
                        date.from
                }}
                    <q-icon size="18px" name="close" />
                </q-chip>
                <span v-if="date.to">To:</span>
                <q-chip clickable class="hover:bg-white" v-if="date.to" @click="store.release_finish_date = null"> {{
                        date.to
                }}
                    <q-icon size="18px" name="close" />
                </q-chip>

            </div>
        </div>

        <q-expansion-item dense icon="date_range" label="Advance Search" caption="Date Range"
            class="sm:mx-auto md:ma-0 md:ml-auto md:min-w-250px">
            <div class="pa-2">
                <q-input outlined rounded dense v-model="store.release_start_date" label="from">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy anchor="top right" ref="qDateProxy" cover transition-show="scale"
                                transition-hide="scale">
                                <q-date v-model="store.release_start_date" mask="YYYY-MM-DD" flat bordered
                                    default-view="Years" minimal class="w-40" hint="release start date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
                <q-input outlined dense rounded v-model="store.release_finish_date" class="mt-1" label="to">
                    <template v-slot:append>
                        <q-icon name="event" class="cursor-pointer">
                            <q-popup-proxy anchor="top right" ref="qDateProxy" cover transition-show="scale"
                                transition-hide="scale">
                                <q-date v-model="store.release_finish_date" mask="YYYY-MM-DD" flat bordered
                                    default-view="Years" minimal class="w-40" hint="release start date">
                                    <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                    </div>
                                </q-date>
                            </q-popup-proxy>
                        </q-icon>
                    </template>
                </q-input>
            </div>

        </q-expansion-item>


    </div>

</template>
<script lang="ts" setup>
import { useMovie } from '~/store/movie';
// Movie Store
const store = useMovie()
const date = ref({
    from: computed(() => store.release_start_date),
    to: computed(() => store.release_finish_date)
})

watch(date, () => store.getMovies(), { deep: true })
</script>
