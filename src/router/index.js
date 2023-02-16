import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import TestPage from "../views/TestPage.vue"
import NotFound from "../views/404Page.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/test",
            name: "test",
            component: TestPage
        },
        {
            path: "/:catchall(.*)*",
            component: NotFound
        }
   
    ]
})

export default router