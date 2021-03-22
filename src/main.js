import { createApp } from "vue";
import router from "./routes";
import store from "./store";
import App from "./App.vue";
// 全局样式
import "styles/index.scss"
// 为不支持promise的浏览器提供pormise方法
import "es6-promise/auto";
// 使用element
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

createApp(App).use(ElementPlus).use(router).use(store).mount("#app");