import {FC} from "react";
import styles from "./H4.module.scss"
import {TitleProps} from "../index";

const H4: FC<TitleProps> = ({text,marginBottom,className})=> {
    const style = {
        marginBottom:marginBottom
    }
    return(
        <h4 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h4>
    )
}

export default H4