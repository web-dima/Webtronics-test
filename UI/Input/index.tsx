import {FC} from "react";
import styles from "./Input.module.scss"
import Text from "../Text";

interface InputProps {
    disabled?: boolean
    error?: string,
    filedName: string
}

const Input: FC<InputProps> = ({filedName,disabled, error})=> {
    return(
        <div className={`${styles.inputBlock} ${disabled ? styles.disabled : ""} ${error ? styles.error : ""}`}>
            <input placeholder={filedName}/>
            <Text className={styles.inputBlock__text} text={error ? error : ""}/>
        </div>
    )
}

export default Input