import { createApp } from "vue";
import router from "./routes";
import store from "./store";
import App from "./App.vue";
// 全局样式
import "styles/index.scss"
// 为不支持promise的浏览器提供pormise方法
import "es6-promise/auto";

createApp(App).use(router).use(store).mount("#app");