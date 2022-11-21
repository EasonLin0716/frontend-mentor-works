import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../components/Home.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:name',
    name: 'About',
    component: () => import('../components/About.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;