import {FC, useContext} from "react";
import styles from "./SliderCount.module.scss"
import {SliderContext} from "../index";

const SliderCount: FC = ()=> {
    const {currentSlide, amountSlides} = useContext(SliderContext)

    return(
        <div className={styles.sliderCount}>{currentSlide}/<span>{amountSlides}</span></div>
    )
}

export default SliderCount