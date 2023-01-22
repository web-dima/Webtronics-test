import {FC} from "react";
import styles from "./Hero.module.scss"
import Text from "../../UI/Text";
import Btn from "../../UI/Btn";
import {H1, H3} from "../../UI/Titles";
import LightCanvas from "../../UI/LightCanvas";
import LightDecor from "../../types/decor.interface";
import Decor from "../../UI/Decor";


const lights: LightDecor[] = [
    {
        id: 1,
        left: 293,
        top: 499
    },
    {
        id: 2,
        left: 1424,
        top: 388
    }
]


const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero__top}>
                <H1 className={styles.hero__top__title}
                    marginBottom={0}
                    text={"Front-End"}
                />
                <Text className={styles.hero__top__text} text={"Make UIs and websites beautiful, functional, and fast. Cover all the topics that expensive bootcamps teach (and more). "}/>
            </div>
            <div className={styles.hero__center}>
                <Btn className={styles.hero__center__btn} text={"Start my career change"}/>
                <H1 marginBottom={0} text={"Developer"} />
            </div>
            <div className={styles.hero__bottom}>
                <H3 className={styles.hero__bottom__title} marginBottom={0} text={"Courses"} />
            </div>
            <Decor />
        </div>
    )
}

export default Hero