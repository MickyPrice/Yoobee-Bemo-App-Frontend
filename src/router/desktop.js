import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Application rotues
const routes = [
  {
    path: "/chat",
    name: "chat",
    meta: {
      requiresAuth: true,
    },
    component: () => import("../views/desktop/Chats.vue"),
    children: [
      {
        name: "channel",
        path: ":channelId",
        component: () => import("../views/desktop/Chat.vue")
      }
    ],
  },
  {
    path :'*',
    component: () => import("../views/desktop/Landing.vue")
  }
];

// Setup a new router instance using our routes
const desktopRouter = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Check if they are trynig to acess a protected page
// If so then check they are authenticated
// Else redirect to login
desktopRouter.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("authenticated")) {
      next();
      return;
    }

    next("/");
  } else {
    next();
  }
});

export default desktopRouter;
