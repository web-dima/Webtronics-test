import {FC} from "react";
import styles from "./FAQ.module.scss"
import {H2} from "../../UI/Titles";
import {AlignProperty} from "../../UI/types/AlignProperty.enum";
import Text from "../../UI/Text";
import Image from "next/image";
import Accordion from "../Accordion";
import {accordionItems} from "../../data";



const FAQ: FC = ()=> {
    return(
        <div className={styles.FAQ} id="FAQ">
            <H2 text={'Frequently Asked\nQuestions'} marginBottom={56} align={AlignProperty.CENTER} className={styles.FAQ__title}/>

            <div className={styles.FAQ__inner}>
                <div className={styles.FAQ__inner__info}>
                    <Text className={styles.FAQ__inner__info__text} text={"Do you have any kind of questions?\nWe are here to help."}/>
                    <Image className={styles.FAQ__inner__info__img} src={"./assets/img/FAQ/exc-mark.svg"} alt={"?"} width={344} height={405}/>
                </div>
                <Accordion className={styles.FAQ__inner__accordion} items={accordionItems} />
            </div>
        </div>
    )
}

export default FAQ