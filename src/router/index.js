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
    path: "/sendPayment",
    name: "SendPayment",
    component: () => import("../views/SendPayment.vue"),
  },
  {
    path: "/requestPayment",
    name: "RequestPayment",
    component: () => import("../views/RequestPayment.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
