import { createApp } from "vue";
import "vant/es/toast/style";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
