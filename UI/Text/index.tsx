import {FC} from "react";
import styles from "./Text.module.scss"

export enum AlignProperty {
    RIGHT= "right",
    CENTER= "center",
    LEFT= "left",
}

interface TitleProps {
    text: string,
    align?: AlignProperty
    className?: string,
    fontSize?: number
}

const Text: FC<TitleProps> = ({text,align,className,fontSize})=> {
    const style = {
        textAlign:align,
        fontSize: fontSize ? fontSize : ""
    }
    return(
        <span className={`${styles.text} ${className? className: ""}`} style={style}>{text}</span>
    )
}

export default Text