import {FC, useContext} from "react";
import styles from "./SliderInfo.module.scss"
import {SliderContext} from "../index";
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";


const SliderInfo: FC = ()=> {

    const {texts,titles, currentSlide} = useContext(SliderContext)

    return(
        <div className={styles.sliderInfo}>
            <H4 text={titles[currentSlide - 1]} marginBottom={17}/>
            <Text text={texts[currentSlide - 1]}/>
        </div>
    )
}

export default SliderInfo