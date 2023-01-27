import {FC} from "react";
import styles from "./Header.module.scss"
import Image from "next/image";
import NavLink from "../../UI/NavLink";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div>
                    <Image src={'./assets/img/main/logo.svg'} alt="logo" width={169} height={33}/>
                </div>
                <nav>
                    <ul className={styles.header__nav}>
                        <NavLink
                            className={styles.header__nav__item}
                            text={"About"}
                            to={"about"}
                        />
                        <NavLink
                            className={styles.header__nav__item}
                            text={"Programs"}
                            to={"technologies"}
                        />
                        <NavLink
                            className={styles.header__nav__item}
                            text={"Steps"}
                            to={"steps"}
                        />
                        <NavLink
                            className={styles.header__nav__item}
                            text={"Questions"}
                            to={"FAQ"}
                        />
                        <NavLink
                            className={styles.header__nav__item}
                            text={"Get in touch"}
                            to={"contact"}
                        />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header