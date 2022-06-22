import App from "../components/pages/app.vue";
// @ts-ignore
import generatedRoutes from "~pages";
const routes = [
    {
        path: "/",
        component: App,
        children: generatedRoutes,
    },
];
export default routes;
