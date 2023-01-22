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
    className?: string
}

const Text: FC<TitleProps> = ({text,align,className})=> {
    const style = {
        textAlign:align
    }
    return(
        <span className={`${styles.text} ${className? className: ""}`} style={style}>{text}</span>
    )
}

export default Text