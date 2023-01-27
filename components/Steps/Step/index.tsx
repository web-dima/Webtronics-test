import {FC} from "react";
import styles from "./Step.module.scss"
import StepInterface from "./types/Step.interface";
import {H3, H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Image from "next/image";

interface StepProps {
    step: StepInterface
}

const Step: FC<StepProps> = ({step})=> {

    const pointerSideClass = step.id %2 === 0 ? styles.step__content__pointer__left : styles.step__content__pointer__right
    const StepSideClass = step.id %2 === 0 ? styles.step__left : styles.step__right

    return(
        <div className={`${styles.step} ${StepSideClass}`}>
            <div className={styles.step__content}>
                <H4 text={`Step ${step.step}`} marginBottom={16} />
                <H3 text={step.title} marginBottom={16}/>
                <Text text={step.text} className={styles.step__content__text}/>
                <Image className={`${styles.step__content__pointer} ${pointerSideClass}`} src={"./assets/img/steps/arrow.svg"} alt={"arrow-pointer"} width={104} height={24}/>
            </div>
        </div>


    )
}

export default Step