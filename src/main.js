import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'

Vue.config.productionTip = false

var socket = io("http://localhost:3000");
Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
