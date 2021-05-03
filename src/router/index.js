import Vue from 'vue'
import VueRouter from 'vue-router'
import BarMenuP from '../components/BarMenuP.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BarMenuP',
    component: BarMenuP
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
