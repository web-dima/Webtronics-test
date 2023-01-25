import {FC} from "react";
import styles from "./Steps.module.scss"
import {H2} from "../../UI/Titles";
import StepsList from "./StepsList";
import StepInterface from "./Step.interface";
import {AlignProperty} from "../../utils/AlignProperty.enum";

const steps: StepInterface[] = [
    {
        id: 1,
        step: 1,
        title: "Introduction to Front-End ",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        id: 2,
        step: 2,
        title: "Overview of Development",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        id: 3,
        step: 3,
        title: "Introduction to Front-End ",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        id: 4,
        step: 4,
        title: "Overview of Development",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        id: 5,
        step: 5,
        title: "Introduction to Front-End ",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    },
    {
        id: 6,
        step: 6,
        title: "Overview of Development",
        text: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
    }
]

const Steps: FC = ()=> {
    return(
        <div className={styles.steps}>
            <H2 text={"Steps"} marginBottom={56} align={AlignProperty.CENTER}/>
            <StepsList  steps={steps}/>
        </div>
    )
}

export default Steps