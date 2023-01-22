import {FC} from "react";
import styles from "./Decor.module.scss"
import Star, {StarType} from "../Star";
import Light from "../Light";

const Decor: FC = ()=> {
    return(
        <div className={styles.Decor}>
            <Star type={StarType.LITTLE} top={1299.68} left={1217.21}/>
            <Star type={StarType.NORMAL} top={2258} left={595.5}/>
            <Star type={StarType.LITTLE} top={5847} left={478.5}/>
            <Star type={StarType.LITTLE} top={2678} left={397.5}/>
            <Star type={StarType.NORMAL} top={3034} left={1430.52}/>
            <Star type={StarType.LITTLE} top={3086} left={1511.5}/>
            <Star type={StarType.LITTLE} top={6274} left={578.12}/>
            <Star type={StarType.LITTLE} top={6177.23} left={1098.34}/>
            <Star type={StarType.BIG} top={6022.49} left={1297.09}/>
            <Star type={StarType.LITTLE} top={4372.93} left={1198.93}/>
            <Star type={StarType.NORMAL} top={4877} left={1673.58}/>
            <Star type={StarType.NORMAL} top={4321.4} left={458.37}/>
            <Star type={StarType.LITTLE} top={2854.78} left={1208.72}/>
            <Star type={StarType.NORMAL} top={2694} left={1623.18}/>
            <Star type={StarType.LITTLE} top={1447.12} left={1351.01}/>
            <Star type={StarType.BIG} top={1523.38} left={1598.37}/>
            <Star type={StarType.BIG} top={155} left={1274.02} light/>
            <Star type={StarType.NORMAL} top={790} left={588.1}/>
            <Star type={StarType.NORMAL} top={1136.08} left={355.27}/>
            <Star type={StarType.LITTLE} top={750} left={1247.77}/>
            <Star type={StarType.LITTLE} top={737} left={982.77}/>



            <Light top={1256} left={1468} />
            <Light top={499} left={293} />
            <Light top={2678} left={276} />
            <Light top={1849} left={276} />
            <Light top={388} left={1424} />
            <Light top={5817} left={241} />
            <Light top={6156} left={1441} />
            <Light top={4750} left={1441} />
            <Light top={4421} left={266} />
            <Light top={3720} left={1421} />
        </div>
    )
}

export default Decor