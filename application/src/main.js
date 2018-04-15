import Vue from 'vue'
import App from './App'
import router from './router'
import VueCookie from 'vue-cookie'
import Vuetify from 'vuetify'
import Auth from '@/components/pages/auth'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(VueCookie)
Vue.use(Vuetify)
Vue.config.productionTip = false

Auth.checkAuth()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
