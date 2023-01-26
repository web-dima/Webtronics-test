import {FC} from "react";
import styles from "./SliderElement.module.scss"
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Image from "next/image";
import SlideInterface from "../Slide.interface";

interface SliderElementProps {
    slide: SlideInterface
}

const SliderElement: FC<SliderElementProps> = ({slide})=> {
    return(
        <div className={styles.sliderElement}>
            <div className={styles.sliderElement__info}>
                <H4 text={slide.title} marginBottom={17}/>
                <Text text={slide.text}/>
            </div>
            <div className={styles.sliderElement__img}>
                <Image src={require("../../../public/assets/img/reviews/" + slide.img)} alt={"slider-photo"} className={styles.sliderElement__img} />
            </div>
        </div>
    )
}

export default SliderElement