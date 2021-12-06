import { createRouter, createWebHistory } from 'vue-router'

// 开启历史模式
// vue2中使用 mode: history 实现
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
        {
            path: '/home',
            component: () => import('../views/Home.vue'),
            children: [
                {
                    path: '/home',
                    name: 'my',
                    component: () => import('../views/My.vue')
                },
                {
                    path: '/receipt',
                    name: 'receipt',
                    component: () => import('../views/Receipt.vue')
                },
                {
                    path: '/release',
                    name: 'release',
                    component: () => import('../views/Release.vue')
                },
                {
                    path: '/warehouse',
                    name: 'warehouse',
                    component: () => import('../views/Warehouse.vue')
                },
                {
                    path: '/report',
                    name: 'report',
                    component: () => import('../views/Report.vue')
                },
            ]
        },
        {
            path: '/contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/content/:id',
            component: () => import('../views/Content.vue')
        },
        {
            path: '/receipt',
            component: () => import('../views/Receipt.vue')
        },
        {
            path: '/release',
            component: () => import('../views/Release.vue')
        },
        {
            path: '/warehouse',
            component: () => import('../views/Warehouse.vue')
        },
        {
            path: '/report',
            component: () => import('../views/Report.vue')
        },
        {
            path: '/my',
            component: () => import('../views/My.vue')
        },
    ]
})

export default router