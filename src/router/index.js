import { createRouter, createWebHistory } from 'vue-router'
import HomeKimi from '../HomeKimi.vue'
import Quotes from  '../Quotes.vue'
import Ferrari from  '../Ferrari.vue'
import McLaren from  '../McLaren.vue'
import Lotus from  '../Lotus.vue'
import AlfaRomeo from  '../AlfaRomeo.vue'
import ChooseScuderia from  '../ChooseScuderia.vue'


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
    path: '/scuderia',
    name: 'ChooseScuderia',
    component: ChooseScuderia
  },
  {
    path: '/scuderia/ferrari',
    name: 'Ferrari',
    component: Ferrari
  },
  {
    path: '/scuderia/lotus',
    name: 'Lotus',
    component: Lotus
  },
  {
    path: '/scuderia/mclaren',
    name: 'McLaren',
    component: McLaren
  },
  {
    path: '/alfaromeo',
    name: 'Alfa Romeo',
    component: AlfaRomeo
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router