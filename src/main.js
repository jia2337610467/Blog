import { createApp } from "vue";
import router from "./routes";
import store from "./store";
import App from "./App.vue";
// 全局样式
import "styles/index.scss"
import "styles/color.css"
// 为不支持promise的浏览器提供pormise方法
import "es6-promise/auto";
// 使用element

// import { Button } from 'element-plus';
const app = createApp(App);

// const element = [
//     Button,
// ];
// element.forEach(plugin => {
//     app.use(plugin)
// })
app.use(router).use(store).mount("#app");