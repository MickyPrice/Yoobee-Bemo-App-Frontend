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
        name: "verify",
        path: "verify",
        component: () => import("../views/login/Verify.vue"),
      },
    ],
  },
  {
    path: "/chat",
    name: "chatIndex",
    meta: {
      requiresAuth: true
    },
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
    meta: {
      requiresAuth: true
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/home",
    name: "Home",
    meta: {
      requiresAuth: true
    },
    component: () =>
    import("../views/home/Home.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
    import("../views/Logout.vue"),
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
    path: "/settings",
    name: "Settings",
    component: () => import("../views/ProfileSettings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("authenticated")) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
});

export default router;