import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Login,
    children: [
      {
        name: "landing",
        path: "/",
        component: () => import("../components/login/Landing.vue"),
      },
      {
        name: "login",
        path: "login",
        component: () => import("../components/login/Login.vue"),
      },
      {
        name: "signup",
        path: "signup",
        component: () => import("../components/login/Signup.vue"),
      },
    ],
  },
  {
    path: "/chat",
    name: "chatIndex",
    component: () => import("../views/chats/"),
    children: [
      {
        name: "chats",
        path: "/",
        component: () => import("../views/chats/Chats.vue"),
      },
      {
        name: "chat",
        path: ":channelId",
        component: () => import("../views/chats/Chat.vue"),
      }
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
