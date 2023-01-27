import {FC} from "react";
import styles from "./Btn.module.scss"

interface BtnProps {
    text: string,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset"
}

const Btn: FC<BtnProps> = ({text,disabled,className,type})=> {
    return(
        <button className={`${styles.btn} ${className? className: ""}`} disabled={disabled} type={type ? type : "button"}>{text}</button>
    )
}

export default Btn