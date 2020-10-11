/** store/index.js **/
import Vue from "vue";
import Vuex from "vuex";

// VueX Store Modules
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    user: require("./modules/user"),
    chats: require("./modules/chats"),
    chat: require("./modules/chat"),
    users: require("./modules/users")
  }
});