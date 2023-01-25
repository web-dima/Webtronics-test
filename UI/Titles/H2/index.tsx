import {FC} from "react";
import styles from "./H2.module.scss"
import {TitleProps} from "../index";
import {AlignProperty} from "../../../utils/AlignProperty.enum";


const H2: FC<TitleProps> = ({text,marginBottom,className, align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : AlignProperty.LEFT
    }
    return(
        <h2 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h2>
    )
}

export default H2