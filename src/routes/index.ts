import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../pages/Home/HomeIndex.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../pages/About/AboutIndex.vue')
        }
    ]
})

export default router
