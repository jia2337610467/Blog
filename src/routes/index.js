import { createRouter, createWebHashHistory } from "vue-router";
import routing from "./routing";

const router = createRouter({
    // h5模式 createWebHistory(),
  history: createWebHashHistory(),
  routes: routing,

  scrollBehavior(to,from,savePosition){
    if(savePosition)return savePosition;
    else return {left:0,top:0}
  }
});

export default router;
