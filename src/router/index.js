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
        {
            path: '/404',
            component: () => import('../views/404.vue')
        },
    ]
})

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (process.env.NODE_ENV != 'development' && navigator.userAgent != "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1" ) {
        if(to.path==='/404')
        {
            next();
        }
        else
        {
            next('/404');
        }
        
    }
    else if (to.path === '/login') {
        next();
    } else {
        let token = sessionStorage.getItem('token');
        console.log(token)
        console.log(navigator.userAgent)
        // if (token === null || token === '') {
        //     next('/login');
        // } else {
        //     //其他页面
        //     next();
        // }
        next();
    }
});

export default router