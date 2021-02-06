import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./style/index.scss";
import "./style/font.scss";
import router from "./router";
import store from "./store";
// 解决ie白屏问题
import 'babel-polyfill'

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");