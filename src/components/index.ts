import { App } from "vue";
import VCarousel from "./Carousel";

const plugin = {
    ...VCarousel,
    install(app: App) {
        app.component("VCarousel", VCarousel);
    },
};

export default plugin;
