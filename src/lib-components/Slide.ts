import { defineComponent, h, inject } from "vue";
import { CarouselContext, CarouselSymbol } from "./types";

export default /*#__PURE__*/ defineComponent({
    name: "VCarouselSlide",
    props: {
        active: Boolean,
    },
    setup(props, { slots }) {
        const carouselCtx = inject<CarouselContext>(CarouselSymbol)!;
        return () =>
            h(
                "div",
                {
                    class: props.active
                        ? "v-carousel-slide-active"
                        : "v-carousel-slide",
                    style: {
                        flex: `0 0 ${carouselCtx.getImgWidth() + "px"}`,
                    },
                },
                slots.default?.()
            );
    },
});
