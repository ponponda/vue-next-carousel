import { shallowMount } from "@vue/test-utils";
import { h } from "vue";
import VCarousel from "../../../src/components/Carousel";

describe("Carousel Component", () => {
    it("should register 0 slide", () => {
        const wrapper = shallowMount(
            {
                template: "<v-carousel><!--<img />--></v-carousel>",
            },
            {
                global: {
                    stubs: {
                        "v-carousel": VCarousel,
                    },
                },
            }
        );

        expect(wrapper.html()).toMatchSnapshot();
    });

    it("should register slides and have default props", () => {
        const wrapper = shallowMount(VCarousel, {
            slots: {
                default: [h("img")],
            },
        });

        expect(
            wrapper.find(".v-carousel-slides-wrapper").exists()
        ).toBeTruthy();
    });

    describe("Loop Functionality", () => {
        it("should have one item", () => {
            const wrapper = shallowMount(VCarousel, {
                slots: {
                    default: [h("img")],
                },
            });

            expect(
                wrapper.findAll(
                    ".v-carousel-slides-wrapper > v-carousel-slide-stub"
                ).length
            ).toBe(1);
        });

        it("should add two copied items", () => {
            const wrapper = shallowMount(VCarousel, {
                slots: {
                    default: [h("img"), h("img")],
                },
            });

            expect(
                wrapper.findAll(
                    ".v-carousel-slides-wrapper > v-carousel-slide-stub"
                ).length
            ).toBe(4);
        });
    });
});
