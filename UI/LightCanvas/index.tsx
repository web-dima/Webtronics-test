import {FC} from "react";
import styles from "./LightCanvas.module.scss"
import LightDecor from "../../utils/decor.interface";
import Light from "../Light";

interface LightCanvasProps {
    elements: LightDecor[]
}

const LightCanvas: FC<LightCanvasProps> = ({elements})=> {
    return(
        <div className={styles.LightCanvas}>{elements.map((elem)=>{
            return <Light key={elem.id} top={elem.top} left={elem.left}/>
        })}</div>
    )
}

export default LightCanvas