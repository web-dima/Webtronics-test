import {FC} from "react";
import styles from "./Steps.module.scss"
import {H2} from "../../UI/Titles";
import StepsList from "./StepsList";
import {AlignProperty} from "../../UI/types/AlignProperty.enum";
import {steps} from "../../data";



const Steps: FC = ()=> {
    return(
        <div className={styles.steps} id="steps">
            <H2 text={"Steps"} marginBottom={56} align={AlignProperty.CENTER}/>
            <StepsList steps={steps}/>
        </div>
    )
}

export default Steps