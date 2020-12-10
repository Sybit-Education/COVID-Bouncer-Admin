import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import { userService } from '@/services/user.service'
import RoomOverview from '@/views/RoomOverview'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: guard
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if (userService.isLoggedIn()) {
        next({ name: 'Home' })
      } else {
        next()
      }
    },
    meta: { displayNavbar: false }
  },
  {
    path: '/rooms',
    name: 'RoomOverview',
    component: RoomOverview,
    beforeEnter: guard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function guard (to, from, next) {
  if (userService.isLoggedIn()) {
    next()
  } else {
    next({ name: 'SignIn' })
  }
}

export default router
