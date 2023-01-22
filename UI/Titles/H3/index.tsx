import {FC} from "react";
import styles from "./H3.module.scss"
import {TitleProps} from "../index";


const H3: FC<TitleProps> = ({text,marginBottom,className})=> {
    const style = {
        marginBottom:marginBottom
    }
    return(
        <h3 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h3>
    )
}

export default H3