import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/options.vue'),
    },
    {
      path: '/options',
      name: 'options',
      component: () => import('../views/options.vue'),
    },
    {
      path: '/sidepanel',
      name: 'sidepanel',
      component: () => import('../views/sidepanel.vue'),
    },
  ],
})

export default router
