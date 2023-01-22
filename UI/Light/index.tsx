import {FC} from "react";
import styles from "./Light.module.scss"

interface LightProps {
    top: number,
    left: number;
}

const Light: FC<LightProps> = ({top,left})=> {
    const style = {
        top,left
    }
    return(
        <div className={styles.light} style={style}>1</div>
    )
}

export default Light