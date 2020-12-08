import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import './assets/app.sass'
import Notifications from 'vue-notification'
import firebase from 'firebase/app'
import * as fbService from './services/firebase.service'

Vue.use(BootstrapVue)

Vue.prototype.$firebase = firebase

fbService.fBInit()

Vue.use(Notifications, { max: 5 })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
