import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue'
import ProjectsIndex from './pages/ProjectsIndex.vue'
import AppAbout from './pages/AppAbout.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
            meta: {
                title: 'Home'
            },
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectsIndex,
            meta: {
                title: 'Projects'
            },
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout,
            meta: {
                title: 'About'
            },
        },
    ],
});

router.beforeEach(to => {
    document.title = to.meta?.title ? 'Boolfolio - ' + to.meta.title : 'Boolfolio';
})

export { router };