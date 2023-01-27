import {FC} from "react";
import styles from "./Footer.module.scss"
import Image from "next/image";
import Text from "../../UI/Text";
import {H5} from "../../UI/Titles";
import NavLink from "../../UI/NavLink";

const Footer: FC = ()=> {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__col1}>
                    <Image src={'./assets/img/main/logo.svg'} alt="logo" width={169} height={33}/>
                    <Text className={styles.footer__col1__text} text={"Wisconsin Ave, Suite 700\n" +
                        "Chevy Chase, Maryland 20815"}/>
                </div>
                <div className={styles.footer__col2}>
                    <H5 marginBottom={24} text={"Company"}/>
                    <div className={styles.footer__col2__lists}>
                        <ul className={styles.footer__col2__lists__list}>
                            <NavLink text={"About Us"} to={"about"}/>
                            <NavLink text={"Steps"} to={"steps"}/>
                            <NavLink text={"FAQs"} to={"FAQ"}/>
                        </ul>
                        <ul className={styles.footer__col2__lists__list}>
                            <NavLink text={"Review"} to={"review"}/>
                            <NavLink text={"Gallery"} to={"gallery"}/>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__col3}>
                    <H5 marginBottom={24} text={"Company"}/>
                    <div className={styles.footer__col3__icons}>
                        <Image src={"./assets/img/footer/face.svg"} alt={"facebook"} width={12} height={22}/>
                        <Image src={"./assets/img/footer/lab.svg"} alt={"gitLab"} width={24} height={24}/>
                        <Image src={"./assets/img/footer/tw.svg"} alt={"twitter"} width={24} height={24}/>
                        <Image src={"./assets/img/footer/link.svg"} alt={"Lin"} width={24} height={22}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer