import Vue from 'vue'
import VueRouter from 'vue-router'
import Workbench from '../views/Workbench.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Workbench',
    component: Workbench
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router