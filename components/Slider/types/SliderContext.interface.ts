export interface SliderContextInterface {
    images: string[],
    texts: string[],
    titles: string[],
    amountSlides: number,
    currentSlide: number,
    nextSlide: Function,
    prevSlide: Function
}