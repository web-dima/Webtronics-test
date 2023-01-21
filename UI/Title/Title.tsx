import {FC} from "react";

interface TitleProps {
    text: string,
    marginBottom: number
}

const Title: FC<TitleProps> = ({text,marginBottom})=> {
    const style = {
        marginBottom:marginBottom
    }
    return(
        <div style={style}>{text}</div>
    )
}

export default Title