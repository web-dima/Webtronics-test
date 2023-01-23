import {FC} from "react";
import styles from "./TechnologiesList.module.scss"

interface TechnologiesListProps {

}

const TechnologiesList: FC<TechnologiesListProps> = ()=> {
    return(
        <div className={styles.technologiesList}>TechnologiesList</div>
    )
}

export default TechnologiesList