import {FC} from "react";
import styles from "./Mentors.module.scss"
import {H3} from "../../UI/Titles";
import Image from "next/image";
import MentorInterface from "./Mentor.interface";
import Index from "./MentorsList";
import {AlignProperty} from "../../UI/utils/AlignProperty.enum";

const mentors: MentorInterface[] = [
    {
        id: 1,
        img: "WadeWarren.jpg",
        name: "Wade Warren",
        about: "Front-end engineers work closely with designers"
    },
    {
        id: 2,
        img: "KristinWatson.jpg",
        name: "Kristin Watson",
        about: "Front-end engineers work closely with designers"
    },
    {
        id: 3,
        img: "RobertFox.jpg",
        name: "Robert Fox",
        about: "Front-end engineers work closely with designers"
    }
]

const Mentors: FC = ()=> {
    return(
        <div className={styles.mentors}>
            <H3 text={"Mentors"} marginBottom={11} align={AlignProperty.CENTER}/>
            <Image src={"assets/img/mentors/lines.svg"} alt={"deco-line"} width={394} height={156} />
            <Index mentors={mentors} />
        </div>
    )
}

export default Mentors