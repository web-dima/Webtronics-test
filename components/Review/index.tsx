import {FC} from "react";
import styles from "./Review.module.scss"
import {H2} from "../../UI/Titles";
import Slider from "../Slider";
import {AlignProperty} from "../../UI/types/AlignProperty.enum";
import {slides} from "../../data";




const Review: FC = ()=> {
    return(
        <div className={styles.review} id="review">
            <H2 text={"Review"} marginBottom={48} align={AlignProperty.CENTER}/>
            <Slider slides={slides}/>
        </div>
    )
}

export default Review