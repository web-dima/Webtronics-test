import {FC} from "react";
import styles from "./Input.module.scss"
import Text from "../Text";
import RegisterInterface from "../../components/Contact/ContactForm/types/Register.interface";

interface InputProps {
    disabled?: boolean
    error?: string,
    filedName: string,
    register: RegisterInterface
}

const Input: FC<InputProps> = ({filedName,disabled, error, register})=> {

    return(
        <div className={`${styles.inputBlock} ${disabled ? styles.disabled : ""} ${error ? styles.error : ""}`}>
            <input
                {...register}
                placeholder={filedName}
            />
            <Text className={styles.inputBlock__text} text={error ? error : ""}/>
        </div>
    )
}

export default Input