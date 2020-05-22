import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tutorial.vue')
  },
  {
    path: '/international',
    name: 'International',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/International.vue')
  },
  {
    path: '/listing',
    name: 'Ideal Job Offer',
    component: () => import(/* webpackChunkName: "about" */ '../views/Listing.vue')
  },
  {
    path: '/blogpost/:id',
    name: 'BlogPost',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blogpost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
