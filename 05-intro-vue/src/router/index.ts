import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomePage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
     {
      path: '/about/:id',
      name: 'about-detail',
      component: () => import('@/views/AboutDetail.vue'),
    },
    // ruta por default
      { path: '/:pathMatch(.*)*', component:()=> import('@/views/NotFoundPage.vue') },
  ],
})

export default router
