import Vue from 'vue'
import VueRouter from 'vue-router'
import NiewList from '../components/NewList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/NiewList',
    name: 'NiewList',
    component: NiewList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
