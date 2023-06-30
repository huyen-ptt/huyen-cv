import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/pages/HomePage.vue'
import TestPage123 from '@/pages/TestPage.vue'
const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/test",
        name: "TestPage",
        component: TestPage123,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;