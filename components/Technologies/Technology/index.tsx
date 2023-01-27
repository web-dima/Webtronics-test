import {FC} from "react";
import styles from "./Technology.module.scss"
import TechnologyInterface from "./types/Technology.interface";
import Image from "next/image";
import {H4} from "../../../UI/Titles";
import {AlignProperty} from "../../../UI/types/AlignProperty.enum";

interface TechnologyProps {
    tech: TechnologyInterface
}

const Technology: FC<TechnologyProps> = ({tech})=> {

    const src = require("../../../public/assets/img/technologies/" + tech.img)

    return(
        <div className={styles.technology}>
            <div className={styles.technology__design} />
            <Image src={src} alt={tech.name} className={styles.technology__img}/>
            <H4 text={tech.name} marginBottom={0} align={AlignProperty.CENTER}/>
        </div>
    )
}

export default Technology