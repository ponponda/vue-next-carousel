import {
    defineComponent,
    h,
    provide,
    Comment,
    VNode,
    withDirectives,
    watch,
    computed,
    reactive,
} from "vue";
import { CarouselContext, CarouselSymbol } from "./types";
import ResizeObserver from "../utils/resize-observer";
import Swipe from "../directives/swipe";
import Slide from "./Slide";
import Pager from "./Pager";
import Counter from "./Counter";

export default /*#__PURE__*/ defineComponent({
    name: "VCarousel",
    props: {
        autoplay: {
            type: Boolean,
            default: true,
        },
        autoplayTimeout: {
            type: Number,
            default: 3000,
        },
        loop: {
            type: Boolean,
            default: true,
        },
        minSwipeDistance: {
            type: Number,
            default: 100,
        },
        slideRemainRatio: {
            type: Number,
            default: 0.2,
            validator: (v: number) => v >= 0 && v < 1,
        },
        transitionDuration: {
            type: Number,
            default: 300,
        },
    },
    setup(props, { slots }) {
        const {
            element: carouselRef,
            contentRect: carouselRect,
        } = new ResizeObserver();
        const source =
            slots.default?.().filter((e) => e.type !== Comment) || [];
        const sourceLength = source.length;
        const loopSource = ([] as VNode[]).concat(source);

        const config =
            props.loop && sourceLength > 1
                ? reactive({
                      slideRemainRatio: props.slideRemainRatio,
                      startIdx: 1,
                      endIdx: sourceLength + 1,
                      touchMovement: 0,
                      selectedIdx: 1,
                      transitionDuration: props.transitionDuration,
                  })
                : reactive({
                      slideRemainRatio: props.slideRemainRatio,
                      startIdx: 0,
                      endIdx: sourceLength - 1,
                      touchMovement: 0,
                      selectedIdx: 0,
                      transitionDuration: props.transitionDuration,
                  });

        let autoplay: NodeJS.Timer | undefined;

        const windowWidth = computed(() => carouselRect.value?.width || 0);
        const blankWidth = computed(
            () => (windowWidth.value * config.slideRemainRatio) / 2
        );
        const imgWidth = computed(
            () => windowWidth.value * (1 - config.slideRemainRatio)
        );

        const slideTranslate = computed(
            () =>
                -1 * imgWidth.value * config.selectedIdx +
                blankWidth.value +
                config.touchMovement
        );

        const carouselCtx: CarouselContext = {
            getSelectedIndex: () => {
                if (props.loop) {
                    if (config.selectedIdx === 0) return sourceLength - 1;
                    else if (config.selectedIdx === config.endIdx) return 0;
                }

                return config.selectedIdx - config.startIdx;
            },
            getSourceLength: () => sourceLength,
            getImgWidth: () => imgWidth.value,
        };

        provide(CarouselSymbol, carouselCtx);

        const stopAutoplay = () => {
            if (autoplay) clearInterval(autoplay);
        };

        const slideTo = (idx: number) => {
            config.transitionDuration = props.transitionDuration;

            if (idx > config.endIdx) {
                config.selectedIdx = config.startIdx;
            } else if (idx < 0) {
                config.selectedIdx = config.endIdx;
            } else {
                config.selectedIdx = idx;
            }
        };
        const slideToNext = () => {
            slideTo(config.selectedIdx + 1);
        };
        const slideToPrev = () => {
            slideTo(config.selectedIdx - 1);
        };

        if (props.loop && sourceLength > 1) {
            loopSource.unshift(source[sourceLength - 1]);
            loopSource.push(source[0]);
        }

        if (props.autoplay && sourceLength > 1) {
            autoplay = setInterval(() => {
                slideToNext();
            }, props.autoplayTimeout);
        }

        watch(
            () => config.selectedIdx,
            (current) => {
                setTimeout(() => {
                    config.transitionDuration = 0;
                    if (props.loop) {
                        if (current === config.endIdx) {
                            config.selectedIdx = config.startIdx;
                        } else if (current === 0) {
                            config.selectedIdx = config.endIdx - 1;
                        }
                    }
                }, 200);
            }
        );

        return () =>
            h(
                "div",
                { class: "v-carousel", ref: carouselRef },
                loopSource.length > 0
                    ? [
                          withDirectives(
                              h(
                                  "div",
                                  {
                                      class: "v-carousel-slides-wrapper",
                                      style: {
                                          "transition-duration":
                                              config.transitionDuration + "ms",
                                          transform: `translate3d(${slideTranslate.value}px, 0, 0)`,
                                      },
                                  },
                                  loopSource.map((e, idx) =>
                                      h(
                                          Slide,
                                          {
                                              active:
                                                  idx === config.selectedIdx,
                                          },
                                          () => e
                                      )
                                  )
                              ),
                              [
                                  [
                                      Swipe,
                                      {
                                          watch: true,
                                          onStart: () => {
                                              config.transitionDuration = 0;
                                              stopAutoplay();
                                          },
                                          onRight: ({
                                              xDiff,
                                          }: {
                                              xDiff: number;
                                          }) => {
                                              config.touchMovement = xDiff;
                                          },
                                          onLeft: ({
                                              xDiff,
                                          }: {
                                              xDiff: number;
                                          }) => {
                                              config.touchMovement = xDiff;
                                          },
                                          onEnd: ({
                                              xDiff,
                                          }: {
                                              xDiff: number;
                                          }) => {
                                              const pass =
                                                  Math.abs(xDiff) >
                                                  props.minSwipeDistance;

                                              config.transitionDuration =
                                                  props.transitionDuration;
                                              config.touchMovement = 0;
                                              if (pass) {
                                                  if (xDiff > 0) {
                                                      slideToPrev();
                                                  } else {
                                                      slideToNext();
                                                  }
                                              }
                                          },
                                      },
                                  ],
                              ]
                          ),
                          h(Pager, {
                              onClick: (v: number) => {
                                  slideTo(v + 1);
                                  stopAutoplay();
                              },
                          }),
                          h(Counter),
                      ]
                    : []
            );
    },
});
