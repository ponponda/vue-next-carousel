import { shallowMount } from "@vue/test-utils";
import VCarouselPager from "../../../src/components/Pager";
import { CarouselSymbol } from "../../../src/components/types";

describe("Counter Component", () => {
    let idx = 0,
        length = 0;
    let carouselCtx: any;
    beforeEach(() => {
        carouselCtx = {
            getSourceLength: () => length,
            getSelectedIndex: () => idx,
        };
    });
    it("should have same button length", () => {
        length = 3;
        const wrapper = shallowMount(VCarouselPager, {
            global: {
                provide: {
                    [CarouselSymbol]: carouselCtx,
                },
            },
        });
        expect(wrapper.findAll("button").length).toBe(3);
    });

    it("should emit click button event", async () => {
        length = 2;
        const wrapper = shallowMount(VCarouselPager, {
            global: {
                provide: {
                    [CarouselSymbol]: carouselCtx,
                },
            },
        });

        await wrapper.findAll("button")[1].trigger("click");
        expect(wrapper.emitted("click")?.[0]).toEqual([1]);
    });

    it("is current selection", async () => {
        idx = 2;
        length = 3;
        const wrapper = shallowMount(VCarouselPager, {
            global: {
                provide: {
                    [CarouselSymbol]: carouselCtx,
                },
            },
        });

        expect(wrapper.findAll("button")[2].classes()).toContain(
            "v-carousel-current-page"
        );
    });
});
