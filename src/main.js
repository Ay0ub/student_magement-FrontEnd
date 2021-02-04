import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'
import axios from './plugins/axios.js'
import store from './store'
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
