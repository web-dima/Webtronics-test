import {FC} from "react";
import styles from "./TechnologiesList.module.scss"
import TechnologyInterface from "../Technology/types/Technology.interface";
import Technology from "../Technology";

interface TechnologiesListProps {
    technologies: TechnologyInterface[]
}

const TechnologiesList: FC<TechnologiesListProps> = ({technologies})=> {
    return(
        <div className={styles.technologiesList}>
            {technologies.map((tech)=>{
                return <Technology key={tech.id} tech={tech}/>
            })}
        </div>
    )
}

export default TechnologiesList