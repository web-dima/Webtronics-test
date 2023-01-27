import {FC} from "react";
import styles from "./MentorCard.module.scss"
import Image from "next/image";
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import MentorInterface from "./types/Mentor.interface";
import {AlignProperty} from "../../../UI/types/AlignProperty.enum";

interface MentorCardProps {
    mentor: MentorInterface
    centerCard?: boolean
}

const MentorCard: FC<MentorCardProps> = ({mentor,centerCard})=> {

    const src = require("../../../public/assets/img/mentors/" + mentor.img)

    return(
        <div className={`${styles.mentorCard} ${centerCard ? styles.mentorCard__center : ""}`}>
            <Image src={src} alt={mentor.name} width={184} height={184}/>
            <H4 text={mentor.name} marginBottom={4} align={AlignProperty.CENTER} />
            <Text text={mentor.about} fontSize={14}/>
        </div>
    )
}

export default MentorCard