import {FC} from "react";
import styles from "./Mentors.module.scss"
import {H3} from "../../UI/Titles";
import Image from "next/image";
import MentorsList from "./MentorsList";
import {AlignProperty} from "../../UI/types/AlignProperty.enum";
import {mentors} from "../../data";



const Mentors: FC = ()=> {
    return(
        <div className={styles.mentors}>
            <H3 text={"Mentors"} marginBottom={11} align={AlignProperty.CENTER}/>
            <Image src={"assets/img/mentors/lines.svg"} alt={"deco-line"} width={394} height={156} />
            <MentorsList mentors={mentors} />
        </div>
    )
}

export default Mentors