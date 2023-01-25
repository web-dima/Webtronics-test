import {FC} from "react";
import styles from "./MentorCard.module.scss"
import Image from "next/image";
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import MentorInterface from "../Mentor.interface";
import {AlignProperty} from "../../../utils/AlignProperty.enum";

interface MentorCardProps extends Omit<MentorInterface, "id">{
    centerCard?: boolean
}

const MentorCard: FC<MentorCardProps> = ({img,name,about,centerCard})=> {

    const src = require("../../../public/assets/img/mentors/" + img)

    return(
        <div className={`${styles.mentorCard} ${centerCard ? styles.mentorCard__center : ""}`}>
            <Image src={src} alt={name} width={184} height={184}/>
            <H4 text={name} marginBottom={4} align={AlignProperty.CENTER} />
            <Text text={about} fontSize={14}/>
        </div>
    )
}

export default MentorCard