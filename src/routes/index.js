import { createRouter, createWebHashHistory } from "vue-router";
import routing from "./routing";

const router = createRouter({
    // h5模式 createWebHistory(),
  history: createWebHashHistory(),
  routes: routing,
});

export default router;
