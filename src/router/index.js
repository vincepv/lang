import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import DashBoard from '@/pages/DashBoard.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
