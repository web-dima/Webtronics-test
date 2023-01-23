import {FC} from "react";
import styles from "./About.module.scss"
import {H2, TitleAlign} from "../../UI/Titles";
import Mentors from "../Mentors";
import Text from "../../UI/Text";

const About: FC = ()=> {
    return(
        <div className={styles.about}>
            <H2 text={"About Us"} marginBottom={56} align={TitleAlign.CENTER}/>
            <div className={styles.about__wrapper}>
                <Mentors />
                <Text className={styles.about__text} text={"Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."} />
                <div className={styles.about__decor}>Front</div>
            </div>
        </div>
    )
}

export default About