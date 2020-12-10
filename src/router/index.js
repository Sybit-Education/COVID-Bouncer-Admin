import Vue from 'vue'
import VueRouter from 'vue-router'
import MasterPassword from '../views/setup/MasterPassword'
import Location from '../views/setup/Location'
import SignIn from '../views/SignIn'
import { userService } from '@/services/user.service'
import Building from '@/views/setup/Building'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MasterPassword',
    component: MasterPassword,
    beforeEnter: guard
  },
  {
    path: '/setup/location',
    name: 'Location',
    component: Location
  },
  {
    path: '/setup/building',
    name: 'Building',
    component: Building,
    props: true
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
