import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import soon from './components/soon.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/soon',
    name: 'Soon',
    component: soon   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
