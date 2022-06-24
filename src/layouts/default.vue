<template>
  <q-layout view="hHh Lpr lff">
    <q-header class="bg-blue-14 text-white">
      <!-- NavBar -->
      <q-toolbar>
        <q-toolbar-title @click="goHome" class="cursor-pointer">Movies Db</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <!-- PageWrapper -->
      <q-page class="z-30 transition-duration-1s">
        <div class="z-30 px-3 mt-10">
          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts" setup>
const router = useRouter()
function goHome() {
  router.push('/')
}
</script>
<style lang="scss">
* {
  transition: all 0.5s;
}
</style>
