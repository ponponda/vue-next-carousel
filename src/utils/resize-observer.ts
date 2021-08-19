import ResizeObserver from "resize-observer-polyfill";
import { computed, ref, Ref, watch } from "vue";

interface DOMRectReadOnly {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}

export default class {
    private _element: Ref<Element | null> = ref(null);
    private _observer: Ref<ResizeObserver | null> = ref(null);
    private _contentRect: Ref<DOMRectReadOnly | null> = ref(null);

    constructor() {
        const el = computed(() => this._element.value);
        watch(el, () => {
            if (this._observer.value) this._observer.value.disconnect();
            if (!this._element.value) return;

            this._observer.value = new ResizeObserver((entries: ResizeObserverEntry[]) => {
                entries.forEach(entry => {
                    this._contentRect.value = entry.contentRect;
                });
            });

            this._observer.value.observe(this._element.value);
        });
    }

    public get element() {
        return this._element;
    }

    public get contentRect() {
        return this._contentRect;
    }
}
