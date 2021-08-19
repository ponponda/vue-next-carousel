import { shallowMount } from "@vue/test-utils";
import VCarouselCounter from "../../../src/lib-components/Counter";
import { CarouselSymbol } from "../../../src/lib-components/types";

describe("Counter Component", () => {
    it("should be same text", () => {
        const wrapper = shallowMount(VCarouselCounter, {
            global: {
                provide: {
                    [CarouselSymbol]: {
                        getSelectedIndex: () => 0,
                        getSourceLength: () => 3,
                    },
                },
            },
        });

        expect(wrapper.text()).toBe("1/3");
    });
});
