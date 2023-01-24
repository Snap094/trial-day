import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/layouts/Index.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: {layout: 'main'}
        }
    ]
})

export default router