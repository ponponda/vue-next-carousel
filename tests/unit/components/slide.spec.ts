import { shallowMount } from "@vue/test-utils";
import { h } from "vue";
import VCarouselSlide from "../../../src/lib-components/Slide";
import { CarouselSymbol } from "../../../src/lib-components/types";

describe("Slide Component", () => {
    it("should match snapshot", () => {
        const wrapper = shallowMount(VCarouselSlide, {
            props: { active: true },
            global: {
                provide: {
                    [CarouselSymbol]: {
                        getImgWidth: () => 200,
                    },
                },
            },
            slots: {
                default: [h("div")],
            },
        });

        expect(wrapper.html()).toMatchSnapshot();
    });
});
