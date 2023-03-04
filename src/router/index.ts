import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import { useUxStore } from '@/stores';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/About.vue')
    }
  ]
});

router.beforeEach((to, from) => {
  const uxStore = useUxStore();
  uxStore.setDisplayType('gameLauncher');
});
export default router;
