import { defineComponent, h, inject } from "vue";
import { CarouselContext, CarouselSymbol } from "./types";

export default /*#__PURE__*/ defineComponent({
    name: "VCarouselPager",
    emits: ["click"],
    setup(_, { emit }) {
        const carouselCtx = inject<CarouselContext>(CarouselSymbol);

        return () =>
            carouselCtx?.getSourceLength()
                ? h(
                      "div",
                      { class: "v-carousel-pager" },
                      [...Array(carouselCtx?.getSourceLength()).keys()].map(
                          (idx) =>
                              h("button", {
                                  class: {
                                      "v-carousel-current-page":
                                          carouselCtx?.getSelectedIndex() ===
                                          idx,
                                  },
                                  onClick: () => emit("click", idx),
                              })
                      )
                  )
                : null;
    },
});
