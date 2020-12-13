import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/app.sass'
import Notifications from 'vue-notification'
import firebase from 'firebase/app'
import * as fbService from './services/firebase.service'

//  Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faChevronLeft, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import i18n from './i18n'

library.add(faUserSecret, faChevronLeft, faBorderAll)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.prototype.$firebase = firebase

fbService.fBInit()

Vue.use(Notifications, { max: 5 })

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
