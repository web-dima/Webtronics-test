import {FC} from "react";
import styles from "./Btn.module.scss"

interface BtnProps {
    text: string,
    disabled?: boolean,
    className?: string
}

const Btn: FC<BtnProps> = ({text,disabled,className})=> {
    return(
        <button className={`${styles.btn} ${className? className: ""}`} disabled={disabled}>{text}</button>
    )
}

export default Btn