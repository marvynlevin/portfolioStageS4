import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioBookView from '../views/PortfolioBookView.vue';
import PortfolioStageView from '../views/PortfolioStageView.vue';
import ProjectView from '../views/ProjectView.vue';
import BlogView from '../views/BlogView.vue';

const routes = [
    {path: '/', name: 'home', component: HomeView},

    // RACINE PORTFOLIO BOOK
    {path: '/portfolio', name: 'portfolio', component: PortfolioBookView},

    // PROJETS
    {path: '/portfolio/projets/:slug', name: 'project', component: ProjectView},

    // RACINE PORTFOLIO STAGE
    {path: '/stage', name: 'stage', component: PortfolioStageView},

    // BLOGS
    {path: '/portfolio/blogs/:slug', name: 'blog', component: BlogView},

];

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {top: 0};
        }
    }
});
