import { createRouter, createWebHistory } from 'vue-router'
import InteractiveView from '@/views/InteractiveView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: InteractiveView,
    },
  ],
})

export default router
