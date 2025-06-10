import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import EntrepriseView from '../views/EntrepriseView.vue';
// import StageView from '../views/StageView.vue';
// import CompetencesView from '../views/CompetencesView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  // { path: '/entreprise', name: 'entreprise', component: EntrepriseView },
  // { path: '/stage', name: 'stage', component: StageView },
  // { path: '/competences', name: 'competences', component: CompetencesView },
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
      return { top: 0 };
    }
  }
});
