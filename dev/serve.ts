import { createApp } from "vue";
import Dev from "./serve.vue";

import VCarousel from "@/entry.esm";

const app = createApp(Dev);
app.use(VCarousel);

app.mount("#app");
