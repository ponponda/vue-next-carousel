import { defineComponent, h, inject } from "vue";
import { CarouselContext, CarouselSymbol } from "./types";

export default /*#__PURE__*/ defineComponent({
    name: "VCarouselCounter",
    setup() {
        const carouselCtx = inject<CarouselContext>(CarouselSymbol);

        return () =>
            carouselCtx?.getSourceLength()
                ? h(
                      "div",
                      {
                          class: "v-carousel-counter",
                      },
                      `${carouselCtx.getSelectedIndex() +
                          1}/${carouselCtx?.getSourceLength()}`
                  )
                : null;
    },
});
