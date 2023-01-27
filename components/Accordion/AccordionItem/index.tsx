import {FC, useEffect, useRef, useState} from "react";
import styles from "./AccordionItem.module.scss"
import AccordionItemInterface from "./AccordionItem.interface";
import {H4} from "../../../UI/Titles";
import Text from "../../../UI/Text";
import Image from "next/image";

interface AccordionItemProps {
    item: AccordionItemInterface
}

const TITLE_AND_PADDING_HEIGHT = 103

const AccordionItem: FC<AccordionItemProps> = ({item})=> {
    const TextRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)
    const [fullTextHeight, setFullTextHeight] = useState<number>(0)

    useEffect(()=> {
        if (TextRef.current) {
            setFullTextHeight(TextRef.current.clientHeight + TITLE_AND_PADDING_HEIGHT)
        }
    })

    return(
        <div className={`${styles.accordionItem} ${open ? styles.accordionItem__open : ""}`} style={open ? {maxHeight: fullTextHeight}: {}}>
            <div className={styles.accordionItem__header} onClick={()=> setOpen(!open)}>
                <H4 text={item.title} marginBottom={0}/>
                {open
                    ?
                    <Image src={"./assets/img/FAQ/p.svg"} alt={"toggle-mark"} width={30} height={30} />
                    :
                    <Image src={"./assets/img/FAQ/m.svg"} alt={"toggle-mark"} width={22} height={5} />
                }
            </div>
            <div ref={TextRef} className={styles.text}>
                <Text text={item.text} />
            </div>

        </div>
    )
}

export default AccordionItem