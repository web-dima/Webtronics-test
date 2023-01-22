import {FC} from "react";
import styles from "./Star.module.scss"

export enum StarType {
    LITTLE= "little",
    NORMAL= "normal",
    BIG= "big"
}

interface StarProps {
    type?: StarType,
    light?: boolean
    top: number,
    left: number
}

const Star: FC<StarProps> = ({type,light,top,left})=> {
    const starSize = {
        width: 21.5,
        height: 24.58,
        top,
        left
    }
    switch (type) {
        case StarType.BIG: {
            starSize.width = 35.55
            starSize.height = 40.63
            break
        }
        case StarType.NORMAL: {
            break
        }
        case StarType.LITTLE: {
            starSize.width = 11.5
            starSize.height = 13.15
            break
        }
        default: {
            break
        }
    }

    return(
        <div className={light ? styles.light: ""}>
            <div className={`${styles.star}`} style={starSize}>Star</div>
        </div>

    )
}

export default Star