import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Taskflow from '../views/Taskflow.vue'
import Create from '../views/Create.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/taskflow/:id',
    name: 'Taskflow',
    component: Taskflow
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
