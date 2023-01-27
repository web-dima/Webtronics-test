import {FC} from "react";
import styles from "./Technologies.module.scss"
import {H2} from "../../UI/Titles";
import Text from "../../UI/Text";
import TechnologiesList from "./TechnologiesList";
import {AlignProperty} from "../../UI/types/AlignProperty.enum";
import {technologies} from "../../data";

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