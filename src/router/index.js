import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import SignIn from '../views/SignIn'
import AdminCredentials from '@/views/AdminCredentials'
import MasterPassword from '../views/setup/MasterPassword'
import Location from '../views/setup/Location'
import Building from '@/views/setup/Building'

import { userService } from '@/services/user.service'
import { setupService } from '@/services/setup.service'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: async (to, from, next) => {
      if (userService.isLoggedIn()) {
        if (await setupService.isSetupCompleted()) {
          next()
        } else {
          next({ name: 'MasterPassword' })
        }
      } else {
        next({ name: 'SignIn' })
      }
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { displayNavbar: false },
    beforeEnter: (to, from, next) => {
      if (userService.isLoggedIn()) {
        next({ name: 'Home' })
      } else {
        next()
      }
    }
  },
  {
    path: '/setup/master-password',
    name: 'MasterPassword',
    component: MasterPassword,
    meta: { displayNavbar: false },
    beforeEnter: isLoggedIn
  },
  {
    path: '/setup/location',
    name: 'Location',
    component: Location,
    meta: { displayNavbar: false },
    beforeEnter: isLoggedIn
  },
  {
    path: '/setup/building',
    name: 'Building',
    component: Building,
    props: true,
    meta: { displayNavbar: false },
    beforeEnter: isLoggedIn
  },
  {
    path: '/administrators',
    name: 'AdminCredentials',
    component: AdminCredentials,
    beforeEnter: isLoggedIn
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function isLoggedIn (to, from, next) {
  if (userService.isLoggedIn()) {
    next()
  } else {
    next({ name: 'SignIn' })
  }
}

export default router
