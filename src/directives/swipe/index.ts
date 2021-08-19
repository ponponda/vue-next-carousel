import { Directive } from "vue";
import { SwipeOptions } from "./types";

let startEvent: string,
    moveEvent: string,
    endEvent: string,
    xStart: number | null = null,
    yStart: number | null = null;

let startFn: (e: Event) => void;
let moveFn: (e: Event) => void;
let endFn: (e: Event) => void;

const isTouch = () =>
    "ontouchstart" in window ||
    ("DocumentTouch" in window && document instanceof (window as any).DocumentTouch);

const isPointer = () =>
    !!window.PointerEvent &&
    "maxTouchPoints" in window.navigator &&
    window.navigator.maxTouchPoints >= 0;

const getCoordinates = (e: Event): { x: number; y: number } => {
    let x = 0,
        y = 0;
    if (isTouch()) {
        const evt = e as TouchEvent;
        x = evt.changedTouches[0].pageX;
        y = evt.changedTouches[0].pageY;
    } else if (isPointer()) {
        const evt = e as PointerEvent;
        x = evt.pageX;
        y = evt.pageY;
    } else {
        const evt = e as MouseEvent;
        x = evt.pageX;
        y = evt.pageY;
    }
    return { x, y };
};

const watchDistance = (x: number, y: number, options: SwipeOptions) => {
    if (!xStart || !yStart) return { x: 0, y: 0 };

    const xEnd = x;
    const yEnd = y;

    const xDiff = xEnd - xStart;
    const yDiff = yEnd - yStart;
    const result = { x: xEnd, y: yEnd, xDiff, yDiff };
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            options.onRight?.(result);
        } else {
            options.onLeft?.(result);
        }
    } else {
        if (yDiff < 0) {
            options.onUp?.(result);
        } else {
            options.onDown?.(result);
        }
    }
};

const directive: Directive = {
    beforeMount(el: HTMLElement, { value }: { value: SwipeOptions }) {
        startFn = e => {
            e.preventDefault();
            const { x, y } = getCoordinates(e);
            xStart = x;
            yStart = y;
            value.onStart?.({ x, y });
        };

        moveFn = e => {
            if (!value.watch) return;
            if (!xStart || !yStart) return;

            const { x, y } = getCoordinates(e);
            watchDistance(x, y, value);
        };

        endFn = e => {
            if (!xStart || !yStart) return;

            const { x, y } = getCoordinates(e);
            if (!value.watch) {
                watchDistance(x, y, value);
            }

            const xEnd = x;
            const yEnd = y;

            const xDiff = xEnd - xStart;
            const yDiff = yEnd - yStart;

            value.onEnd?.({
                x: xEnd,
                y: yEnd,
                xDiff,
                yDiff
            });

            xStart = null;
            yStart = null;
        };

        if (isTouch()) {
            startEvent = "touchstart";
            moveEvent = "touchmove";
            endEvent = "touchend";
        } else if (isPointer()) {
            startEvent = "pointerdown";
            moveEvent = "pointermove";
            endEvent = "pointerup";
        } else {
            startEvent = "mousedown";
            moveEvent = "mousemove";
            endEvent = "mouseup";
        }

        el.addEventListener(startEvent, startFn);
        el.addEventListener(moveEvent, moveFn);
        el.addEventListener(endEvent, endFn);
    },
    unmounted(el: HTMLElement) {
        el.removeEventListener(startEvent, startFn);
        el.removeEventListener(moveEvent, moveFn);
        el.removeEventListener(endEvent, endFn);
    }
};

export default directive;
