import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import list from '../components/List.vue'
import page from '../components/Page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: page
  },
  {
    path: '/list',
    name: 'List',
    component: list
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
