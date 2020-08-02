import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main.vue";
import Help from "../views/Help.vue";
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
      path: "/help",
      name: "Help",
      component: Help,
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings,
      beforeEnter: authGuard

    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});

export default router;
