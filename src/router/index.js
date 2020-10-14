import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Application rotues
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
      requiresAuth: true,
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
    path: "/home",
    name: "home",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/home/Home.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/ProfileSettings.vue"),
  },
  {
    path: "/payment/:userId?",
    name: "Payment",
    component: () => import("../views/Payment.vue"),
  },
  {
    path: "/landing",
    name: "Landing",
    component: () => import("../views/desktop/Home.vue"),
  },
];

// Setup a new router instance using our routes
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Check if they are trynig to acess a protected page
// If so then check they are authenticated
// Else redirect to login
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("authenticated")) {
      next();
      return;
    }

    next("/login");
  } else {
    next();
  }
});

export default router;
