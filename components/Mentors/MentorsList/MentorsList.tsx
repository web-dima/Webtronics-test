import {FC} from "react";
import styles from "./MentorsList.module.scss"
import MentorInterface from "../Mentor.interface";
import MentorCard from "../MentorCard";

interface MentorsListProps {
    mentors: MentorInterface[]
}

const MentorsList: FC<MentorsListProps> = ({mentors})=> {
    return(
        <div className={styles.mentorsList}>
            {mentors.map((mentor, idx)=> {
                if (idx === 1) {
                    return <MentorCard key={mentor.id} img={mentor.img} name={mentor.name} about={mentor.about} centerCard/>
                }
                return <MentorCard key={mentor.id} img={mentor.img} name={mentor.name} about={mentor.about} />
            })}
        </div>
    )
}

export default MentorsList