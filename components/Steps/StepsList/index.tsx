import {FC} from "react";
import styles from "./StepsList.module.scss"
import StepInterface from "../Step/types/Step.interface";
import separateArray from "../../../helpers/SeparateArray";
import Step from "../Step";

interface StepsListProps {
    steps: StepInterface[]
}

const StepsList: FC<StepsListProps> = ({steps})=> {

    const [even, odd] = separateArray(steps)

    return(
        <div className={styles.stepsList}>
            <div>
                {odd.map((step)=> {
                    return <Step key={step.id} step={step}/>
                })}
            </div>
            <div className={styles.stepsList__separator} />
            <div className={styles.stepsList__oddList}>
                {even.map((step)=> {
                    return <Step key={step.id} step={step}/>
                })}
            </div>
        </div>
    )
}

export default StepsList