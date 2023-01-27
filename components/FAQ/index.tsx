import {FC} from "react";
import styles from "./FAQ.module.scss"
import {H2} from "../../UI/Titles";
import {AlignProperty} from "../../UI/utils/AlignProperty.enum";
import Text from "../../UI/Text";
import Image from "next/image";
import Accordion from "../Accordion";
import AccordionItemInterface from "../Accordion/AccordionItem/AccordionItem.interface";

const accordionItems:AccordionItemInterface[] = [
    {
        id: 1,
        title: "What is the price?",
        text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
    },
    {
        id: 2,
        title: "What is the price?",
        text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
    },
    {
        id: 3,
        title: "What is the price?",
        text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
    },
    {
        id: 4,
        title: "What is the price?",
        text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
    },
    {
        id: 5,
        title: "What is the price?",
        text: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
    }
]


const FAQ: FC = ()=> {
    return(
        <div className={styles.FAQ}  id="FAQ">
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