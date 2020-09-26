import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/login/index.vue"),
    children: [
      {
        name: "landing",
        path: "/",
        component: () => import("../views/login/Landing.vue"),
      },
      {
        name: "login",
        path: "login",
        component: () => import("../views/login/Login.vue"),
      },
      {
        name: "signup",
        path: "signup",
        component: () => import("../views/login/Signup.vue"),
      },
      {
        name: "Verify",
        path: "verify",
        component: () => import("../views/login/Verify.vue"),
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
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/sendPayment",
    name: "SendPayment",
    component: () => import("../views/SendPayment.vue"),
  },
  {
    path: "/requestPayment",
    name: "RequestPayment",
    component: () => import("../views/RequestPayment.vue"),
  },
  {
    path: "/generateQR",
    name: "GenerateQR",
    component: () => import("../views/qr/Generator.vue"),
  }
  ,
  {
    path: "/readqr",
    name: "ReadQR",
    component: () => import("../views/qr/Reader.vue"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
