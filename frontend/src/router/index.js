import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PortfolioBookView from '../views/PortfolioBookView.vue';
import PortfolioStageView from '../views/PortfolioStageView.vue';

import Project24hMansView from '../views/projects/Project24hMansView.vue';
import ProjectFireWatchView from "@/views/projects/ProjectFireWatchView.vue";
import ProjectLevinEnergieView from "@/views/projects/ProjectLevinEnergieView.vue";

const routes = [
    {path: '/', name: 'home', component: HomeView},

    // RACINE PORTFOLIO BOOK
    {path: '/portfolio', name: 'portfolio', component: PortfolioBookView},

    // PROJETS
    {path: '/portfolio/projets/24h-du-mans', name: '24hmans', component: Project24hMansView},
    {path: '/portfolio/projets/firewatch', name: 'firewatch', component: ProjectFireWatchView},
    {path: '/portfolio/projets/ets-levin-energie', name: 'levinenergie', component: ProjectLevinEnergieView},

    // RACINE PORTFOLIO STAGE
    {path: '/stage', name: 'stage', component: PortfolioStageView},

    // BLOGS
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
