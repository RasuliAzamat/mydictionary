import { createRouter, createWebHistory } from "vue-router";
import Add from "../views/Add.vue";
import Find from "../views/Find.vue";
import Dictionary from "../views/Dictionary.vue";

const routes = [
    {
        path: '/',
        component: Add,
    },
    {
        path: '/find',
        component: Find
    },
    {
        path: '/dictionary',
        component: Dictionary
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router