import Vue from "vue";
import Router from "vue-router";
import Main from "../views/Main.vue";
import Profile from "../views/Profile.vue";
import Feedback from "../views/Feedback.vue";
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
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: authGuard
    },
    {
      path: "/feedback",
      name: "feedback",
      component: Feedback,
    }
  ]
});

export default router;
