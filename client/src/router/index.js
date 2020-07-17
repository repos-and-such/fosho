import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main.vue";
import Profile from "../views/Profile.vue";
import Settings from "../views/Settings.vue";
import About from "../views/About.vue";
import { authGuard } from "../auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      beforeEnter: authGuard

    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings,
      beforeEnter: authGuard
    },
    {
      path: "/about",
      name: "about",
      component: About,
    }
  ]
});

export default router;
