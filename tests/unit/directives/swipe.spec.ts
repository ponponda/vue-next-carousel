import Swipe from "../../../src/directives/swipe";
import { shallowMount, config } from "@vue/test-utils";

config.global.directives["swipe"] = Swipe;

const App = {
    props: {
        watch: Boolean
    },
    data() {
        return {
            options: {
                watch: (this as any).watch,
                onStart: jest.fn(),
                onLeft: jest.fn(),
                onRight: jest.fn(),
                onUp: jest.fn(),
                onDown: jest.fn(),
                onEnd: jest.fn()
            }
        };
    },
    template: `<div v-swipe="options"></div>`
};

describe("Swipe Directive", () => {
    it("should trigger events", async () => {
        const wrapper = shallowMount(App);

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        expect(wrapper.vm.$data.options.onStart).toBeCalled();
        await wrapper.trigger("mousemove", { pageX: 50, pageY: 60 });
        expect(wrapper.vm.$data.options.onDown).not.toBeCalled();
        await wrapper.trigger("mouseup", { pageX: 60, pageY: 60 });
        expect(wrapper.vm.$data.options.onEnd).toBeCalled();
    });

    it("should watch swipe distance", async () => {
        const wrapper = shallowMount(App, { props: { watch: true } });

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        await wrapper.trigger("mousemove", { pageX: 50, pageY: 60 });
        expect(wrapper.vm.$data.options.onDown).toBeCalled();
        await wrapper.trigger("mouseup");
    });

    it("should swipe up", async () => {
        const wrapper = shallowMount(App);

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        await wrapper.trigger("mouseup", { pageX: 50, pageY: 0 });
        expect(wrapper.vm.$data.options.onUp).toBeCalled();
    });

    it("should swipe right", async () => {
        const wrapper = shallowMount(App);

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        await wrapper.trigger("mouseup", { pageX: 100, pageY: 50 });
        expect(wrapper.vm.$data.options.onRight).toBeCalled();
    });

    it("should swipe down", async () => {
        const wrapper = shallowMount(App);

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        await wrapper.trigger("mouseup", { pageX: 50, pageY: 100 });
        expect(wrapper.vm.$data.options.onDown).toBeCalled();
    });

    it("should swipe left", async () => {
        const wrapper = shallowMount(App);

        await wrapper.trigger("mousedown", { pageX: 50, pageY: 50 });
        await wrapper.trigger("mouseup", { pageX: 0, pageY: 50 });
        expect(wrapper.vm.$data.options.onLeft).toBeCalled();
    });
});
