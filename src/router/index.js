import { createRouter, createWebHistory } from 'vue-router'
import HomeKimi from '../HomeKimi.vue'
import Quotes from  '../Quotes.vue'
import Ferrari from  '../Ferrari.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeKimi
  },
  {
    path: '/quotes',
    name: 'Quotes',
    component: Quotes
  },
  {
    path: '/ferrari',
    name: 'Ferrari',
    component: Ferrari
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router