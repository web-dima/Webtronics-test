import {FC} from "react";
import styles from "./H4.module.scss"
import {TitleAlign, TitleProps} from "../index";

const H4: FC<TitleProps> = ({text,marginBottom,className, align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : TitleAlign.LEFT
    }
    return(
        <h4 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h4>
    )
}

export default H4