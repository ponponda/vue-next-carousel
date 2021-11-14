import { createApp } from "vue";
import App from "./App.vue";

import VCarousel from "./components";
import "./assets/app.scss";

const app = createApp(App);
app.use(VCarousel);

app.mount("#app");
