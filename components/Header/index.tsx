import {FC} from "react";
import styles from "./Header.module.scss"
import Image from "next/image";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <div>
                    <Image src={'./assets/img/header/logo.svg'} alt="logo" width={169} height={33}/>
                </div>
                <nav>
                    <ul className={styles.header__nav}>
                        <li className={styles.header__nav__item}><a href="#">About</a></li>
                        <li className={styles.header__nav__item}><a href="#">Programs</a></li>
                        <li className={styles.header__nav__item}><a href="#">Steps</a></li>
                        <li className={styles.header__nav__item}><a href="#">Questions</a></li>
                        <li className={styles.header__nav__item}><a href="#">Get in touch</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header