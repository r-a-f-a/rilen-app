import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import client from './client'
import NProgress from 'vue-nprogress'
import VueScript from 'vue-script2'

Vue.config.productionTip = false
Vue.use(NProgress)
Vue.use(VueScript)
const nprogress = new NProgress({parent: '.nprogress-container'})
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  client,
  nprogress,
  VueScript,
  template: '<App/>',
  components: { App }
})
