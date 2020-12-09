import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'
import firebase from 'firebase/app'
import * as fbService from './services/firebase.service'
import './assets/app.sass'

Vue.use(BootstrapVue)

Vue.prototype.$firebase = firebase

fbService.fBInit()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
