import { createRouter, createWebHashHistory } from "vue-router";
import routing from "./routing";

const router = createRouter({
  // h5模式 createWebHistory(),
  history: createWebHashHistory(),
  routes: routing,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;