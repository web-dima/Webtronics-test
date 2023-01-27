import {FC, useContext} from "react";
import styles from "./SliderArrows.module.scss"
import Image from "next/image";
import {SliderContext} from "../index";

const SliderArrows: FC = ()=> {
    const {currentSlide,nextSlide,prevSlide} = useContext(SliderContext)

    const nextClickHandler = ()=> {
        nextSlide()
    }

    const prevClickHandler = ()=> {
        prevSlide()
    }

    return(
        <div className={styles.sliderArrows}>
            <div
                onClick={prevClickHandler}
                className={`${styles.sliderArrows__arrow} ${styles.sliderArrows__arrow__left}`}
            >
                <Image
                    src={"./assets/img/slider/arrow-left.svg"}
                    alt={"arrow-left"}
                    width={10}
                    height={20}
                />
            </div>
            <div onClick={nextClickHandler}
                 className={`${styles.sliderArrows__arrow} ${styles.sliderArrows__arrow__left}`}
            >
                <Image
                    src={"./assets/img/slider/arrow-right.svg"}
                    alt={"arrow-right"}
                    width={10}
                    height={20}
                />
            </div>

        </div>
    )
}

export default SliderArrows