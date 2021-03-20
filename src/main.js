import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./style/index.scss";
import "./style/font.scss";
import SvgIcon from './icons'
import router from "./router";
import store from "./store";
const app = createApp(App)

// 引入SvgIcon
app.use(SvgIcon)
app.use(store)
  .use(router)
  .mount("#app");