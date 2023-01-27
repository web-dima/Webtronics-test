import {FC} from "react";
import styles from "./NavLink.module.scss"
import { Link } from 'react-scroll'


interface NavLinkProps {
    text: string,
    className?: string,
    to: string
}
const NavLink: FC<NavLinkProps> = ({text,className, to})=> {

    return(
        <>
            <Link
                to={to}
                spy
                smooth
                duration={400}
            >
                <li className={`${styles.link} ${className ? className : ""}`} >
                    <span>{text}</span>
                    <div className={styles.link__line}/>
                </li>
            </Link>
        </>
    )
}

export default NavLink