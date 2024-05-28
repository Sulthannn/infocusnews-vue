import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "Dashboard" */ '../views/Dashboard.vue')
    },
    {
        path: '/berita',
        name: 'berita.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/berita/Index.vue')
    },
    {
        path: '/createberita',
        name: 'berita.createberita',
        component: () => import( /* webpackChunkName: "createberita" */ '../views/berita/CreateBerita.vue')
    },
    {
        path: '/editberita/:id',
        name: 'berita.editberita',
        component: () => import( /* webpackChunkName: "editberita" */ '../views/berita/EditBerita.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router