import { createRouter, createWebHashHistory } from 'vue-router';
import AllFlags from '../components/AllFlags.vue';
const routes = [
  {
    path: '/',
    name: 'AllFlags',
    component: AllFlags,
  },
  {
    path: '/:name',
    name: 'FlagDetail',
    component: () => import('../components/FlagDetail.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;