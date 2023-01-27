import {FC} from "react";
import styles from "./Text.module.scss"
import {AlignProperty} from "../types/AlignProperty.enum";

interface TitleProps {
    text: string,
    align?: AlignProperty
    className?: string,
    fontSize?: number
}

const Text: FC<TitleProps> = ({text,align,className,fontSize})=> {
    const style = {
        textAlign:align,
        fontSize: fontSize ? fontSize : "16px"
    }
    return(
        <div className={`${styles.text} ${className? className: ""}`} style={style}>{text}</div>
    )
}

export default Text