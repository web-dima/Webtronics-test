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
    texts: string[],
    titles: string[],
    amountSlides: number,
    currentSlide: number,
    nextSlide: Function,
    prevSlide: Function
}


interface SliderProps {
    slides: SlideInterface[]
}

const Slider: FC<SliderProps> = ({slides})=> {

    const [images, setImages] = useState<string[]>()
    const [text, setTexts] = useState<string[]>()
    const [title, setTitles] = useState<string[]>()
    const [currentSlide, setCurrentSlide] = useState<number>(1)

    const nextSlide = () => {
      if (currentSlide < slides.length) {
          setCurrentSlide(currentSlide + 1)
      } else {
          setCurrentSlide(1)
      }
    }

    const prevSlide = () => {
        if (currentSlide === 1) {
            setCurrentSlide(3)
        } else {
            setCurrentSlide(currentSlide - 1)
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
                    texts: text ? text: [],
                    titles: title ? title: [],
                    amountSlides: slides.length,
                    currentSlide: currentSlide,
                    nextSlide,
                    prevSlide
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