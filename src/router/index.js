import Vue from 'vue'
import VueRouter from 'vue-router'
import TextHandle from '../components/TextHandle'

Vue.use(VueRouter)

const routes = [
  // Página do Erro 404
  {
    path: '/404',
    name: 'NotFound',
    component: TextHandle
  },  
  {
    path: '*',
    redirect: '/404'
  }, 

  // Página Principal
  {
    path: '/',
    name: 'Principal',
    component: TextHandle
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router