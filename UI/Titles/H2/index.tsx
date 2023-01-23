import {FC} from "react";
import styles from "./H2.module.scss"
import {TitleAlign, TitleProps} from "../index";


const H2: FC<TitleProps> = ({text,marginBottom,className, align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : TitleAlign.LEFT
    }
    return(
        <h2 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h2>
    )
}

export default H2