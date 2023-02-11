import { createRouter, createWebHistory } from 'vue-router';

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/movies',
            component: () => import('../views/Movies.vue')
        },
        {
            path: '/movies/:id',
            component: () => import('../views/DetailMovie.vue')
        },
        {
            path: '',
            redirect: '/movies'
        }
    ]
});

export default routes;