import {FC} from "react";
import styles from "./Accordion.module.scss"
import AccordionItemInterface from "./AccordionItem/AccordionItem.interface";
import AccordionItem from "./AccordionItem";

interface AccordionProps {
   items: AccordionItemInterface[]
   className?: string
}

const Accordion: FC<AccordionProps> = ({className, items})=> {
    return(
        <div className={`${styles.accordion} ${className ? className : ""}`}>
            {items.map((item) => {
                return <AccordionItem key={item.id} item={item}/>
            })}
        </div>
    )
}

export default Accordion