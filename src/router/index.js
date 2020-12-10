import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import SignIn from '../views/SignIn'
import ContactReport from '@/views/ContactReport'
import { userService } from '@/services/user.service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: guard
  },
  {
    path: '/contact-report',
    name: 'ContactReport',
    component: ContactReport,
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
    }
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
