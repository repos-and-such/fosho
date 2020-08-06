import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main.vue";
import Help from "../views/Help.vue";
import Tools from "../views/Tools.vue";
import About from "../views/About.vue";
import TestPage from "../views/TestPage.vue";
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
      path: "/tools",
      name: "Tools",
      component: Tools,
      beforeEnter: authGuard
    },

    {
      path: "/testpage",
      name: "TestPage",
      component: TestPage,
    },
    {
      path: "/about",
      name: "About",
      component: About
    }
  ]
});

export default router;
