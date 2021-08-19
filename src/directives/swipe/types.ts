export interface SwipeOptions {
    watch: boolean; // watch moving coordinates
    onStart?: (coordinates: SwipeCoordinates) => void;
    onUp?: (coordinates: SwipeCoordinates) => void;
    onRight?: (coordinates: SwipeCoordinates) => void;
    onDown?: (coordinates: SwipeCoordinates) => void;
    onLeft?: (coordinates: SwipeCoordinates) => void;
    onEnd?: (coordinates: SwipeCoordinates) => void;
}

export type SwipeCoordinates = {
    x: number;
    y: number;
    xDiff?: number;
    yDiff?: number;
};
