import {FC, useState} from "react";
import styles from "./AccordionItem.module.scss"
import AccordionItemInterface from "./AccordionItem.interface";
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Image from "next/image";

interface AccordionItemProps {
    item: AccordionItemInterface
}

const AccordionItem: FC<AccordionItemProps> = ({item})=> {

    const [open, setOpen] = useState<boolean>(false)


    return(
        <div className={`${styles.accordionItem} ${open ? styles.accordionItem__open : ""}`}>
            <div className={styles.accordionItem__header} onClick={()=> setOpen(!open)}>
                <H4 text={item.title} marginBottom={0}/>
                {open
                    ?
                    <Image src={"./assets/img/FAQ/p.svg"} alt={"toggle-mark"} width={30} height={30} />
                    :
                    <Image src={"./assets/img/FAQ/m.svg"} alt={"toggle-mark"} width={22} height={5} />
                }
            </div>
            <Text text={item.text} className={styles.accordionItem__text}/>
        </div>
    )
}

export default AccordionItem