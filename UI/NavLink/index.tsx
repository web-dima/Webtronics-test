import {FC} from "react";
import styles from "./NavLink.module.scss"
import { Link } from 'react-scroll'
import Text from "../Text";


interface NavLinkProps {
    text: string,
    className?: string,
    to: string,
    fontSize?: number
}
const NavLink: FC<NavLinkProps> = ({text,className, to,fontSize})=> {

    return(
        <>
            <Link
                to={to}
                spy
                smooth
                duration={400}
            >
                <li className={`${styles.link} ${className ? className : ""}`} >
                    <Text text={text} fontSize={fontSize ? fontSize: 16}/>
                    <div className={styles.line}/>
                </li>
            </Link>
        </>
    )
}

export default NavLink