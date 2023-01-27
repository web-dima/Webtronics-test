import {FC} from "react";
import styles from "./MentorsList.module.scss"
import MentorInterface from "../MentorCard/types/Mentor.interface";
import MentorCard from "../MentorCard";

interface MentorsListProps {
    mentors: MentorInterface[]
}

const MentorsList: FC<MentorsListProps> = ({mentors})=> {
    return(
        <div className={styles.mentorsList}>
            {mentors.map((mentor, idx)=> {
                if (idx === 1) {
                    return <MentorCard key={mentor.id} mentor={mentor} centerCard/>
                } else {
                    return <MentorCard key={mentor.id} mentor={mentor} />
                }
            })}
        </div>
    )
}

export default MentorsList