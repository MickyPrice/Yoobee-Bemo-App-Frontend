import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

Vue.config.productionTip = false

var socket = io("http://45.76.121.221");
Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
