import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Chats from "../views/Chat/Chats.vue";

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
        name: "verify",
        path: "login/verify",
        component: () => import("../components/login/verify.vue"),
      },
      {
        name: "signup",
        path: "signup",
        component: () => import("../components/login/Signup.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },{
    path: "/chats",
    name: "chats",
    component: Chats,
    children: [
      {
        name: "viewchats",
        path: "/",
        component: () => import("../views/Chat/ListChats.vue"),
      },
      // {
      //   name: "chat",
      //   path: "chat",
      //   component: () => import("../components/login/Login.vue"),
      // }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
