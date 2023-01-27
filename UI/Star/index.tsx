import {FC} from "react";
import styles from "./Star.module.scss"
import Image from "next/image";
import {StarType} from "./types/StartType.enum";



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
    if (!light) {
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
    }

    return(
        <>
            {light ?
                <Image className={`${styles.light}`} style={{left,top}} width={356} height={356} src={"./assets/img/main/star.svg"} alt={"starLight"} />
                :
                <div className={`${styles.star}`} style={starSize}/>
            }
        </>
    )
}

export default Star