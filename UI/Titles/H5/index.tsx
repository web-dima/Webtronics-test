import {FC} from "react";
import styles from "./H5.module.scss"
import {TitleProps} from "../index";
import {AlignProperty} from "../../utils/AlignProperty.enum";

const H5: FC<TitleProps> = ({text,marginBottom,className, align})=> {
    const style = {
        marginBottom:marginBottom,
        textAlign: align ? align : AlignProperty.LEFT
    }
    return(
        <h4 className={`${styles.title} ${className? className: ""}`} style={style}>{text}</h4>
    )
}

export default H5