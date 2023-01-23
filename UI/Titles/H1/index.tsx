import {FC} from "react";
import styles from "./H1.module.scss"
import {TitleAlign, TitleProps} from "../index";

const H1: FC<TitleProps> = ({text,marginBottom,className,align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : TitleAlign.LEFT
    }
    return(
        <h1 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h1>
    )
}

export default H1