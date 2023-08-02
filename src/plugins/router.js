import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonsView from '@/views/PokemonsView.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/',
    component: PokemonsView 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router