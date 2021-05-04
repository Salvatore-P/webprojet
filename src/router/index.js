import Vue from 'vue'
import VueRouter from 'vue-router'
import BarMenuP from '../components/BarMenuP.vue'
import { authGuard } from "../auth/authGuard";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BarMenuP',
    component: BarMenuP,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
