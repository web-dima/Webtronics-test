import {FC} from "react";
import styles from "./SliderControls.module.scss"
import SliderCount from "../SliderCount";
import SliderArrows from "../SliderArrows";

interface SliderControlsProps {

}

const SliderControls: FC<SliderControlsProps> = ()=> {
    return(
        <div className={styles.sliderControls}>
            <SliderCount />
            <SliderArrows />
        </div>
    )
}

export default SliderControls