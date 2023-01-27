import {FC} from "react";
import styles from "./Contact.module.scss"
import ContactFrom from "./ContactForm";

const Contact: FC = ()=> {
    return(
        <div className={styles.contact} id="contact">
            <ContactFrom />
        </div>
    )
}

export default Contact