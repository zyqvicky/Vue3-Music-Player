import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/menu/find',
      children: [
        {
          path: '/menu/find',
          component: () => import('@/views/menu/MusicFind.vue')
        },
        {
          path: '/menu/video',
          component: () => import('@/views/menu/Video.vue')
        },
        {
          path: '/menu/recent',
          component: () => import('@/views/menu/PlayRecently.vue')
        },
      ]
    }
  ]
})

export default router
