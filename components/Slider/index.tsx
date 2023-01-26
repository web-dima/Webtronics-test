import {createContext, FC, useContext, useEffect, useState} from "react";
import styles from "./Slider.module.scss"
import SlideInterface from "./Slide.interface";
import SliderControls from "./SliderControls";
import SliderInfo from "./SliderInfo";
import Index from "./SliderImages";
import SliderImages from "./SliderImages";

export const SliderContext = createContext({} as SliderContextInterface)

export interface SliderContextInterface {
    images: string[],
    // setImages: Function,
    texts: string[],
    // setTexts: Function,
    titles: string[],
    // setTitles: Function,
    amountSlides: number,
    currentSlide: number,
    setCurSlide: Function
}


interface SliderProps {
    className?: string,
    slides: SlideInterface[]
}

const Slider: FC<SliderProps> = ({className,slides})=> {

    const [images, setImages] = useState<string[]>()
    const [text, setTexts] = useState<string[]>()
    const [title, setTitles] = useState<string[]>()
    const [currentSlide, setCurrentSlide] = useState<number>(1)

    const setCurSlide = () => {
      if (currentSlide < slides.length) {
          setCurrentSlide(currentSlide + 1)
      } else {
          setCurrentSlide(1)
      }
    }

    useEffect(() => {
        const imgs = slides.map((slide)=>{
            return slide.img
        })
        const texts = slides.map((slide)=>{
            return slide.text
        })
        const titles = slides.map((slide)=>{
            return slide.title
        })
        setImages(imgs)
        setTexts(texts)
        setTitles(titles)
    }, []);
    return(
        <div className={styles.slider}>
            <SliderContext.Provider
                value={{
                    images: images ? images: [],
                    // setImages: setImages,
                    texts: text ? text: [],
                    // setTexts: setTexts,
                    titles: title ? title: [],
                    // setTitles: setTitles,
                    amountSlides: slides.length,
                    currentSlide: currentSlide,
                    setCurSlide: setCurSlide
                }}
            >
                <div className={styles.slider__inner}>
                    <SliderInfo/>
                    <div className={styles.slider__inner__content}>
                        <SliderControls/>
                        <SliderImages />
                    </div>
                </div>
            </SliderContext.Provider>
        </div>
    )
}

export default Slider