import {FC} from "react";
import styles from "./H1.module.scss"
import {TitleProps} from "../index";

const H1: FC<TitleProps> = ({text,marginBottom,className})=> {
    const style = {
        marginBottom:marginBottom
    }
    return(
        <h1 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h1>
    )
}

export default H1