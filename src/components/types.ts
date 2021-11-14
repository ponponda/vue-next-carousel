export const CarouselSymbol = Symbol("VCarousel");

export interface CarouselContext {
    getSelectedIndex(): number;
    getSourceLength(): number;
    getImgWidth(): number;
}
