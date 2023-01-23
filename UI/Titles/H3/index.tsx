import {FC} from "react";
import styles from "./H3.module.scss"
import {TitleAlign, TitleProps} from "../index";


const H3: FC<TitleProps> = ({text,marginBottom,className,align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : TitleAlign.LEFT
    }
    return(
        <h3 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h3>
    )
}

export default H3