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
