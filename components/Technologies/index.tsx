import {FC} from "react";
import styles from "./Technologies.module.scss"
import {H2} from "../../UI/Titles";
import Text from "../../UI/Text";
import TechnologiesList from "./TechnologiesList";
import TechnologyInterface from "./Technology.interface";
import {AlignProperty} from "../../UI/utils/AlignProperty.enum";

const technologies: TechnologyInterface[] = [
    {
        id: 1,
        img: "angular.png",
        name: "Angular"
    },
    {
        id: 2,
        img: "react.png",
        name: "React"
    },
    {
        id: 3,
        img: "vue.png",
        name: "Vue.js"
    },
    {
        id: 4,
        img: "js.png",
        name: "JavaScript"
    },
]

const Technologies: FC = ()=> {
    return(
        <div className={styles.technologies} id="technologies">
            <div className={styles.technologies__wrapper}>
                <H2 text={"Programming technologies"} marginBottom={16} align={AlignProperty.CENTER}/>
                <Text className={styles.technologies__text} text={" By the end, you’ll have the portfolio and interview skills you need to start your new career."} align={AlignProperty.CENTER}/>
            </div>
            <TechnologiesList  technologies={technologies}/>
        </div>
    )
}

export default Technologies