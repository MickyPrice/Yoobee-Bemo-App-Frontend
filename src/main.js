import Vue from 'vue'
import App from './App.vue'
import router from './router'
import desktopRouter from './router/desktop.js'
import store from './store/store'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import InputMask from 'vue-input-mask';

Vue.component('input-mask', InputMask)


Vue.config.productionTip = false

var socket = io(process.env.VUE_APP_API_URL);
Vue.use(VueSocketIOExt, socket, { store });

new Vue({
  store,
  router: router,
  InputMask,
  render: h => h(App)
}).$mount('#app');

new Vue({
  store,
  router: desktopRouter,
  InputMask,
  render: h => h(App)
}).$mount('#desktop');
