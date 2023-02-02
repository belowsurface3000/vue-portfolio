import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ImpressumPage from "../views/ImpressumPage.vue";
import DatenschutzPage from "../views/DatenschutzPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage
    },
    {
        path: "/impressum",
        name: "Impressum",
        component: ImpressumPage
    },
    {
        path: "/datenschutz",
        name: "Datenschutz",
        component: DatenschutzPage
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;