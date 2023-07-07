import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";

const app = createApp(App).use(createPinia());

app.mount("#app");
