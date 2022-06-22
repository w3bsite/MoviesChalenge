import { createApp } from "vue";
import App from "./App.vue";
import { Quasar, Dialog, LocalStorage } from "quasar";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
// Import icon libraries
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
import "animate.css";
// Tailwind Setup
import "uno.css";

// @ts-ignore
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
// Auto Routes Generator
const routes = setupLayouts(generatedRoutes);
// Router
export const router = createRouter({
    history: createWebHistory(),
    routes,
});
// App Instance
const myApp = createApp(App);
// Store Inctance
const pinia = createPinia();
myApp.use(pinia);
myApp.use(router);

// Dialog And LocalStorage plugins
myApp.use(Quasar, {
    plugins: { Dialog, LocalStorage },
});

// Mounting myApp instance
myApp.mount("#app");
